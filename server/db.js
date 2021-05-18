require('dotenv').config();
const { Sequelize } = require('sequelize');

const AnswerModel = require('./models/answers');
const AchievementModel = require('./models/achievements');
const CodexModel = require('./models/codexs');
const GamePlayerModel = require('./models/games_players');
const LevelModel = require('./models/levels');
const QuestionModel = require('./models/questions');
const TopicModel = require('./models/topics');
const TotalScoreModel = require('./models/total_scores');

// Importando variables de entorno
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

// Conexión a la DB
const sequelize = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: DB_DIALECT,
  }
);

const Question = QuestionModel(sequelize, Sequelize);
const Answer = AnswerModel(sequelize, Sequelize);
const Achievement = AchievementModel(sequelize, Sequelize);
const Codex = CodexModel(sequelize, Sequelize);
const GamePlayer = GamePlayerModel(sequelize, Sequelize);
const Level = LevelModel(sequelize, Sequelize);
const Topic = TopicModel(sequelize, Sequelize);
const TotalScore = TotalScoreModel(sequelize, Sequelize);

// Creando relaciones
Question.hasMany(Answer);
Answer.belongsTo(Question);
Level.hasMany(Question);
Question.belongsTo(Level);
Level.hasMany(GamePlayer);
GamePlayer.belongsTo(Level);
Achievement.hasMany(GamePlayer);
GamePlayer.belongsTo(Achievement);
Topic.hasMany(Level);
Level.belongsTo(Topic);
Codex.hasMany(Level);
Level.belongsTo(Codex);

// Sincronizando la Base de datos
sequelize.sync({ force: false })
.then(() => {
  console.log('DB Sync!');
});

module.exports = {
  Question,
  Answer,
  Achievement,
  Codex,
  GamePlayer,
  Level,
  Topic,
  TotalScore,
}