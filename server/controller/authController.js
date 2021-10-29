/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Bearer } = require('permit');

const { Users } = require('../db/models');

const permit = new Bearer();

module.exports = {
  login(req, res) {
    const { email, password } = req.body;

    Users.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) return res.status(401).json({ error: 'E-mail not found.' });
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ error: 'Invalid password.' });
        }

        const jwtPayload = { email: user.email };
        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

        return res.status(200).json({ token });
      })
      .catch((error) => res.status(400).json({
        code: 400,
        error: error.message,
      }));
  },

  auth(req, res, next) {
    const token = permit.check(req);

    if (!token) {
      permit.fail(res);
      return res.status(401).json({ error: 'Authentication required.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({ error: 'Failed to authenticate token.' });
      }

      req.email = decoded.email;
      next();
    });
  },

};
