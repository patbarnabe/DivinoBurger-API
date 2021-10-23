/* eslint-disable no-unused-vars */
const { Products } = require('../db/models');

const getAllProducts = (req, res, next) => {
  Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(next);
};

const getProductById = (req, res, next) => {
  Products.findByPk(req.params.product_id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(next);
};

const postProduct = (req, res, next) => {
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
    .catch(next);
};

const putProduct = (req, res, next) => {
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
    .catch(next);
};

const deleteProduct = (req, res, next) => {
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
    .catch(next);
};

module.exports = {
  getAllProducts, getProductById, postProduct, putProduct, deleteProduct,
};
