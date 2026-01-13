import React from "react";

function Intro() {
  return (
    <div className="py-4 px-2 flex flex-col">
      <h1  className="font-bold  font-aldrich text-[#fb8500]">
        ABOUT THIS SITE :
      </h1>
      <h1 className="pl-5 pt-2 text-[12px] text-[#343a40] font-Cascadia">
        This platform created to share a deeper understanding and vision of our
        beautiful Earth. The aim of this project is to spread awareness about
        protecting our mother land and to help people realize how small actions
        can lead to huge impacts. This site speaks about humanity and our
        responsibility toward Earth’s safety. Every line here carries a purpose
        and a meaning behind it. We hope that every individual who visits this
        space reflects, understands, and takes small but meaningful actions
        toward caring for our planet.
      </h1>
      <div className="flex mt-5  pl-2 flex-row">
        <img className="h-[150px] rounded-lg shadow-xl  w-[190px] bg-cover bg-center" src="https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-images-1080p-nature-autumn.jpg"/>
        <div data-aos='fade-in' className="flex text-center text-[#fb8500] ml-10 justify-between font-bold text-2xl font-aldrich  flex-col p-2">
            <h1>EARTH</h1><h1>IS AN</h1><h1>ART</h1>

        </div>
      </div>
    </div>
  );
}

export default Intro;
