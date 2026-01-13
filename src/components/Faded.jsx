import React from "react";

function Faded() {
  const link =
    "https://images.pexels.com/photos/7598077/pexels-photo-7598077.jpeg";
  return (
    <div className="px-2  mt-3 flex flex-col">
      <h1 className="font-bold pl-4 mt-4 font-aldrich text-[#fb8500]">
        FIRE AND ICE (REFLECTION OF WORLD TODAY):
      </h1>
      <h1 className="pl-5  pt-2 text-[12px] text-[#343a40] font-Cascadia">
        In this section, I also like to talk about the poem called fire and ice,
        you can find this poem in ncert book, even though it is an poem written
        for students yet meaningful one.
      </h1>
      <img
        className="rounded-xl shadow-xl mt-2"
        src="https://images.pexels.com/photos/11631807/pexels-photo-11631807.jpeg"
      />
      <div
        className="bg-center bg-cover p-3 rounded-lg mt-9 "
        style={{ backgroundImage: `url(${link})` }}
      >
        <h1 className=" font-semibold pt-2 text-[12px] text-[#343a40] font-Cascadia">
          In the poem Fire and Ice, Robert Frost speaks about two ways the world
          might end. Fire represents uncontrolled desire — greed,
          overconsumption, and endless human wants. Ice represents coldness —
          ignorance, indifference, and the refusal to care. Today, Earth is
          suffering from both. Fire can be seen in rising global temperatures,
          wildfires, excessive use of fossil fuels, and the never-ending hunger
          for comfort and growth. Our desires burn faster than the planet can
          heal. Ice exists in our silence. When we see pollution but ignore it.
          When we know the damage but choose convenience. When awareness is
          available, yet action is absent. Earth is not only harmed by what we
          do. It is also harmed by what we choose not to do. The poem reminds us
          that destruction does not always come loudly. Sometimes it comes
          quietly, through carelessness. Understanding this makes us realize
          that saving Earth is not only about stopping damage, but about
          changing mindset.
        </h1>
      </div>
      <h1 data-aos='fade-in' className="text-center px-3 font-bold font-aldrich text-[#fb8500] mt-4 text-xl">
        THE GREATER DANGER IS NOT DESTRUCTION, BUT INDIFFERENCE
      </h1>
    </div>
  );
}

export default Faded;
