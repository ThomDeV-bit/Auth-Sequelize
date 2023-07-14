'use strict';

const { QueryTypes, DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,

        mail: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
          
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false


        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false

        },
        updatedAt: {

          type: DataTypes.DATE,
          allowNull: false

        }
      }})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables('Users')
  }
};
