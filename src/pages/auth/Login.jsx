import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = (e) => {
    e.preventDefault();
    console.log("You are signed in");
    setEmail("");
    setPassword("");
  };
  return (
    <section className="flex flex-col gap-5 justify-start items-center  py-12  px-5 w-full font-crete">
      <div className="w-full max-w-md pt-5 pb-10 px-8 bg-white rounded-lg shadow-lg  text-gray-700">
        <Header />
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold " htmlFor="username">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold" htmlFor="password">
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
            <button className="px-4 py-2 font-bold text-white bg-pink-500 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline w-full mb-3 font-inter">
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
  );
};
export default LoginForm;
