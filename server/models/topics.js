module.exports = (sequelize, type) => {
  return sequelize.define("topic", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
      allowNull: false
    }
  });
};
