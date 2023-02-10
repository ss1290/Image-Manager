import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/");
  };
  const handleClick2 = () => {
    navigate("/images");
  };
  return (
    <div className='header'>
      <button onClick={handleClick1}>Upload Images</button>
      <button onClick={handleClick2}>View Images</button>
    </div>
  );
};

export default Header;
