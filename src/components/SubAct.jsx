import React from "react";

function SubAct({ title, sub, img }) {
  return (
    <div data-aos='fade-in' className="rounded-xl mt-4 p-2 shadow-xl bg-[#6a994e] bg-opacity-40 flex flex-col">
      <h1 className=" pt-2 text-[13px] text-center font-semibold text-[#343a40] font-Cascadia">
        {title}
      </h1>
      <div className="flex flex-row">
        <img className="rounded-xl mr-2 h-[130px] w-[100px]" src={img} />

        <h1 className=" pt-2 text-[12px] text-[#343a40] font-Cascadia">
          {sub}
        </h1>
      </div>
    </div>
  );
}

export default SubAct;
