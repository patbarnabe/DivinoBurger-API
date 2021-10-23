/* eslint-disable no-console */

const getAllProducts = (req, res) => {
  console.log('function getAllProducts');
  res.send('function getAllProducts');
};

const getProductById = (req, res) => {
  console.log('function getProductById');
  res.send('function getProductById');
};

const postProduct = (req, res) => {
  console.log('function postAllProducts');
  res.send('function postAllProducts');
};

const putProduct = (req, res) => {
  console.log('function putProduct');
  res.send('function putProduct');
};

const deleteProduct = (req, res) => {
  console.log('function deleteProduct');
  res.send('function deleteProduct');
};

module.exports = {
  getAllProducts, getProductById, postProduct, putProduct, deleteProduct,
};
