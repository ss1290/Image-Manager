import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import Image from "./components/Image/Image";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Signup from "./components/Login/signup";
import LoginHeader from "./components/Header/LoginHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./store/slice";
import ProtectedRoute from "./components/Routes/ProtectedRoutes";
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.Image);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Header />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/images'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Header />
              <Images />
            </ProtectedRoute>
          }
        />
        <Route
          path='/image/:id'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Header />
              <Image />
            </ProtectedRoute>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <LoginHeader />
              <Login />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <LoginHeader />
              <Signup />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
