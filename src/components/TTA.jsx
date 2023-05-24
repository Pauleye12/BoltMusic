import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app, db, analytics } from "../../firebaseConfig";

function TTA() {
  const [data, setData] = useState({
    sampleWeight: "",
    initialVol: "",
    finalVol: "",
    TTA_value: "",
    date: Date.now()
  });
  const [saveData, setSaveData] = useState(false);

  const collectionRef = collection(db, "Readings");

  // useEffect(() => {
  //   console.log(data)
  //   addDoc(collectionRef, data)
  //     .then(() => alert("data Added"))
  //     .catch((err) => alert(err.message));
  // }, [saveData]);

  const updateData = (val) => {
    return (e) => {
      setData((prev) => ({ ...prev, [val]: e.target.value }));
    };
  };

  const CalcTTA = (constant) => {
    return async (e) => {
      e.preventDefault();
      const volDifference = data.finalVol - data.initialVol;
      console.log(volDifference);
      const ans = 0.1 * constant * (volDifference / data.sampleWeight) * 100;

      setData((prev) => ({ ...prev, TTA_value: ans }));

      addDoc(collectionRef, { ...data, TTA_value: ans })
        .then(() => alert("data Added"))
        .catch((err) => alert(err.message));
      // setSaveData((prev) => !prev);
    };
  };

  // const addReadings = (e) => {
  //   e.preventDefault()

  // }

  return (
    <div className="bg-[#252525] h-[100vh] w-[100vw] text-[black] grid place-items-center">
      <div className="bg-[white] px-[15px] py-[10px] rounded-lg pb-[30px] max-w-[600px] w-full ">
        <h1 className="font-[700] text-2xl text-[#008b15] ">
          Total Titratable Analysis Calculator{" "}
        </h1>
        <div className="mt-[20px]">
          <h2 className="font-[600] mb-[5px] text-lg ">What is Total Titratable Acid (TTA)</h2>
          <p>
            TTA is a measure of the amount of acid or acids present in a food
            sample. It should not be confused with pH, which is a measure of the
            concentration of hydrogen ions. The acidity of a food products is a
            consequence of their formulation, including the amount and type of
            ingredients, additives, and preservatives used.
          </p>
        </div>
        <div className="mt-[20px] ">
          <form className="mt-[20px] flex flex-col gap-[7px]" id="TTA_Inputs">
            <div className="inputVal rounded-lg p-[5px] shadow-[0_3px_15px_-2px_rgba(21,199,42,0.68)] pb-[12px]  sampleWeight flex flex-col gap-[5px]">
              <label className="font-[500] text-lg " htmlFor="sampleWeight">
                Sample Weight
              </label>
              <input
                className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
                onChange={updateData("sampleWeight")}
                placeholder="Enter Sample Weight"
                type="number"
                name="sampleWeight"
                id="sampleWeight"
                value={data.sampleWeight}
              />
            </div>
            <div className="inputVal rounded-lg p-[5px] shadow-[0_3px_15px_-2px_rgba(21,199,42,0.68)] pb-[12px]  initialVol flex flex-col gap-[3px]">
              <label className="font-[500] text-lg " htmlFor="initialVol">
                Initial Volume of NAOH
              </label>
              <input
                className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
                required
                placeholder="Enter Initial Burette reading"
                type="number"
                name="initialVol"
                id="initialVol"
                onChange={updateData("initialVol")}
                value={data.initialVol}
              />
            </div>
            <div className="inputVal rounded-lg p-[5px] shadow-[0_3px_15px_-2px_rgba(21,199,42,0.68)] pb-[12px]  finalVol flex flex-col gap-[3px]">
              <label className="font-[500] text-lg " htmlFor="finalVol">
                Final Volume of NAOH
              </label>
              <input
                className="border-2 rounded-md border-[#15c72aad] border-solid px-[5px] py-[3px]"
                required
                placeholder="Enter final Burette reading"
                type="number"
                name="finalVol"
                id="finalVol"
                onChange={updateData("finalVol")}
                value={data.finalVol}
              />
            </div>

            <div className="dispAns text-center font-[500] text-lg mt-[12px]">
              TTA = {data.TTA_value}
            </div>
            <div className="calcBtn font-[500] text-lg flex mt-[8px] justify-center items-center gap-[20px]">
              <button
                className="px-[7px] py-[6px] rounded-lg  bg-[#090977] text-[white] shadow-[0_5px_5px_-2px_rgba(9,9,119,0.68)] "
                onClick={CalcTTA(0.0641)}
                id="citric"
              >
                Citric Acid(0.0641)
              </button>
              <button
                className="px-[7px] py-[6px] rounded-lg  bg-[#8f0606] text-[white] shadow-[0_5px_5px_-2px_rgba(143,6,6,0.68)]  "
                onClick={CalcTTA(0.09)}
                id="lactic"
              >
                Lactic Acid(0.09)
              </button>
            </div>
          </form>
          <Link to={"/welcome"}>
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TTA;
