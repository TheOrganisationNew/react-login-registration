import "./comments.css";
import {user_comments} from "../../../dummyData.js";
import {Users} from "../../../dummyData.js";

const Comments = () => {
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  const userId = 1;
  return (
    <div className="comments">
      {Users.map((user) => {
        if (user.id === userId) {
          return (
      <div className="write" key={user.id}>
        <img src={user.profilePicture} alt="" className="img_comment" />
        <input type="text" placeholder="write a comment" className="comment_input"/>
        <button className="sendbutton">Send</button> 
      </div>
      
      );
          }
          return null;
        })}
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" className="img_comment"/>
          <div className="info">
            <span className="comment_name">{comment.name}</span>
            <p className="comment_desc">{comment.desc}</p>
          </div>
          <hr />
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
    
  );
};

export default Comments;
