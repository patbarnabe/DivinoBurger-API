/* eslint-disable no-unused-vars */
const { Products } = require('../db/models');

const getAllProducts = (req, res) => {
  Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const getProductById = (req, res) => {
  Products.findByPk(req.params.product_id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const postProduct = (req, res) => {
  const {
    name, flavor, complement, price, image, type, subtype,
  } = req.body;
  Products.create({
    name,
    flavor,
    complement,
    price,
    image,
    type,
    subtype,
  })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const putProduct = (req, res) => {
  const {
    name, price, flavor, complement, image, type, subtype,
  } = req.body;
  Products.update(
    {
      name,
      price,
      flavor,
      complement,
      image,
      type,
      subtype,
    },
    {
      where: {
        id: req.params.product_id,
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

const deleteProduct = (req, res) => {
  Products.destroy({
    where: {
      id: req.params.product_id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: 'Deleted successfully!',
      });
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

module.exports = {
  getAllProducts, getProductById, postProduct, putProduct, deleteProduct,
};
