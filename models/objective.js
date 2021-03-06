'use strict';
module.exports = (sequelize, DataTypes) => {
  const Objective = sequelize.define('Objective', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    organizationType: {
      type: DataTypes.ENUM,
      values: ['individual','team','organization'],
      defaultValue: 'organization',
    },
    ownerUsername: {
      type: DataTypes.STRING
    },
    progressType: {
      type: DataTypes.ENUM,
      defaultValue: 'automatic',
      values: ['manual', 'automatic']
    },
    starttDate: {
      type: DataTypes.DATE,
    }, 
    endtDate: {
      type: DataTypes.DATE,
    },
    period: {
      type: DataTypes.STRING,
    },
  }, {});
  Objective.associate = function(models) {
    // associations can be defined here
    Objective.belongsTo(models.User, {foreignKey: 'ownerUsername'})
    Objective.hasMany(models.Keyresult, {foreignKey: 'obj_id'})
  };
  return Objective;
};