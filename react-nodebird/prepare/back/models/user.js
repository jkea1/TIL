module.exports = (sequalize, DataTypes) => {
  const User = sequalize.define('User', { //User가 자동으로 Mysql에 소문자 users로 저장된다.  
    //하나하나가 각각 컬럼이다. 
    //id가 기본적으로 들어있다. 
    email: {
      type: DataTypes.STRING(30), //db에서도 검사를 해준다. / STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
      allownull: false, //필수
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
  User.associate = (db) => {};
  return User;
} 