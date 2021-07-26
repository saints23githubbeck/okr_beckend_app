'use strict';
const {
  Model
} = require('sequelize');
const keyresults = require('./keyresults');
module.exports = (sequelize, DataTypes) => {
  class objectives extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users}) {
      // define association here

      this.belongsTo(users ,{foreignKey: 'user_id'});
     
    
    }
    static associate({keyResults}) {
      // define association here

      this.belongsTo(keyResults ,{foreignKey:'objective_id'});
     
      
    }
  };
  objectives.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },

    description:{
    type: DataTypes.STRING ,
    allowNull: true
    }, 
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false
      }
  }, {
    sequelize,
    modelName: 'objectives',
  });
  return objectives;
};