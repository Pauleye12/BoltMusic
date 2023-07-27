import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app, analytics } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(false);

  const updateInfo = (val) => {
    return (e) => {
      setInfo((prev) => ({ ...prev, [val]: e.target.value }));
    };
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(false);
    createUserWithEmailAndPassword(auth, info.email, info.password)
      .then((resp) => {
        //signed In
        setError(false);
        navigate("/Dashboard");
      })
      .catch((err) => {
        setError(true);
        alert(err.message);
      });
  };

  return (
    <div className="flex h-[100vh] min-w-[100vw] w-full justify-center items-center bg-[black]">
      <div className=" max-w-[400px] w-full flex flex-col items-center  px-[20px] py-[15px] rounded-xl">
        <div>
          <img
            className="max-w-[150px] "
            src="./images/logoOrange.png"
            alt=""
          />
        </div>
        <h1 className="text-center font-bold w-full text-2xl text-[white] border-b pb-[10px] border-[#e3e3e3] ">
          Sign up
        </h1>
        <form className="mt-[20px] flex flex-col gap-[7px] w-full overflow-y-scroll h-[300px] ">
          <div className="flex flex-col gap-[13px]">
            <input
              className=" rounded-md bg-[#252525] text-[18px]  px-[8px] py-[10px]"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="FirstName"
              value={info.firstName}
              onChange={updateInfo("firstName")}
            />
            </div>
            <div className="flex flex-col gap-[13px] mt-[15px]">
            <input
              className=" rounded-md bg-[#252525] text-[18px]  px-[8px] py-[10px]"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="LastName"
              value={info.lastName}
              onChange={updateInfo("lastName")}
              />
              </div>
          <div className="flex flex-col gap-[13px] mt-[15px]">
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
          <div className="flex flex-col gap-[13px] mt-[15px]">
            <input
              className=" rounded-md  bg-[#252525] text-[18px] px-[8px] py-[10px]"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone number"
              value={info.phoneNumber}
              onChange={updateInfo("phoneNumber")}
            />
          </div>
          {error && <p className="text-[red] font-bold">Sign Up failed</p>}
          <button
            className=" text-[white] font-[700] text-xl px-[13px]  rounded-md w-[100%] py-[5px] mt-[20px] bg-[#ffa034]"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-white mt-[20px] ">
          Have an account ?{" "}
          <Link className="text-[#ffa034] ml-[5px]" to="/">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
