import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const ContactUsMessage = () => {
  const [loading, setLoading] = useState({
    loading: false,
    success: "",
    error: "",
  });
  const [data, setData] = useState([]);

  const getContactUsDetails = async () => {
    try {
      setLoading({
        loading: true,
        success: "",
        error: "",
      });

      const { data } = await axios.post(
        "http://localhost:8081/api/admin/getAllContactUs",
        {}
      );

      setData(data.data);

      setLoading({
        loading: false,
        success: "Successfully retrieved store details",
        error: "",
      });
    } catch (error) {
      setLoading({
        loading: false,
        success: "",
        error: error.response.data.error,
      });
    }
  };

  useEffect(() => {
    getContactUsDetails();
  }, []);

  return (
    <div className="p-5 h-screen ">
      <h1 className="text-3xl text-emerald-800 mb-10 tracking-wider">
        User list
      </h1>

      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-emerald-800 border-b-2 border-teal-500">
            <tr>
              <th className="w-20 p-3 text-sm text-white font-semibold tracking-wide text-left">
                No.
              </th>
              <th className="w-36 p-3 text-sm text-white font-semibold tracking-wide text-left">
                User name
              </th>
              <th className="w-36 p-3 text-sm text-white font-semibold tracking-wide text-left">
                User address
              </th>

              <th className="w-96 p-3 text-sm text-white font-semibold tracking-wide text-left">
                Garbage Collected
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 divide-opacity-30">
            {!loading.loading && loading.success !== "" && (
              <Fragment>
                {console.log(data)}
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-3 text-sm ">{index + 1}</td>
                      <td className="p-3 text-sm ">{item?.name}</td>
                      <td className="p-3 text-sm ">{item?.email}</td>
                      <td className="w-10 p-3 text-sm break-all">
                        {item?.message}
                      </td>
                    </tr>
                  );
                })}
              </Fragment>
            )}
          </tbody>
        </table>
      </div>

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
      {!loading.loading && loading.error !== "" && (
        <div className="text-red-400 flex justify-center mt-5">
          {loading.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        <div className="bg-white space-y-3 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-sm">
            <div>
              <a href="#" className="text-blue-500 font-bold hover:underline">
                #1000
              </a>
            </div>
            <div className="text-gray-500">10/10/2021</div>
            <div>
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                Delivered
              </span>
            </div>
          </div>
          <div className="text-sm text-white">
            Kring New Fit office chair, mesh + PU, black
          </div>
          <div className="text-sm font-medium text-black">$200.00</div>
        </div>
        <div className="bg-white space-y-3 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-sm">
            <div>
              <a href="#" className="text-blue-500 font-bold hover:underline">
                #1001
              </a>
            </div>
            <div className="text-gray-500">10/10/2021</div>
            <div>
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                Shipped
              </span>
            </div>
          </div>
          <div className="text-sm text-white">
            Kring New Fit office chair, mesh + PU, black
          </div>
          <div className="text-sm font-medium text-black">$200.00</div>
        </div>
        <div className="bg-white space-y-3 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-sm">
            <div>
              <a href="#" className="text-blue-500 font-bold hover:underline">
                #1002
              </a>
            </div>
            <div className="text-gray-500">10/10/2021</div>
            <div>
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                Canceled
              </span>
            </div>
          </div>
          <div className="text-sm text-white">
            Kring New Fit office chair, mesh + PU, black
          </div>
          <div className="text-sm font-medium text-black">$200.00</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMessage;
