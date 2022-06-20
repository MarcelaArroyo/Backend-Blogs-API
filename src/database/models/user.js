const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
      as: 'blogPosts'
    });
  };

  return UserTable;
}

module.exports = UserSchema;