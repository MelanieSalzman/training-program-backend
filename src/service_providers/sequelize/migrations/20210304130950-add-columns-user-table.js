'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn('user', 'fistName', {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }, { transaction: t })
      await queryInterface.addColumn('user', 'lastName', {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }, { transaction: t })
      await queryInterface.addColumn('user', 'email', {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }, { transaction: t })
      await queryInterface.addColumn('user', 'password', {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }, { transaction: t })
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn('user', 'fistName', { transaction: t })
      await queryInterface.removeColumn('user', 'lastName', { transaction: t })
      await queryInterface.removeColumn('user', 'email', { transaction: t })
      await queryInterface.removeColumn('user', 'password', { transaction: t })
    })
  }
};
