module.exports = (sequelize, type) => {
  return sequelize.define("codex", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: type.STRING,
      allowNull: false,
    }
  });
};
