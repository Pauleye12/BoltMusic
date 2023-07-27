import React, { useState } from "react";

function SongPrev({ disp }) {
//   const [play, setPlay] = useState(false);
const [show, setShow] = useState(true);
  const [lyrics, setLyrics] = useState();
  const [popUp, setPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

    
    // const onToggle = () => {
    //     setPlay((prev) => !prev)
    //     setShow((prev)=> !prev)
    // }
  const baseApi = "https://hilarious-wig-hare.cyclic.app";

  const fetchLyrics = async (val, endpoint) => {
    setIsLoading(true);
    setIsError(false);
    setLyrics();
    const url = `${baseApi}${endpoint}`;
    console.log(url);
    try {
      const res = await fetch(url);
      const resJson = await res.json();
      const LyricsData = resJson.data[val];
      setLyrics(LyricsData);

      console.log(LyricsData);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.log("error fetching data");
    }
  };

  const genLyrics = () => {
    const title = disp.title.trim().replace(/\s+/g, "");
    const artistsArr = disp.subtitle.split("&");
    const mainArtists = artistsArr[0].trim().replace(/\s+/g, "");

    const end = `/lyrics?title={${title}}&artist={${mainArtists}}`;
    setPopUp(true);
    fetchLyrics("lyrics", end);
  };

  const closePopUp = () => setPopUp(false);

  return (
    <div className="w-full flex flex-col gap-[16px] px-[20px] py-[5px] bg-[#212121] rounded-lg border-b-[1px] border-[#ffa034] pb-[20px] pt-[20px] ">
      <div className="flex items-center gap-[25px]">
        <div>
          <img className=" rounded-md max-w-[50px]" src={disp.image} alt="" />
        </div>
        <div className="text-white flex flex-col justify-around items-center">
          <h1 className="font-[500] text-[18px]">{disp.title}</h1>
          <h2>{disp.subtitle}</h2>
        </div>
        {/* <div
          className="bg-[#ffa034] rounded-full grid place-items-center  "
          onClick={onToggle}
        >
          <img
            className="max-w-[50px] "
            src={!play ? "./images/play.png" : "./images/pause.png"}
            alt=""
          />
        </div> */}
      </div>

      <div className="w-full flex gap-[20px] items-center">
        {show && (
          <audio className="w-full h-[20px]" controls src={disp.audio_url}>
            <a href={disp.audio_url}>Download</a>
          </audio>
        )}

        <button
          className="text-[#ffa034] text-[18px] font-[600] px-[8px] py-[5px] "
          onClick={genLyrics}
        >
          View lyrics
        </button>
        {popUp && (
          <div className="fixed top-0 left-0 w-screen h-screen z-50 grid place-items-center bg-[#29292980] ">
            <div className=" relative w-full max-w-[60%]  rounded-md max-h-[60%] h-full  overflow-y-scroll ">
              <img
                className="max-w-[20px] sticky left-[10px] top-[10px]"
                src="./images/cancel.png"
                alt=""
                onClick={closePopUp}
              />
              {isLoading && !isError ? (
                <div className="text-[#ffa034] text-[23px] font-[600]">
                  Fetching data, please wait...
                </div>
              ) : (
                <div className="font-[500] px-[40px] py-[25px] bg-[#ffa034] text-[17px]">
                  {lyrics}
                </div>
              )}

              {!isLoading && isError ? (
                <div className="text-[#ffa034] text-[23px] font-[600]">
                  Error loading Data, please check your internet connection.
                </div>
              ) : (
                <div className="font-[500] px-[40px] py-[25px] bg-[#ffa034] text-[17px]">
                  {lyrics}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SongPrev;
