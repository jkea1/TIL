module.exports = (sequalize, DataTypes) => {
  const Post = sequalize.define('Post', { //Post가 자동으로 Mysql에 소문자 Posts로 저장된다.  
    //id가 기본적으로 들어있다. 
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', 
    collate: 'utf8mb4_general_ci', // 한글 저장 + 이모티콘 가능
  });
  Post.associate = (db) => {};
  return Post;
}; 