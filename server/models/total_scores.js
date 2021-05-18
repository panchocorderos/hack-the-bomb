module.exports = (sequelize, type) => {
  return sequelize.define("total_score", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    score: {
      type: type.INTEGER,
      allowNull: false,
    },
  });
};
