export default (sequelize, DataTypes) => {
  const Collection = sequelize.define("collection", {
    name: DataTypes.STRING,
    subtitle: DataTypes.STRING,
  });

  Collection.associate = (models) => {
    Collection.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    // Collection.belongsToMany(models.)
  }

  return Collection;
};