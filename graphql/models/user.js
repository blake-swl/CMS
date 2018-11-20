export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The username can only contain letters and numbers'
        },
        len: {
          args: [3, 25],
          msg: "The username needs to be between 3 and 25 characters long"
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email'
        }
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'disabled']
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
    password: DataTypes.STRING,
  })

  // User.associate = models => {
  //   User.belongs
  // }

  // User.associate = (models) => {
  //   User.belongsToMany(models.Team, {
  //     through: 'member',
  //     foreignKey: 'userId',
  //   });
  //   User.belongsToMany(models.Channel, {
  //     through: 'channel_member',
  //     foreignKey: 'userId'
  //   });
  // }

  return User;
};