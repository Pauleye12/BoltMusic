import React, { useState } from "react";


function SideBar({ search }) {
  
  const [term, setTerm] = useState("")

  const updateTerm = (e) => {
      setTerm(e.target.value);
  };
  
  const submit = () => {
    
    const searchVal= term.trim().replace(/\s+/g, "");
    const url = `/search?term={${searchVal}}`;
    search("results", url);
    
  }
  return (
    <div
      className="hidden md:block fixed top-[0px] left-[0px] md:max-w-[250px] w-full pt-[30px]  h-screen z-[10] bg-[#212121] text-white "

      // variants={sideBarvariants}
      // initial="hidden"
      // animate="visible"
    >
      <div className="  p-[16px] h-full">
        <div className="flex justify-center items-center gap-[10px]">
          <img className="max-w-[70px]" src="./images/logoOrange.png" alt="" />
          <h1 className="text-[27px] font-[600] text-[#ffa034] ">Bolt Music</h1>
        </div>
        <div className="mt-[30px] md:pl-[20px] flex  flex-col gap-[20px]">
          <ul className="flex flex-col gap-[25px] h-full">
            <a
              // onClick={props.controlSideBar}
              href=""
              className="border-l-[2px] border-[#ffa034] pl-[7px] py-[7px]"
            >
              <li>Home</li>
            </a>
            <a
              // onClick={props.controlSideBar}
              href="/"
              className="border-l-[2px] border-[#ffa034] pl-[7px] py-[7px]"
            >
              <li>Downloads</li>
            </a>
            <a
              // onClick={props.controlSideBar}
              href="/"
              className="border-l-[2px] border-[#ffa034] pl-[7px] py-[7px]"
            >
              <li>Favorites</li>
            </a>
            <a
              // onClick={props.controlSideBar}
              href="/"
              className="border-l-[2px] border-[#ffa034] pl-[7px] py-[7px]"
            >
              <li>Playlists</li>
            </a>
          </ul>

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
      </div>
    </div>
  );
}

export default SideBar;
