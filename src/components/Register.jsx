import { Link } from "react-router-dom";
import Header from "./Header";

const RegisterForm = () => (
  <section className="flex flex-col gap-5 justify-start items-center  py-12  px-5 w-full font-crete">
    <div className="w-full max-w-md pt-5 pb-10 px-8 bg-white rounded-lg shadow-lg  text-gray-700">
      <Header />
      <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold " htmlFor="fullName">
            Full Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Enter full name"
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
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold "
            htmlFor="confirmPassword"
          >
            Confrim password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="text"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex items-center justify-between flex-col w-full">
          <button
            className="px-4 py-2 font-bold text-white bg-pink-500 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline w-full mb-3 font-inter"
            type="button"
          >
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
export default RegisterForm;
