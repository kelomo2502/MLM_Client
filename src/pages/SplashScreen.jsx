import React, { useState } from "react";
import "./App.css";

function App() {
  const [isRegistered, setIsRegistered] = useState(false); // Change to true to see the login form

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center">
          {isRegistered ? "Login" : "Register"}
        </h1>
        {isRegistered ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

const LoginForm = () => (
  <form>
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div className="mb-6">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="**********"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
      >
        Login
      </button>
    </div>
  </form>
);

const RegisterForm = () => (
  <form>
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
      />
    </div>
    <div className="mb-6">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="**********"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
      >
        Register
      </button>
    </div>
  </form>
);

export default App;
