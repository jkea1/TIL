module.exports = (sequalize, DataTypes) => {
  const Hashtag = sequalize.define('Hashtag', { //Hashtag가 자동으로 Mysql에 소문자 Hashtags로 저장된다.  
    //id가 기본적으로 들어있다. 
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  }, {
    charset: 'utf8', 
    collate: 'utf8_general_ci', //2줄이 mysql에서 한글을 쓸 수 있게 한다. 
  });
  Hashtag.associate = (db) => {};
  return Hashtag;
} 