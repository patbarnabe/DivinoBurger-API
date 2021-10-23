/* eslint-disable no-console */

const getAllUsers = (req, res) => {
  console.log('function getAllUsers');
  res.send('function getAllUsers');
};

const getUserById = (req, res) => {
  console.log('function getUserById');
  res.send('function getUserById');
};

const postUser = (req, res) => {
  console.log('function postUser');
  res.send('function postUser');
};

const putUser = (req, res) => {
  console.log('function putUser');
  res.send('function putUser');
};

const deleteUser = (req, res) => {
  console.log('function deleteUser');
  res.send('function deleteUser');
};

module.exports = {
  getAllUsers, getUserById, postUser, putUser, deleteUser,
};
