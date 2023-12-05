import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Grocery from "./Grocery";
const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className=" flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link>Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login");
            }}
          >
            {isLogin}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
