import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { validateEmail } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  registerMarketer,
  registerMarketerWithReferral,
} from "../../redux/features/auth/authSlice";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [referralId, setReferralId] = useState("");
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refId = params.get("referralId");
    if (refId) {
      setReferralId(refId);
    }
  }, [location.search]);

  const registerUser = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !password || !confirmPassword) {
      return toast.error("All fields must be filled");
    }
    if (password.length < 6) {
      return toast.error("Password length must be at least 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Kindly input a valid email");
    }
    if (password !== confirmPassword) {
      return toast.error("Passowrds do not match");
    }
    const marketerData = {
      name,
      phone,
      email,
      password,
      confirmPassword,
    };

    if (referralId) {
      dispatch(registerMarketerWithReferral({ marketerData, referralId }));
    } else {
      dispatch(registerMarketer(marketerData));
    }
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword(" ");
  };
  return (
    <section className="flex flex-col gap-5 justify-start items-center  py-12  px-5 w-full font-crete">
      <div className="w-full max-w-md pt-5 pb-10 px-8 bg-white rounded-lg shadow-lg  text-gray-700">
        <Header />
        <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold " htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter full name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold " htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter phone number"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold " htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold "
              htmlFor="confirmPassword"
            >
              Confirm password
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="**********"
              value={confirmPassword}
              name="confrimPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between flex-col w-full">
            <button className="px-4 py-2 font-bold text-white bg-pink-500 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline w-full mb-3 font-inter">
              Register
            </button>
            <Link to={"/login"}>
              <p className="my-3 font-crete">
                Already have an account? Login here
              </p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
export default RegisterForm;
