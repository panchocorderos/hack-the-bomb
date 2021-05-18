module.exports = (sequelize, type) => {
  return sequelize.define("level", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    level_number: {
      type: type.INTEGER,
      allowNull: false,
    },
    difficulty:{
      type: type.STRING,
      allowNull: false,
    },
    max_score: {
      type: type.INTEGER,
      allowNull: false,
    },
  });
};
