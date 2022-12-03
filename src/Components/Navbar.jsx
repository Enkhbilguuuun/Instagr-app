import { AiFillHome } from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {AiOutlineCompass} from "react-icons/ai";
import {RiMessengerLine} from "react-icons/ri";
import {AiOutlineHeart} from "react-icons/ai"
import {BiAddToQueue} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="buttonLogo">
        <span style={{
          fontFamily:"cursive",
          fontWeight:"bold",
          fontSize:"20px"
        }}>Instagram</span>
      </div>
      <div className="navbarButtonContainer">
        <div className="navbarButton">
          <div className="navbarImg">
            <AiFillHome style={{ width: "50px", height: "35px" }} />
          </div>
          <span className="buttonName">Home</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <BsSearch style={{ width: "50px", height: "50px" }} />
          </div>
          <span className="buttonName">Search</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <AiOutlineCompass style={{ width: "50px", height: "50px" }} />
          </div>{" "}
          <span className="buttonName">Explore</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <RiMessengerLine style={{ width: "50px", height: "50px" }} />
          </div>{" "}
          <span className="buttonName">Messages</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <AiOutlineHeart style={{ width: "50px", height: "50px" }} />
          </div>
          <span className="buttonName">Notifications</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
          <BiAddToQueue style={{ width: "50px", height: "50px" }} />
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
