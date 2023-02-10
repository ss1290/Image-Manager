import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slice";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.Image);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  const handlelogin = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.set("email", email);
    form.set("password", password);
    dispatch(login(form));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='uploadImage'>
          <form
            onSubmit={handlelogin}
            className='imageForm'>
            <div>
              <label htmlFor='Email'>Email:</label>
              <input
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                name='title'
              />
            </div>
            <div>
              <label htmlFor='Password'>Password:</label>
              <input
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                type='text'
                name='description'
              />
            </div>
            <button>Sign in</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
