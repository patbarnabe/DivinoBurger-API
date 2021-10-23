/* eslint-disable no-console */

const getAllOrders = (req, res) => {
  console.log('function getAllOrders');
  res.send('function getAllOrders');
};

const getOrderById = (req, res) => {
  console.log('function getOrderById');
  res.send('function getOrderById');
};

const postOrder = (req, res) => {
  console.log('function postAllOrders');
  res.send('function postAllOrders');
};

const putOrder = (req, res) => {
  console.log('function putOrder');
  res.send('function putOrder');
};

const deleteOrder = (req, res) => {
  console.log('function deleteOrder');
  res.send('function deleteOrder');
};

module.exports = {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
};
