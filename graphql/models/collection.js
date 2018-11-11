export default (sequelize, DataTypes) => {
  const Collection = sequelize.define("collection", {
    name: DataTypes.STRING,
  });

  Collection.associate = (models) => {
    Collection.belongsToMany(models.User, {
      through: 'channel_member',
      foreignKey: 'channelId'
    });
  }

  return Collection;
};