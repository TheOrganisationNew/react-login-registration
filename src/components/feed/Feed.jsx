import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../../dummyData.js";

export default function Feed() {
  return (
    
    <div className="feed">
      <Share/>
      <div className="feedWrapper">
        
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}