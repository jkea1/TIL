//배포시 || 개발시
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

//Sequalize가 node 와 mysql을 연결해준다. 
//sequalize는 기본적으로 mysql2를 사용한다. -> node와 mysql을 연결하는 드라이버 역할을 한다.  
//연결 성공하면 sequalize 객체에 연결 정보가 담겨 있다. 

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
