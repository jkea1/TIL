module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { //Comment가 자동으로 Mysql에 소문자 Comments로 저장된다.  
    //id가 기본적으로 들어있다. 
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', 
    collate: 'utf8mb4_general_ci', //2줄이 mysql에서 한글을 쓸 수 있게 한다. 
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.User);
  };
  return Comment;
} 