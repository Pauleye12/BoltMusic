import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const analysis = [
    {
      name: "Total Titratable Acid (TTA)",
      details:
        "An analysis carried out on finished product to determine the total acid present as a result of all the ingredients used in the formulation of the product",
      link: "/welcome/tta",
    },
    {
      name: "Agar Preparation Assistant",
      details:
        "An assistant designed to assist you with agar preparation and important informations you need to be aware of.",
      link: "/welcome/agarprep",
    }
    // {
    //   name: "Molar Mass Determination",
    //   details:
    //     "An analysis carried out on finished product to determine the total acid present as a result of all the ingredients used in the formulation of the product",
    //   link: "yenyen",
    // },
  ];
  return (
    <div className="bg-[#252525] h-[100vh] w-[100vw] text-[black] grid place-items-center">
      <div className="bg-[white] px-[15px] py-[10px] rounded-lg pb-[30px] ">
        <h1 className="font-[700] text-2xl text-[#008b15] ">
          <span className="text-[#e21710]">Welcome,</span> Please select
          analysis
        </h1>
        <div className="mt-[20px] flex flex-col gap-[15px] ">
          {analysis.map((e, index) => {
            return (
              <Link key={index} to={e.link}>
                <div className="bg-[#104097] text-white px-[20px] py-[20px] max-w-[600px] rounded-xl w-[100%] ">
                  {" "}
                  <h1 className="text-center font-[600] text-xl ">
                    {e.name}
                  </h1>{" "}
                  <h2 className=" mt-[10px] ">{e.details}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
