// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import NotFound from "./components/NotFound";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Loader from "./components/loader/Loader";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Loader />
      <section className="min-h-screen  bg-blue-50 flex flex-col justify-between md:pt-2npm0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
