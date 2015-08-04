module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define('Topic', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    name : DataTypes.STRING,
    created_at : DataTypes.DATE,
    updated_at : DataTypes.DATE
  },{
    underscored: true,
    tableName: 'topics'
  });
  return Topic;
}