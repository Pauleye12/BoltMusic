import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import MusicCard from "./MusicCard";
import SongPrev from "../SongPrev";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Dashboard() {

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.email;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  
  const [dispData, setDispData] = useState([ ])
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [term, setTerm] = useState("");

  const updateTerm = (e) => {
    setTerm(e.target.value);
  };

  const submit = () => {
    
    const searchVal= term.trim().replace(/\s+/g, "");
    const url = `/search?term={${searchVal}}`;
    fetchTableData("results", url);

  };
  //API CALLS
  const baseApi = "https://hilarious-wig-hare.cyclic.app";

  const fetchTableData = async (val, endpoint = "/top-tracks") => {
    setIsLoading(true);
    setIsError(false);
    setDispData([ ])
    const URL =
      endpoint === "/top-tracks"
        ? baseApi + "/top-tracks"
        : `${baseApi}${endpoint}`;
    try {
      const res = await fetch(URL);
      const resJson = await res.json();
      const songData = resJson.data[val]
      setDispData(songData)

      // resJson.data.tracks
      //   ? (songData = resJson.data.tracks)
      //   : (songData = resJson.data.results);
      // setTableInfo(resJson);
      console.log(songData);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.log("error fetching data");
    }
  };

  //FOR SEARCHING
  // const searchTableData = async (endpoint = "/top-tracks") => {
  //   setIsLoading(true);
  //   setIsError(false);
  //   const URL =
  //     endpoint === "/top-tracks"
  //       ? baseApi + "/top-tracks"
  //       : `${baseApi}${endpoint}`;
  //   try {
  //     const res = await fetch(URL);
  //     const resJson = await res.json();
  //     const songData = resJson.data.results;
  //     // setTableInfo(resJson);
  //     console.log(songData);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsError(true);
  //     setIsLoading(false);
  //     console.log("error fetching data");
  //   }
  // };

  useEffect(() => {
    fetchTableData("tracks");
  }, []);

  const musicCardDets = [
    {
      backgroundImg: "topSongs",
      val:"tracks",
      term: "/top-track",
      text: "top songs",
    },
    {
      backgroundImg: "Asake",
      val:"results",
      term: "/search?term={asake}",
      text: "Asake",
    },
    {
      backgroundImg: "burnaBoy",
      val:"results",
      term: "/search?term={burnaBoy}",
      text: "Burna boy",
    },
    {
      backgroundImg: "wizkid",
      val:"results",
      term: "/search?term={wizkid}",
      text: "Wizkid",
    },
  ];
  return (
    <div className="bg-[#292929] p md:pl-[250px] max-w-[100vw]min- w-full min-h-screen ">
      <SideBar search={fetchTableData} />

      <div className="px-[15px]  grid place-items-center ">
        <div className=" relative max-w-[1000px] pt-[80px] w-full">
          <h1
            className="absolute text-[#ffa034] text-[28px] font-[600] top-[20px] 
           left-[15px] uppercase "
          >
            Hello,
          </h1>
          <div className=" md:hidden flex gap-[50px] items-center fixed px-[20px] py-[7px] justify-center top-[0px] left-[0px] w-full z-50 bg-[#212121]">
            <div className="flex justify-center items-center ">
              <img
                className="max-w-[50px]"
                src="./images/logoOrange.png"
                alt=""
              />
            </div>
            <div className="flex rounded-md w-full">
              <input
                className=" rounded-md  bg-[#252525] w-full text-[18px] px-[8px] py-[7px]"
                type="search"
                name="searchMusic"
                id="searchMusic"
                onChange={updateTerm}
                value={term}
                placeholder="Search Music"
              />{" "}
              <button
                className="bg-[#ffa034] px-[10px] py-[3px] rounded-r-md grid place-items-center"
                onClick={submit}
              >
                <img
                  className=" max-w-[25px]"
                  src="./images/searchIcon.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[20px] md:gap-[30px] flex-wrap ">
            {musicCardDets.map((Det, index) => (
              <MusicCard key={index} search={fetchTableData} det={Det} />
            ))}
          </div>

          <div className="flex mt-[40px] min-h-[400px] md:max-h-[450px] w-full h-full flex-col gap-[15px] overflow-y-scroll">
            {isLoading && !isError ? (
              <div className="text-[#ffa034] text-[23px] font-[600]">
                Fetching data, please wait...
              </div>
            ) : (
              dispData.map((disp, index) => (
                <SongPrev key={index} disp={disp} />
              ))
            )}

            {!isLoading && isError ? (
              <div className="text-[#ffa034] text-[23px] font-[600]">
                Error loading Data, please check your internet connection.
              </div>
            ) : (
              dispData.map((disp, index) => (
                <SongPrev key={index} search={fetchTableData} disp={disp} />
              ))
            )}
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
