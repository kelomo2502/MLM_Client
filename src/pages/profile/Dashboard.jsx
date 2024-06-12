import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET_AUTH,
  logoutMarketer,
} from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Aisling (2).jpg";
import { FaCopy } from "react-icons/fa";

const Dashboard = () => {
  const { isLoggedIn, marketer } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to handle copy feedback
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    console.log({ isLoggedIn, marketer });
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, dispatch, navigate]);

  const logoutHandler = () => {
    dispatch(logoutMarketer());
    dispatch(RESET_AUTH());
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(marketer?.loggedInMarketer?.referralLink || "")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy referral link:", err));
  };

  const {
    name,
    referralLink,
    referredBy,
    phone,
    role,
    balance,
    isVerified,
    email,
    bankDetail,
    photo,
    downlines,
    commission,
  } = marketer?.loggedInMarketer || {};

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full m-4">
        <header className="text-center mb-8 gap-2 flex flex-col items-center">
          <img src={logo} alt="logo" />

          <button
            onClick={logoutHandler}
            className="px-3 py-2 bg-gray-200 hover:bg-pink-300 text-black text-2xl rounded-sm grid place-content-center"
          >
            Logout
          </button>
        </header>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <img
              src={photo}
              alt="User Photo"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600">
              <strong>Phone:</strong>
              {phone}
            </p>
            <p className="text-gray-600">
              <strong>Role:</strong> {role}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-gray-600">
              <strong>Verified:</strong>
              {isVerified ? " Verified " : " Not Verified "}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-xl font-thin mb-4 text-blue-500">
              <strong className="font-semibold flex justify-between items-center py-4">
                <span>Referral Link </span>
                <span
                  onClick={handleCopy} // Add click event to the icon
                  className="cursor-pointer text-blue-500  hover:text-gray-600 flex gap-2 items-center"
                  title={copySuccess ? "Copied!" : "Copy to clipboard"}
                >
                  <FaCopy />
                  <p className="text-sm">Copy link</p>
                </span>
              </strong>
              <span className="text-gray-600">{referralLink}</span>
              {copySuccess && (
                <span className="text-green-500 text-sm block mt-2">
                  Copied to clipboard!
                </span>
              )}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Bank Details
            </h2>
            <p className="text-gray-600">
              <strong>Account Name:</strong> {bankDetail?.bankName}
            </p>
            <p className="text-gray-600">
              <strong>Account Number:</strong> {bankDetail?.accountNumber}
            </p>
            <p className="text-gray-600">
              <strong>Bank Name:</strong> {bankDetail?.accountName}
            </p>
            <button className="px-3 py-3 bg-gray-200 hover:bg-pink-300 my-4 text-black text-2xl rounded-sm grid place-content-center">
              Edit bank details
            </button>
          </div>
          <article className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Downlines
            </h2>
            <ul className="list-none space-y-2">
              {downlines?.map((downline) => {
                return (
                  <li
                    className="p-2 bg-gray-100 rounded-md text-gray-700"
                    key={downline}
                  >
                    <h2>{downline}</h2>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Commission
            </h2>
            <p className="text-gray-600">
              <strong>Total Earned: </strong>${commission?.actualCommission}
            </p>
            <p className="text-gray-600">
              <strong>Amount Paid:</strong>${commission?.AmountPaid}
            </p>
            <p className="text-gray-600">
              <strong>Product Sold:</strong> {commission?.productName}
            </p>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
