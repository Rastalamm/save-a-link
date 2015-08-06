module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define('Bookmark', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    title : DataTypes.STRING,
    url : DataTypes.STRING,
    description : DataTypes.STRING(1234),
    created_at : DataTypes.DATE,
    updated_at : DataTypes.DATE
  },{
    underscored: true,
    tableName: 'bookmarks',
    classMethods : {
      associate : function(models){
        Bookmark.belongsTo(models.User, {foreignKey : 'user_id', foreignKeyConstraint:true});
        Bookmark.belongsTo(models.Topic, {foreignKey : 'topic_id', foreignKeyConstraint:true});
        Bookmark.hasMany(models.Comment);
      }
    }
  });
  return Bookmark;
}