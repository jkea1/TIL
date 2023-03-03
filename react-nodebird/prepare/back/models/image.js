module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', { //User가 자동으로 Mysql에 소문자 users로 저장된다.  
    //id가 기본적으로 들어있다. 
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8', 
    collate: 'utf8_general_ci', //2줄이 mysql에서 한글을 쓸 수 있게 한다. 
  });
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
}; 