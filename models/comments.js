module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    body : DataTypes.STRING,
    created_at : DataTypes.DATE,
    updated_at : DataTypes.DATE
  },{
    underscored: true,
    tableName: 'comments',
    classMethods : {
      associate : function(models){
        Comment.belongsTo(models.User, {foreignKey : 'user_id'});
        Comment.belongsTo(models.Bookmark, {foreignKey : 'topic_id'});
      }
    }
  });
  return Comment;
}