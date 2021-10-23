/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductsOrders.belongsTo(models.Orders, { foreignKey: 'order_id' });
      ProductsOrders.belongsTo(models.Products, { foreignKey: 'product_id' });
    }
  }
  ProductsOrders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};
