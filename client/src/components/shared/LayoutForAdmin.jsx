import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SideBar from "../layout/SideBar";

export default function LayoutForAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const validateUser = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8081/api/user/validateUser",
        {},
        {
          withCredentials: true,
        }
      );

      console.log(data);

      if (data.data.userType === "admin") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <SideBar />
      <div className="flex flex-col flex-1">
        {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  );
}
