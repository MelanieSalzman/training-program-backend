import bcrypt from 'bcrypt'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      instanceMethods: {
        hashPassword = (password) => {
          return bcrypt.hash(password, bcrypt.genSaltSync(10));
        },
        validatePassword = (password) => {
          return bcrypt.compare(password, this.password);
        }
      }
    })

  return User
}
