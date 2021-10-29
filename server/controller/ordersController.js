/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Orders, Products, ProductsOrders } = require('../db/models');

const getAllOrders = (req, res) => {
  Orders.findAll({
    include: [
      {
        model: Products,
        as: 'Products',
        required: false,
        attributes: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'image',
          'type',
          'subtype',
        ],
        through: {
          model: ProductsOrders,
          as: 'ProductsOrders',
          attributes: ['qtd'],
        },
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const getOrderById = (req, res) => {
  Orders.findAll({
    where: { id: req.params.order_id },
    include: [
      {
        model: Products,
        as: 'Products',
        required: false,
        attributes: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'image',
          'type',
          'subtype',
        ],
        through: {
          model: ProductsOrders,
          as: 'ProductsOrders',
          attributes: ['qtd'],
        },
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const postOrder = async (req, res) => {
  const {
    user_id, cliente_name, table, status, processedAt,
  } = req.body;
  await Orders.create({
    user_id,
    cliente_name,
    table,
    status,
    processedAt,
  }).then((result) => {
    req.body.products
      .map((item) => {
        const itemProduct = Products.findByPk(item.id);
        if (!itemProduct) {
          return res.status(400).json({
            message: 'Product not found.',
          });
        }

        const itemOrders = {
          order_id: result.id,
          product_id: item.id,
          qtd: item.qtd,
        };

        ProductsOrders.create(itemOrders);

        return res.status(200).json(result);
      })
      .catch((error) => res.status(400).json({
        code: 400,
        error: error.message,
      }));
  });
};

const putOrder = (req, res) => {
  const {
    cliente_name, user_id, table, status,
  } = req.body;
  Orders.update(
    {
      cliente_name,
      user_id,
      table,
      status,
    },
    {
      where: {
        id: req.params.order_id,
      },
    },
  )
    .then(() => {
      res.status(200).json({
        message: 'Updated successfully!',
      });
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const deleteOrder = (req, res) => {
  Orders.destroy({
    where: {
      id: req.params.order_id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: 'Deleted Successfully!',
      });
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

module.exports = {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
};
