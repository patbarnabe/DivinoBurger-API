/* eslint-disable no-unused-vars */
const getAllUsers = (req, res, next) => {
  res.status(200).send('function getAllUsers');
};

const getUserById = (req, res, next) => {
  res.status(200).send('function getUserById');
};

const postUser = (req, res, next) => {
  res.status(201).send('function postUser');
};

const putUser = (req, res, next) => {
  res.status(200).send('function putUser');
};

const deleteUser = (req, res, next) => {
  res.status(200).send('function deleteUser');
};

module.exports = {
  getAllUsers, getUserById, postUser, putUser, deleteUser,
};
