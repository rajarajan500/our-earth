import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="py-4 px-2 flex flex-col">
      {" "}
      <h1 className="pl-5 pt-2 text-[12px] text-[#343a40] font-Cascadia">
        This site is created purely to spread awareness, with the hope that it
        inspires reflection and small changes. Support this effort in any way
        you can—through your actions, your choices, and your voice. Together, we
        can protect and care for our Earth.
      </h1>
      <div className="flex underline shadow-lg flex-row justify-between text-[12px] mt-5 mb-3  font-aldrich ">
        <Link to="home" duration={1000} smooth={true}>
          HOME
        </Link>{" "}
        <Link duration={1000} smooth={true} to="earth">
          ABOUT EARTH
        </Link>
        <Link duration={1000} smooth={true} to="causes">
          CAUSES
        </Link>
        <Link duration={1000} smooth={true} to="reality">
          REALITY
        </Link>
        <Link duration={1000} smooth={true} to="mearures">
          MEASURES
        </Link>
      </div>
    </div>
  );
}

export default Footer;
