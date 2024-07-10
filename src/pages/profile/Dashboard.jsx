import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET_AUTH,
  fetchDownlines,
  getLoginStatus,
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
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, dispatch, navigate, marketer]);

  const fetchMarketerDownlines = () => {
    const marketerId = marketer?.loggedInMarketer?._id;
    if (marketerId) {
      dispatch(fetchDownlines(marketerId));
    }
  };

  const logoutHandler = () => {
    dispatch(logoutMarketer());
    dispatch(RESET_AUTH());
  };

  useEffect(() => {
    fetchMarketerDownlines();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        marketer?.loggedInMarketer?.referralLink || ""
      );
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy referral link:", err);
    }
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
              <strong>Phone:</strong> {phone}
            </p>
            <p className="text-gray-600">
              <strong>Role:</strong> {role}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-gray-600">
              <strong>Verified:</strong>{" "}
              {isVerified ? " Verified " : " Not Verified "}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-xl font-thin mb-4 text-blue-500">
              <strong className="font-semibold flex justify-between items-center py-4">
                <span>Referral Link </span>
                <span
                  onClick={handleCopy}
                  className="cursor-pointer text-blue-500 hover:text-gray-600 flex gap-2 items-center"
                  title={copySuccess ? "Copied!" : "Copy"}
                >
                  <FaCopy />
                  <span className="text-sm">Copy link</span>
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
              {Array.isArray(downlines) && downlines.length > 0 ? (
                downlines.map((downline) => (
                  <li
                    className="p-2 bg-gray-100 rounded-md text-gray-700 flex flex-col gap-2"
                    key={downline._id}
                  >
                    <div className="flex gap-2 items-center justify-between">
                      <h2 className="font-semibold">{downline.name}</h2>
                      <img
                        src={downline.photo}
                        alt={`${downline.name} photo`}
                        width={"40px"}
                        height={"40px"}
                        className="rounded-full"
                      />
                    </div>
                    <p>{downline.email}</p>
                  </li>
                ))
              ) : (
                <li className="p-2 bg-gray-100 rounded-md text-gray-700">
                  <h2>You don't have downlines currently.</h2>
                </li>
              )}
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
