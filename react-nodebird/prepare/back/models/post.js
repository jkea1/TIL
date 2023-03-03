module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { //Post가 자동으로 Mysql에 소문자 Posts로 저장된다.  
    //id가 기본적으로 들어있다. 
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', 
    collate: 'utf8mb4_general_ci', // 한글 저장 + 이모티콘 가능
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsTo(db.Post, { as: 'Retweet'});
    db.Post.belongsToMany(db.User, {through: 'Like', as: 'Likers' }); //post에 좋아요를 누른 사람들
  };
  return Post;
}; 