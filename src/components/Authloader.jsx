import { useDispatch } from "react-redux";
import { getLoginStatus, restoreAuth } from "../redux/features/auth/authSlice";
import { useEffect } from "react";

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedAuthState = localStorage.getItem("authState");
    if (savedAuthState) {
      dispatch(restoreAuth(JSON.parse(savedAuthState)));
    }

    // Optionally, verify the login status
    dispatch(getLoginStatus());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLoader;
