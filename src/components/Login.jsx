import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app, analytics } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  const auth = getAuth();

  const [info, setInfo] = useState({
    email: '',
    password: ''
  })

  const updateInfo = (val) => {
    return (e) => {
      setInfo((prev) => ({ ...prev, [val]: e.target.value }));
    };
  };

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, info.email, info.password)
      .then((resp) => {
      //signed In
        console.log(resp.user)
      })
      .catch((err) => {
      alert(err.message)
    })
  }
  

  return (
    <div className="flex h-[100vh] w-[100vw] justify-center items-center bg-[#252525]">
      <div className="border-2 border-[#e3e3e3] bg-[#008b15] px-[20px] py-[15px] rounded-xl">
        <h1 className="text-center font-bold text-2xl text-[white] border-b pb-[10px] border-[#e3e3e3] ">
          Please Login to Proceed
        </h1>
        <form className="mt-[20px] flex flex-col gap-[7px] ">
          <div className="flex flex-col gap-[3px]">
            <label className="font-[500] text-[white] " htmlFor="email">
              email
            </label>
            <input
              className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={info.email}
              onChange={updateInfo('email')}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label className="font-[500] text-[white] " htmlFor="password">
              Password
            </label>
            <input
              className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={info.password}
              onChange={updateInfo("password")}
            />
          </div>
          <Link to={"/welcome"}>
            <button className=" text-[white] font-[700] text-xl px-[13px] border-2 rounded-md border-[#36f14cad] w-[100%] py-[5px] mt-[20px] bg-[#054710dc]" onClick={handleLogin}>
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
