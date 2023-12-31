import axios from "axios";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

import { AiOutlineUser } from "react-icons/ai";

const linkClass =
  "flex items-center gap-2 font-medium px-3 py-2 hover:text-emerald-400 hover:no-underline active:text-teal-300 rounded-sm text-base";

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logOut = async () => {
    try {
      await axios.post(
        "http://localhost:8081/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      );

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const checkActiveLink = function (path, compare) {
    const URL = pathname.split("/");

    if (URL.includes(path)) return true;
    if (pathname === path) return true;

    return false;
  };
  return (
    <div className="bg-emerald-800 w-60 flex flex-col">
      <div className="flex items-center gap-2 px-6 py-6">
        <span className="text-white text-xl font-extrabold">Eco Experts</span>
      </div>
      <div className="py-8 px-3 flex flex-1 flex-col gap-0.5">
        <Link
          to={"/worker/dashboard"}
          className={classNames(
            linkClass,
            checkActiveLink("worker") ? "text-white" : "text-white"
          )}
        >
          <span className="text-xl">
            <AiOutlineUser />
          </span>
          Users
        </Link>
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        <div
          className={classNames(
            linkClass,
            "cursor-pointer text-red-500  hover:text-red-500"
          )}
          onClick={() => {
            logOut();
          }}
        >
          <span className="text-xl">
            <BiLogOut />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}
