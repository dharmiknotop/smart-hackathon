import axios from "axios";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

import { AiOutlineUser } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

const linkClass =
  "flex items-center gap-2 font-medium px-3 py-2 hover:text-emerald-400 hover:no-underline active:text-teal-300 rounded-sm text-base";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logOut = async () => {
    try {
      await axios.post(
        "/api/user/logout",
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
          to={"/admin/dashboard/users"}
          className={classNames(
            linkClass,
            checkActiveLink("users") ? "text-emerald-400" : "text-white"
          )}
        >
          <span className="text-xl">
            <AiOutlineUser />
          </span>
          Users
        </Link>

        <Link
          to={"/admin/dashboard/contactUs"}
          className={classNames(
            linkClass,
            checkActiveLink("contactUs") ? "text-emerald-400" : "text-white"
          )}
        >
          <span className="text-xl">
            <MdPermContactCalendar />
          </span>
          Contact us
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
