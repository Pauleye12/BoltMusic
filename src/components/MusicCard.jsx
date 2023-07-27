import React from 'react'
import { Link } from 'react-router-dom'

function MusicCard({det, search}) {
  return (
    <button
      className={` ${det.backgroundImg} max-w-[150px] h-[150px] md:min-w-[200px] w-full md:h-[200px] px-[13px] py-[10px] ` } onClick={()=>(search(det.val, det.term))}
    >
      <div className="flex items-end h-full w-full uppercase ">
        <h1 className="text-[#ffa034] text-[23px] font-[600] ">{det.text}</h1>
      </div>
    </button>
  );
}

export default MusicCard