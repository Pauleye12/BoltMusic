import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app, analytics } from "../../firebaseConfig";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false)

  const updateInfo = (val) => {
    return (e) => {
      setInfo((prev) => ({ ...prev, [val]: e.target.value }));
    };
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(false)
    signInWithEmailAndPassword(auth, info.email, info.password)
      .then((resp) => {
        //signed In
        setError(false)
        navigate("/Dashboard");
      })
      .catch((err) => {
        setError(true)
        alert(err.message);
      });
  };

  return (
    <div className="flex h-[100vh] w-[100vw] justify-center items-center bg-[black]">
      <div className=" max-w-[400px] w-full flex flex-col items-center  px-[20px] py-[15px] rounded-xl">
        <div>
          <img
            className="max-w-[200px] "
            src="./images/logoOrange.png"
            alt=""
          />
        </div>
        <h1 className="text-center font-bold w-full text-2xl text-[white] border-b pb-[10px] border-[#e3e3e3] ">
          Welcome
        </h1>
        <form className="mt-[20px] flex flex-col gap-[7px] w-full ">
          <div className="flex flex-col gap-[13px]">
            <input
              className=" rounded-md bg-[#252525] text-[18px]  px-[8px] py-[10px]"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={info.email}
              onChange={updateInfo("email")}
            />
          </div>
          <div className="flex flex-col gap-[13px] mt-[15px]">
            <input
              className=" rounded-md  bg-[#252525] text-[18px] px-[8px] py-[10px]"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={info.password}
              onChange={updateInfo("password")}
            />
          </div>
          {error && <p className="text-[red] font-bold">Login failed</p>}
          <button
            className=" text-[white] font-[700] text-xl px-[13px]  rounded-md w-[100%] py-[5px] mt-[20px] bg-[#ffa034]"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="text-center text-white mt-[20px] ">
          Do not have an account yet?{" "}
          <Link className="text-[#ffa034] ml-[5px]" to="/SignUp">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
