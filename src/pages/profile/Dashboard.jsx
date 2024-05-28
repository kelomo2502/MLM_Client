import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  RESET_AUTH,
  logoutMarketer,
} from "../../redux/features/auth/authSlice";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutMarketer());
    dispatch(RESET_AUTH());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/"); // Redirect to login page if not authenticated
    }
  }, [isLoggedIn, navigate]);

  return (
    isLoggedIn && (
      <section>
        <button
          className="bg-slate-600 px-4 py-2 text-white text-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </section>
    )
  );
};

export default Dashboard;
