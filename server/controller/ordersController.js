/* eslint-disable no-unused-vars */
const getAllOrders = (req, res, next) => {
  res.status(200).send('function getAllOrders');
};

const getOrderById = (req, res, next) => {
  res.status(200).send('function getOrderById');
};

const postOrder = (req, res, next) => {
  res.status(201).send('function postOrders');
};

const putOrder = (req, res, next) => {
  res.status(200).send('function putOrder');
};

const deleteOrder = (req, res, next) => {
  res.status(200).send('function deleteOrder');
};

module.exports = {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
};
