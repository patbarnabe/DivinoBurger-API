/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { Users } = require('../db/models');

const getAllUsers = (req, res) => {
  Users.findAll({
    order: [['id', 'ASC']],
    attributes: {
      // exclude: 'password',
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const getUserById = (req, res) => {
  Users.findByPk(req.params.user_id, {
    attributes: {
      exclude: 'password',
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const postUser = (req, res) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;
  Users.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    role,
    restaurant,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => res.status(400).json({
      code: 400,
      error: error.message,
    }));
};

const putUser = (req, res) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;
  Users.update(
    {
      name,
      email,
      password,
      role,
      restaurant,
    },
    {
      where: {
        id: req.params.user_id,
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

const deleteUser = (req, res) => {
  Users.destroy({
    where: {
      id: req.params.user_id,
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
  getAllUsers, getUserById, postUser, putUser, deleteUser,
};
