import React from "react";
import { useNavigate } from "react-router-dom";
const LoginHeader = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/login");
  };
  const handleClick2 = () => {
    navigate("/signup");
  };
  return (
    <div className='header'>
      <button onClick={handleClick1}>Login</button>
      <button onClick={handleClick2}>Signup</button>
    </div>
  );
};

export default LoginHeader;
