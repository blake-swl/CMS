import Sequelize from 'sequelize';

const sequelize = new Sequelize('cms', 'seulwoolee', '', {
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./user'),
  Article: sequelize.import('./aticle'),
  Collection: sequelize.import('./collection'),
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;