'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keyResults extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({objectives}) {
      // define association here
        this.hasMany(objectives, {foreignKey: 'objective_id'})
    }
  };
  keyResults.init({
    name:{
     type:DataTypes.STRING, 
     allowNull: false
    },

    description:{
     type: DataTypes.STRING,
     allowNull:true
    }, 
    objective_id: {
     type: DataTypes.INTEGER,
     allowNull:false
    }
  }, {
    sequelize,
    modelName: 'keyResults',
  });
  return keyResults;
};