import "./profile.css"
import NavBar from "../../components/navBar/NavBar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";

const Profile = () => {
    return (
        <>
        <NavBar />
        <div className="profile">
            <LeftBar/>
            <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="./src/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="./src/assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            
            <RightBar />
          </div>
        </div>
        </div>
        </>
    )
}

export default Profile