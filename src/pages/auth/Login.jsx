// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../../components/Header";
// import { validateEmail } from "../../utils/helper";
// import { useDispatch, useSelector } from "react-redux";
// import { RESET_AUTH, loginMarketer } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";
// import Loader from "../../components/loader/Loader";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, isLoggedIn, isSuccess } = useSelector(
//     (state) => state.auth
//   );
//   const loginUser = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       return toast.error("All fields must be filled");
//     }
//     if (!validateEmail(email)) {
//       return toast.error("Kindly input a valid email");
//     }
//     const marketerData = {
//       email,
//       password,
//     };
//     dispatch(loginMarketer(marketerData));
//     setEmail("");
//     setPassword("");
//   };
//   useEffect(() => {
//     if (isSuccess && isLoggedIn) {
//       navigate("/dashboard");
//     }

//     // dispatch(RESET_AUTH());
//   }, [isLoggedIn, isSuccess, navigate]);

//   return (
//     <div>
//       {isLoading && <Loader />}
//       <section className="flex flex-col gap-5 justify-start items-center  py-12  px-5 w-full font-crete">
//         <div className="w-full max-w-md pt-5 pb-10 px-8 bg-white rounded-lg shadow-lg  text-gray-700">
//           <Header />
//           <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
//           <form onSubmit={loginUser}>
//             <div className="mb-4">
//               <label
//                 className="block mb-2 text-sm font-bold "
//                 htmlFor="username"
//               >
//                 Email
//               </label>
//               <input
//                 className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                 id="username"
//                 type="text"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block mb-2 text-sm font-bold"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 placeholder="**********"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center justify-between flex-col w-full">
//               <button className="px-4 py-2 font-bold text-white bg-pink-500 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline w-full mb-3 font-inter">
//                 Login
//               </button>
//               <Link to={"/register"}>
//                 <p className="my-3 font-crete">
//                   Don't have account? Register here
//                 </p>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default LoginForm;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { validateEmail } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { loginMarketer } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLoggedIn, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const loginUser = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields must be filled");
    }
    if (!validateEmail(email)) {
      return toast.error("Kindly input a valid email");
    }
    const marketerData = {
      email,
      password,
    };
    dispatch(loginMarketer(marketerData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, isSuccess, isError, message, navigate]);

  return (
    <div>
      {isLoading && <Loader />}
      <section className="flex flex-col gap-5 justify-start items-center py-12 px-5 w-full font-crete">
        <div className="w-full max-w-md pt-5 pb-10 px-8 bg-white rounded-lg shadow-lg text-gray-700">
          <Header />
          <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
          <form onSubmit={loginUser}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between flex-col w-full">
              <button
                className="px-4 py-2 font-bold text-white bg-pink-500 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline w-full mb-3 font-inter"
                type="submit"
              >
                Login
              </button>
              <Link to={"/register"}>
                <p className="my-3 font-crete">
                  Don't have account? Register here
                </p>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
