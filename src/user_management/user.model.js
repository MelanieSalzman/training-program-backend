import bcrypt from 'bcrypt'
const saltRounds = 10;

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
  })

  User.prototype.validatePassword = async(password) => {
    return await bcrypt.compare(password, this.password)
  }

  User.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(password, bcrypt.genSalt(salt))
    user.password = hashedPassword;
  })

  return User
}
