import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const validateUser = async () => {
    try {
      console.log("wait");
      const { data } = await axios.post(
        "http://localhost:8081/api/user/validateUser",
        {},
        {
          withCredentials: true,
        }
      );

      if (data.data.userType === "user") {
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
    <div>
      <Navbar transparent={true} />
      <div className="flex flex-col flex-1">
        {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  );
}
