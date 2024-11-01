'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Enums} = require('../utils/common')
const {PENDING,FAILED,SUCCESS} = Enums.email_status
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        allowNull:false
      },
      recepientEmails: {
        type: Sequelize.STRING,
        allowNull:false
      },
      text: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values:[PENDING,FAILED,SUCCESS],
        defaultValue:PENDING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};