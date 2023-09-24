import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [isGarbageFull, setIsGarbageFull] = useState(false);

  const [loading, setLoading] = useState({
    loading: false,
    success: "",
    error: "",
  });

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

  const getUserInfo = async () => {
    try {
      setLoading({
        loading: true,
        success: "",
        error: "",
      });
      const { data } = await axios.post(
        "http://localhost:8081/api/user/validateUser",
        {},
        {
          withCredentials: true,
        }
      );
      setData(data?.data);
      setIsGarbageFull(data?.data?.isGarbageFull);
      setLoading({
        loading: false,
        success: "success",
        error: "",
      });
    } catch (error) {
      console.log(error);
      setLoading({
        loading: false,
        success: "",
        error: "",
      });
    }
  };

  const updateGarbageStatus = async () => {
    const id = toast.loading("Please wait updating the status...", {
      position: "bottom-center",
    });
    try {
      await axios.post(
        "http://localhost:8081/api/user/updateStatus",
        {
          id: data?._id,
          item: data,
        },
        {
          withCredentials: true,
        }
      );

      toast.update(id, {
        position: "bottom-center",
        render: "Status succefully updated",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <header className="bg-white fixed top-0 w-full shadow-md z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-emerald-500">
            Eco Experts
          </a>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Activites
            </a>
            {loading.loading && (
              <div className="flex justify-center mt-2">
                <div
                  className="inline-block text-teal-300 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            )}

            {!loading.loading && loading.success !== "" && (
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value="de"
                  className="sr-only peer"
                  checked={isGarbageFull ? true : false}
                  onChange={() => {
                    console.log(data);
                    setIsGarbageFull(!isGarbageFull);

                    updateGarbageStatus();
                  }}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Garbage full
                </span>
              </label>
            )}
            <div
              className="text-red-800 cursor-pointer"
              onClick={() => {
                logOut();
              }}
            >
              Log out
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none">sdf</button>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
}
