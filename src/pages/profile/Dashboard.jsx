import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET_AUTH,
  logoutMarketer,
} from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import person from "../../assets/person.jpg";

const Dashboard = () => {
  const { isLoggedIn, marketer } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(marketer.loggedInMarketer);
  }, []);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, dispatch]);

  const logoutHandler = () => {
    dispatch(logoutMarketer());
    dispatch(RESET_AUTH());
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full m-4">
        <header className="text-center mb-8 flex flex-col items-center">
          <h3 className="text-2xl font-semiboldbold text-blue-500">
            Welcome Marketer
          </h3>
          <button
            onClick={logoutHandler}
            className="px-3 py-2 bg-pink-400 my-4 text-black text-2xl rounded-sm grid place-content-center"
          >
            Logout
          </button>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <img
              src={person}
              alt="User Photo"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
            <p className="text-gray-600">
              <strong>Username:</strong> johndoe
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1234567890
            </p>
            <p className="text-gray-600">
              <strong>Role:</strong> Administrator
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> johndoe@example.com
            </p>
            <p className="text-gray-600">
              <strong>Verified:</strong> Yes
            </p>
          </section>
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Bank Details
            </h2>
            <p className="text-gray-600">
              <strong>Account Name:</strong> Example Name
            </p>
            <p className="text-gray-600">
              <strong>Account Number:</strong> 0000000000
            </p>
            <p className="text-gray-600">
              <strong>Bank Name:</strong> Example Bank
            </p>
            <button
              onClick={""}
              className="px-3 py-3 bg-pink-400 my-4 text-black text-2xl rounded-sm grid place-content-center"
            >
              Edit bank details
            </button>
          </section>
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Downlines
            </h2>
            <ul className="list-none space-y-2">
              <li className="p-2 bg-gray-100 rounded-md text-gray-700">
                User 1
              </li>
              <li className="p-2 bg-gray-100 rounded-md text-gray-700">
                User 2
              </li>
              <li className="p-2 bg-gray-100 rounded-md text-gray-700">
                User 3
              </li>
            </ul>
          </section>
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Commission
            </h2>
            <p className="text-gray-600">
              <strong>Total Earned:</strong> $5000
            </p>
            <p className="text-gray-600">
              <strong>Pending:</strong> $1000
            </p>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
