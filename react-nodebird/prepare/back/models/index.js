//배포시 || 개발시
const Sequalize = require('sequalize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

//Sequalize가 node 와 mysql을 연결해준다. 
//sequalize는 기본적으로 mysql2를 사용한다. -> node와 mysql을 연결하는 드라이버 역할을 한다.  
//연결 성공하면 sequalize 객체에 연결 정보가 담겨 있다. 

const sequalize = new Sequalize(config.data, config.username, config.password, config)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
