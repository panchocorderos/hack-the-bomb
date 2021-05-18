// const Answer = require('./answers');
// const Achievement = require('./achievements');
// const Codex = require('./codexs');
// const GamePlayer = require('./games_players');
// const Level = require('./levels');
// const Question = require('./questions');
// const Topic = require('./topics');
// const TotalScore = require('./total_scores');


// module.exports = (sequelize, type) => {
// Instanciando Modelos.
//   let QuestionModel = Question(sequelize, type);
//   let AnswerModel = Answer(sequelize, type);
//   let AchievementModel = Achievement(sequelize, type);
//   let CodexModel = Codex(sequelize, type);
//   let GamePlayerModel = GamePlayer(sequelize, type);
//   let LevelModel = Level(sequelize, type);
//   let TopicModel = Topic(sequelize, type);
//   let TotalScoreModel = TotalScore(sequelize, type);
  
// Creando relaciones
//   QuestionModel.hasMany(AnswerModel);
//   AnswerModel.belongsTo(QuestionModel);

//   LevelModel.hasMany(QuestionModel);
//   QuestionModel.belongsTo(LevelModel);

//   LevelModel.hasMany(GamePlayerModel);
//   GamePlayerModel.belongsTo(LevelModel);

//   AchievementModel.hasMany(GamePlayerModel);
//   GamePlayerModel.belongsTo(AchievementModel);
  
//   TopicModel.hasMany(LevelModel);
//   LevelModel.belongsTo(TopicModel);

//   CodexModel.hasMany(LevelModel);
//   LevelModel.belongsTo(CodexModel);

//   return {
//     QuestionModel,
//     AnswerModel,
//     AchievementModel,
//     CodexModel,
//     GamePlayerModel,
//     LevelModel,
//     TopicModel,
//     TotalScoreModel,    
//   }
// };