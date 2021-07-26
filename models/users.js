'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({objectives}) {
      // define association here
        this.hasMany(objectives,{foreignKey: 'user_id'})
      
    }
  };
  users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,   
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'users',
  });
  return users;
};