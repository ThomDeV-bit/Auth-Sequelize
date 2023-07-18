'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable("Contacts",
      {

        id_contact: {
          primaryKey: true,
          type: DataTypes.UUID,
          allowNull: false
        },


        userID: {
          type: DataTypes.UUID,
          allowNull: false,

        },

        fullName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        adress: {
          type: DataTypes.STRING,
          allowNull: false
        },

        number: {
          type: DataTypes.STRING,
          allowNull: false,

        },


        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },

        updatedAt: {

          allowNull: false,
          type: DataTypes.DATE
        }
      }
    
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("Contacts")
  }
};
  

