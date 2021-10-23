/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(models.ProductsOrders,
        {
          through: 'ProductsOrders',
          as: 'orders',
          foreignKey: 'products_id',
        });
    }
  }
  Products.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
