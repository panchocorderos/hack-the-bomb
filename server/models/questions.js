module.exports = (sequelize, type) => {
  return sequelize.define('question', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_text: {
      type: type.STRING,
    }
  });
};