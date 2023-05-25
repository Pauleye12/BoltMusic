import { useState } from "react";
import { Link } from "react-router-dom";

function AgarPrep() {
  const [Values, setValues] = useState({
    mass: 44.5,
    volume: 1000,
    reqMass: "",
    desiredVolume: 200,
  });

  const updateValues = (val) => {
    return (e) => {
      setValues((prev) => ({ ...prev, [val]: e.target.value }));
    };
  };

  const getMass = (e) => {
    e.preventDefault();
    let multiplier = Values.volume / Values.desiredVolume;
    let requiredMass = Values.mass / multiplier;
    setValues((prev) => ({ ...prev, reqMass: requiredMass }));
  };
  return (
    <div>
      <div className="bg-[#252525] h-[100vh] w-[100vw] text-[black] grid place-items-center">
        <div className="bg-[white] px-[15px] py-[10px] rounded-lg pb-[30px] max-w-[600px] w-full ">
          <h1 className="font-[700] text-2xl text-[#008b15] ">
            Agar Preparation Assistant{" "}
          </h1>
          <div className="mt-[20px]">
            <h2 className="font-[600] mb-[5px] text-lg ">Disclaimer!!</h2>
            <p>
              Agars should be prepared according the manufacturers specification
              and directions. The Values for preparation should be obtained from
              appropriate sources, if no value is provided, it assumes these
              default value (all readings are in <strong>g</strong> and{" "}
              <strong>ml</strong>): Manufacturers Mass: 0, Manufacturers volume:
              1000, Desired Volume: 200
            </p>
          </div>
          <div className="mt-[20px] ">
            <form className="mt-[20px] flex flex-col gap-[7px]" id="TTA_Inputs">
              <div className="inputVal rounded-lg p-[5px] shadow-[0_3px_15px_-2px_rgba(21,199,42,0.68)] pb-[12px]  mass flex flex-col gap-[5px]">
                <label className="font-[500] text-lg " htmlFor="mass">
                  Manufacturers Mass(g)
                </label>
                <input
                  className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
                  onChange={updateValues("mass")}
                  placeholder="Enter Sample Weight"
                  type="number"
                  name="mass"
                  id="mass"
                  value={Values.mass}
                />
              </div>
              <div className="inputVal rounded-lg p-[5px] shadow-[0_3px_15px_-2px_rgba(21,199,42,0.68)] pb-[12px]  initialVol flex flex-col gap-[3px]">
                <label className="font-[500] text-lg " htmlFor="volume">
                  Manufacturers Volume(ml)
                </label>
                <input
                  className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
                  required
                  placeholder="Enter Manufacturers Volume"
                  type="number"
                  name="volume"
                  id="volume"
                  onChange={updateValues("volume")}
                  value={Values.volume}
                />
              </div>
              <div className="inputVal rounded-lg p-[5px] shadow-[0_3px_15px_-2px_rgba(21,199,42,0.68)] pb-[12px]  desiredVolume flex flex-col gap-[3px]">
                <label className="font-[500] text-lg " htmlFor="desiredVolume">
                  Desired Volume(ml)
                </label>
                <input
                  className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
                  required
                  placeholder="Enter desired Volume"
                  type="number"
                  name="desiredVolume"
                  id="desiredVolume"
                  onChange={updateValues("desiredVolume")}
                  value={Values.desiredVolume}
                />
              </div>

              <div className="dispAns text-center font-[500] text-lg mt-[12px]">
                Required Mass = {Values.reqMass}g
              </div>
              <div className="calcBtn font-[500] text-lg flex mt-[8px] justify-center items-center gap-[20px]">
                <button
                  className="px-[7px] py-[6px] rounded-lg  bg-[#090977] text-[white] shadow-[0_5px_5px_-2px_rgba(9,9,119,0.68)] "
                  onClick={getMass}
                  id="getMass"
                >
                  Get Mass
                </button>
              </div>
            </form>
            <Link to={"/welcome"}>
              <button>Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgarPrep;
