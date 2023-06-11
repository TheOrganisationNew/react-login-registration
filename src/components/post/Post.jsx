import "./post.css";
import { MdMoreVert } from "react-icons/md";
import { useState } from "react";
import { Users } from "../../../dummyData";
import Comments from "../../../src/components/comments/Comments";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [retweet, setRetweet] = useState(post.retweet);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  const likeHandler = () => {
    setLike((prevLike) => (isLiked ? prevLike - 1 : prevLike + 1));
    setIsLiked(!isLiked);
  };
  const retweetHandler = () => {
    setRetweet((prevRetweet) => (isRetweeted ? prevRetweet - 1 : prevRetweet + 1));
    setIsRetweeted(!isRetweeted);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""/>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              ></Link>
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="./src/assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} likes </span>
            <img className="likeIcon" src="./src/assets/repost.ico" onClick={retweetHandler} alt="" />
            <span className="postLikeCounter">{retweet} reposts</span>
            
          </div>
          <div className="postBottomRight">
            <div className="postCommentText" onClick={() => setCommentOpen(!commentOpen)}>{post.comment} comments</div>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}
