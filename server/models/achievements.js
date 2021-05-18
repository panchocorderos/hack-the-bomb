module.exports = (sequelize, type) => {
  return sequelize.define("achievement", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    description: {
      type: type.STRING,
      allowNull: false,
    },
    score: {
      type: type.INTEGER,
      allowNull: false,
    },
    state: {
      type: type.BOOLEAN,
      allowNull: false,
    },
  });
};
