import { AiFillHome } from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {AiOutlineCompass} from "react-icons/ai";
import {RiMessengerLine} from "react-icons/ri";
import {AiOutlineHeart} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="buttonLogo">
        <img
          src=""
          style={{
            width: "103px",
            height: "39px",
            marginLeft: "20px",
            marginTop: "15px",
          }}
          alt=""
        />
      </div>
      <div className="navbarButtonContainer">
        <div className="navbarButton">
          <div className="navbarImg">
            <AiFillHome style={{ width: "32px", height: "32px" }} />
          </div>
          <span className="buttonName">Home</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <BsSearch style={{ width: "32px", height: "32px" }} />
          </div>
          <span className="buttonName">Search</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <AiOutlineCompass style={{ width: "32px", height: "32px" }} />
          </div>{" "}
          <span className="buttonName">Explore</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <AiOutlineHeart style={{ width: "32px", height: "32px" }} />
          </div>{" "}
          <span className="buttonName">Messages</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img src="" style={{ width: "22px", height: "22px" }} alt="" />
          </div>
          <span className="buttonName">Notifications</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img src="" style={{ width: "22px", height: "22px" }} alt="" />
          </div>
          <span className="buttonName">Create</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img src="" style={{ width: "22px", height: "22px" }} alt="" />
          </div>
          <span className="buttonName">Profile</span>
        </div>
      </div>
      <div className="more"></div>
    </div>
  );
};
export default Navbar;
