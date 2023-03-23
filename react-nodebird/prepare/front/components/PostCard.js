import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { Card, Popover, Button , List, Comment} from 'antd';
import { EllipsisOutlined, RetweetOutlined, HeartOutlined, MessageOutlined} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { HeartTwoTone } from '@ant-design/icons';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';

//index.js에서 post 받아옴
const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const {removePostLoading} = useSelector((state) => state.post);

  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    console.log("remove_post_request onclick event");
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const id = useSelector((state) => state.user.me?.id);

  return (
    <div>
      <Card 
        cover= {post.Images[0] && <PostImages images = {post.Images} />}
        actions = {[
          <RetweetOutlined key = "retweet"/>,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key = "heart" onClick={onToggleLike} />,
          <MessageOutlined key = "comment" onClick={onToggleComment}/>,
          <Popover key = "more" content={(
            //내가 쓴글이면 수정, 삭제 가능하게 하고 남이 쓴글이면 신고가능하게 하기.
            <Button.Group>
              {id && post.User.id === id  
              ? (
                <>
                  <Button>수정</Button>
                  <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                </>
                ) 
                : <Button>신고</Button> } {/* 왜 신고로 뜨지.. */}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover> 
        ]}
        //우측 상단에 extra 공간을 준다. 
        //로그인시 에만 follow버튼이 보인다. 
        extra={id && <FollowButton post={post} />}
        >
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={<PostCardContent postData= {post.content} />}
          />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post = {post}/>
          <List 
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment 
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
      {/* <CommentForm /> */}
      {/* <Comments /> */}
    </div>
  )
}

//initialState 모양대로 proptypes를 정해주면 된다. 
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}
export default PostCard