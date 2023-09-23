import axios from "axios";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const signIn = async () => {
    setLoading({
      loading: true,
      success: "",
      error: "",
    });

    try {
      await axios.post(
        "http://localhost:8081/api/user/login",
        {
          ...formData,
        },
        {
          withCredentials: true,
        }
      );

      navigate("/store");

      setLoading({
        loading: false,
        success: "Successfully logged in",
        error: "",
      });
    } catch (error) {
      console.log(error);
      setLoading({
        loading: false,
        success: "",
        error: error?.response?.data?.error,
      });
    }
  };

  return (
    <div className="flex h-[100vh] justify-between">
      <div className="w-[40vw] bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 flex justify-center items-center text-white flex-col">
        <h1 className="text-white text-3xl font-bold mb-3">
          Doen&apos;t have an account
        </h1>
        <h2 className="mx-5 mt-1 mb-4 text-center text-lg ">
          Become an contributor and start with a sustainable and clean
          environmental scope with us Register now
        </h2>
        <Link to="/register" relative="path">
          <button className="rounded-3xl w-36 h-11 border-2 text-white mt-5">
            Sign up
          </button>
        </Link>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[50%] flex flex-col items-center ">
          <h2 className="text-emerald-500 text-4xl text font-bold mb-5">
            Log in
          </h2>

          <div className="relative h-11 w-full mt-6">
            <Input
              color="teal"
              label="Enter your email"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="relative h-11 w-full mt-6">
            <Input
              color="teal"
              label="Enter your password"
              value={formData.password}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
          </div>

          {!loading.loading && loading.error !== "" && (
            <div className="text-red-400 flex justify-center my-3">
              {loading.error}
            </div>
          )}

          {loading.loading && (
            <div className="flex justify-center mt-5">
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

          <Link to="/register" className="mt-5">
            Doesn&apos;t have an account?
          </Link>

          <button
            className="rounded-3xl w-36 h-11 bg-emerald-500 text-white mt-5"
            onClick={() => {
              signIn();
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
