import { Link, NavLink } from "react-router-dom";
import { PiExamFill } from "react-icons/pi";
import { BsPatchQuestionFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full p-6 flex justify-between items-center rounded-md bg-white border">
      <Link
        to="/"
        className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-emerald-500"
      >
        QuizApp
      </Link>
      <div className="flex lg:gap-x-3 gap-x-1">
        <NavLink
          to="/questions"
          className={({ isActive }) =>
            `font-semibold px-4 py-1 text-lg border lg:rounded-xl rounded-md transition-all duration-500 flex items-center gap-x-1 
            ${
              isActive
                ? "text-white bg-darkBlack"
                : "text-darkBlack hover:text-darkBlack/75 border-transparent"
            }`
          }
        >
          <BsPatchQuestionFill />
          <span className="lg:flex hidden">Sorular</span>
        </NavLink>
        <NavLink
          to="/results"
          className={({ isActive }) =>
            `font-semibold px-4 py-1 text-lg border lg:rounded-xl rounded-md transition-all duration-500 flex items-center gap-x-1 
            ${
              isActive
                ? "text-white bg-darkBlack"
                : "text-darkBlack hover:text-darkBlack/75 border-transparent"
            }`
          }
        >
          <PiExamFill />
          <span className="lg:flex hidden"> Sonuçlar</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
