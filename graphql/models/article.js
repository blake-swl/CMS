export default (sequelize, DataTypes) => {
  const Article = sequelize.define("article", {
    text: DataTypes.STRING,
  });

  Article.associate = (models) => {
    Article.belongsTo(models.Collection, {
      foreignKey: 'collectionId',
    });
    Article.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  }

  return Article;
};