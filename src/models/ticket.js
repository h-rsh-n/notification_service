'use strict';
const {
  Model
} = require('sequelize');
const {Enums} = require('../utils/common')
const {PENDING,FAILED,SUCCESS} = Enums.email_status
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false
    },
    recepientEmails: {
      type:DataTypes.STRING,
      allowNull:false
    },
    text: {
      type:DataTypes.STRING,
    },
    status: {
      type:DataTypes.STRING,
      values:[PENDING,FAILED,SUCCESS],
      defaultValue:PENDING
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};