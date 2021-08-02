'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keyresult = sequelize.define('Keyresult', {
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
    obj_id: {
      type: DataTypes.STRING,
    },
  }, {});
  Keyresult.associate = function(models) {
    // associations can be defined here
    Keyresult.belongsTo(models.User, {foreignKey: 'ownerUsername'})
    Keyresult.belongsTo(models.Objective, {foreignKey: 'obj_id'})
  };
  return Keyresult;
};