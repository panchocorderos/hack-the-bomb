module.exports = (sequelize, type) => {
  return sequelize.define("game_player", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: type.STRING,
      allowNull: false,
    } 
  });
};
