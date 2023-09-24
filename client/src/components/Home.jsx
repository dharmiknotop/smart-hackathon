import { Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { MdCastForEducation, MdOutlineCleaningServices } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const contactUs = async () => {
    setLoading({
      loading: true,
      success: "",
      error: "",
    });

    console.log(formData);

    try {
      await axios.post(
        "/api/user/contactUs",
        {
          ...formData,
        },
        {
          withCredentials: true,
        }
      );

      if (formData.userType === "worker") {
        navigate("/worker/dashboard");
      } else {
        navigate("/");
      }

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
    <main>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://www.dwpsnoidaex.com/wp-content/uploads/2019/09/DSC_0519-scaled.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-emerald-900"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex ">
            <div className="w-full lg:w-4/5 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white text-5xl font-bold">
                  Greener India better India.
                </h1>
                <p className="mt-7 text-lg text-gray-300 font-semibold">
                  We are making a step towards making the India a better place
                  than it was earlier and we happily invite you to become a part
                  of this journey. "Let us go green to get our planet clean"
                </p>

                <a href="/#contactUs">
                  <button className="bg-green-400 rounded-lg p-3 mt-10 text-white">
                    Connect with us
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <MdCastForEducation size={20} />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-emerald-400">
                About Eco Experts
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                We are a organization who are spreading awarness regarding the
                cleanliness of the india, making the world a better place than
                it was, and actively conduct activities so that all others can
                also join the intiative
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                It costs us nothing to do some good so that our future becomes
                sustainable so let's all group together and make the world a
                better place than it was.
              </p>
              <a href="/#contactUs" className="font-bold text-gray-800 mt-8">
                Contact Us
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-600">
                <img
                  alt="..."
                  src="https://img.theweek.in/content/dam/week/news/india/images/2018/4/10/swach-bharat-mission-fb.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4 ">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-emerald-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xlfont-bold text-white">Eco experts</h4>
                  <p className="text-md font-light mt-2 text-white">
                    100+ people have already connected with us and participated
                    in the activites.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/25111005/source-zeebiz.jpg"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300">
                  <MdOutlineCleaningServices size={20} />
                </div>
                <h3 className="text-3xl font-semibold text-emerald-400">
                  Activites
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  We actively conduct activites to make the streets cleaner and
                  also provide the essential information to the attendees
                  regarding the importance of cleanliness
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-emerald-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Provide education regarding the cleanliness
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-emerald-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">A needless act</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-emerald-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Conduct regular activites within a month
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-emerald-400 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Interested in participating in the activities? query regarding any
            of the activites or want to know the importance of the cleanliness?
            contact us.
          </p>
          <div className="relative h-11 w-full mt-6">
            <Input
              color="teal"
              label="Enter your name"
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />
          </div>
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
          <div className="relative w-full mt-6">
            <Textarea
              color="teal"
              value={formData.address}
              label="Enter your address"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  address: e.target.value,
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
          <div className="flex justify-center">
            <button
              className="rounded-3xl w-36 h-11 bg-emerald-500 text-white mt-5"
              onClick={() => {
                contactUs();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
