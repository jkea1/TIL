module.exports = (sequelize, DataTypes) => {
  //하나하나가 각각 컬럼이다. 
  //엑셀의 세로줄에 해당한다. 
  //id가 기본적으로 들어있다. 
  const User = sequelize.define('User', { //User가 자동으로 Mysql에 소문자 users로 저장된다.  
    email: {
      type: DataTypes.STRING(30), //db에서도 검사를 해준다. / STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
      allowNull: false, //필수
      unique: true, //고유한 값이어야 한다. 
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, //필수
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false, //필수
    },
  }, {
    charset: 'utf8', 
    collate: 'utf8_general_ci', //2줄이 mysql에서 한글을 쓸 수 있게 한다. 
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'}); //as로 별칭을 붙여주면 좋다. 
    db.User.belongsToMany(db.User, {through: 'Follow', as: "Followers", foreignKey: 'FollowingId'});
    db.User.belongsToMany(db.User, {through: 'Follow', as: "Followings", foreignKey: 'FollowerId'});
  };
  return User;
} 