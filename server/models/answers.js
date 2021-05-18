module.exports = (sequelize, type) => {
  return sequelize.define("answer", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    answer_text: {
      type: type.STRING,
      allowNull: false,
    },
    is_correct: {
      type: type.BOOLEAN,
      allowNull: false,
    },
  });
};
