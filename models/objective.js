'use strict';
module.exports = (sequelize, DataTypes) => {
  const Objective = sequelize.define('Objective', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.ENUM,
      defaultValue: 'organization',
      values: ['individual', 'organization']
    },
    ownerUsername: {
      type: DataTypes.STRING
    },
    progressType: {
      type: DataTypes.ENUM,
      defaultValue: 'automatic',
      values: ['manual', 'automatic']
    }
  }, {});
  Objective.associate = function(models) {
    // associations can be defined here
  };
  return Objective;
};