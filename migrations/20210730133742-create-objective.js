'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Objectives', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      organizationType: {
        type: Sequelize.ENUM,
        values: ['individual', 'team','organization'],
        defaultValue: 'organization',
      },
      ownerUsername: {
        type: Sequelize.STRING,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'Users',
          key: 'username'
        }
      },
      progressType: {
        type: Sequelize.ENUM,
        defaultValue: 'automatic',
        values: ['manual', 'automatic']
      },
      starttDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }, 
      endtDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      period: {
        type: Sequelize.STRING,
        allowNull: false,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Objectives');
  }
};