// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./pages/profile/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import NotFound from "./components/NotFound";
import RegisterForm from "./pages/auth/Register";
import LoginForm from "./pages/auth/Login";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <Router>
      <ToastContainer />
      <section className="min-h-screen  bg-blue-50 flex flex-col justify-between md:pt-2npm0">
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/register/:id" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
