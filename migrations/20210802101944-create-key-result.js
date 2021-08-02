'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('keyResults', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      titlt: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      onerUsername: {
        type: Sequelize.STRING,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'Users',
          key: 'username'
        }
      },
      startdate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      period: {
        type: Sequelize.STRING,
        allowNull:false
      },
      progreeType: {
        type: Sequelize.ENUM,
        defaultValue: 'automatic',
        values: ['manual', 'automatic']
      },
      organizationType: {
        type: Sequelize.ENUM,
        values: ['individual', 'team','organization'],
        defaultValue: 'organization',
      },
      obj_id: {
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('keyResults');
  }
};