import "./leftBar.css"
import { MdOutlineHome,  MdOutlineBookmarkBorder, MdFormatListBulleted, MdPersonOutline, MdNotificationsNone, MdMailOutline} from "react-icons/md"
import { HiOutlineHashtag } from "react-icons/hi";
const LeftBar = () => {
    return (
    
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="item">
                        <MdOutlineHome/>
                        <span className="sp">Home</span>
                    </div>
                    <div className="item">
                        <HiOutlineHashtag/>
                        <span className="sp">Explore</span>
                    </div>
                    <div className="item">
                        <MdNotificationsNone/>
                        <span className="sp">Notifications</span>
                    </div>
                    <div className="item">
                        <MdMailOutline/>
                        <span className="sp">Messages</span>
                    </div>
                    <div className="item">
                        <MdOutlineBookmarkBorder/>
                        <span className="sp">Bookmarks</span>
                    </div> 
                    <div className="item">
                        <MdFormatListBulleted/>
                        <span className="sp">Lists</span>
                    </div>
                    <div className="item">
                        <MdPersonOutline/>
                        <span className="sp">Profile</span>
                    </div>
                    <hr/>
                    <div className="item">
                        <button className="sit_button">Tweet</button>
                    </div>

                </div>
            </div>
        </div>
    
        
    )
}

export default LeftBar