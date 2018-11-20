export default (sequelize, DataTypes) => {
  const Article = sequelize.define("article", {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    text: DataTypes.STRING,
    image_path: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  });

  Article.associate = (models) => {
    Article.belongsToMany(models.Collection, {
      through: 'article_collection',
      foreignKey: 'collectionId',
    });
    Article.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  }

  return Article;
};