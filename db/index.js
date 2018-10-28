import Sequelize from 'sequelize';

export const connection = new Sequelize('fe_solutions', 'seulwoolee', '', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

connection.authenticate()
  .then( () => console.log('connected to fe_solutions db'))
  .catch(err => console.error(err))
