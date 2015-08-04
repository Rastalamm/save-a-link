module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    email : DataTypes.STRING,
    first_name : DataTypes.STRING,
    last_name : DataTypes.STRING,
    created_at : DataTypes.DATE,
    updated_at : DataTypes.DATE
  },{
    underscored: true,
    tableName: 'users',
    classMethods : {
      associate: function(models){
        User.hasMany(models.Bookmark);
        User.hasMany(models.Comment);
      }
    }
  });
  return User;
}