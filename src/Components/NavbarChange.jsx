


// import { useContext } from "react";
// import { NavbarChange } from "./NavbarChange";
// import axios from "axios";
// import Users from "./UsersData";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { VscHome } from "react-icons/vsc";
// import { BsSearch } from "react-icons/bs";
// import { AiOutlineCompass } from "react-icons/ai";
// import { MdOndemandVideo } from "react-icons/md";
// import { RiMessengerLine } from "react-icons/ri";
// import { AiOutlineHeart } from "react-icons/ai";
// import { BiAddToQueue } from "react-icons/bi";
// import { TbUserCircle } from "react-icons/tb";

// export const instance = axios.create({
//   baseURL: `https://dummyjson.com/users`,
//   timeout: 2000,
//   headers: {
//     "Content-type": "application.json; charset=UTF-8",
//     "app-id": "63104c3120f6e665ecf628ba",
//   },
// });

// const NavbarChange = () => {
//   const styles = {
//     buttons: {
//       width: "25px",
//       height: "25px",
//     },
//     searchButton: {
//       width: "22px",
//       height: "22px",
//     },
//   };
//   const { navbar, setNavbar } = useContext(NavbarChange);
//   const click = () => {
//     if (navbar === false) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };
//   return (
//     <div className="navbarsContainer">
//       <div className="navbarClick" id="navbar">
//         <div className="navbarButtonClick buttonLogoClick">
//           <div className="navbarImgClick">
//             <AiOutlineInstagram style={styles.buttons} />
//           </div>
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <VscHome style={styles.buttons} />
//           </div>
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <BsSearch style={styles.searchButton} onClick={click} />
//           </div>
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <AiOutlineCompass style={styles.buttons} />
//           </div>{" "}
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <MdOndemandVideo style={styles.buttons} />
//           </div>{" "}
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <RiMessengerLine style={styles.buttons} />
//           </div>{" "}
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <AiOutlineHeart style={styles.buttons} />
//           </div>
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <BiAddToQueue style={styles.buttons} />
//           </div>
//         </div>
//         <div className="navbarButtonClick">
//           <div className="navbarImgClick">
//             <TbUserCircle style={styles.buttons} />
//           </div>
//         </div>
//         <div className="more"></div>
//       </div>
//       <div className="navbarSearch">
//         <div className="sectionOne">
//           <div className="navbarSearchTitle">Search</div>
//           <input type="text" className="navbarInput" placeholder="Search" />
//         </div>
//         <div className="sectionTwo">
//           <div className="recent">
//             <Users />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default NavbarChange;