import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="top-0 flex w-full items-center justify-between p-4 shadow-md sm:p-6 sm:px-24">
      <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />
      <button
        onClick={() => navigate("/login")}
        className="flex items-center gap-2 rounded-full border border-gray-500 px-6 py-2 text-gray-800 transition-all hover:bg-gray-100"
      >
        Login
        <img src={assets.arrow_icon} alt="" />
      </button>
    </div>
  );
};
export default NavBar;
