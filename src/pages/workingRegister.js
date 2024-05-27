import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  registerMarketer,
  registerMarketerWithReferral,
} from "../../redux/features/auth/authSlice";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [referralId, setReferralId] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();

  // Capture the referral ID from the URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refId = params.get("ref");
    if (refId) {
      setReferralId(refId);
    }
  }, [location.search]);

  const { name, phone, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const marketerData = { name, phone, email, password, confirmPassword };
    if (referralId) {
      dispatch(registerMarketerWithReferral({ marketerData, referralId }));
    } else {
      dispatch(registerMarketer(marketerData));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder="Phone"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={onChange}
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
