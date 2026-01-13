import React from "react";

function Header() {
  const link =
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg";
  return (
    <div
      className="h-[250px] bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${link})` }}
    >
      <div class="relative text-white h-[250px]">
        
        <h1 data-aos="fade-in" class="absolute  bottom-8 left-0 m-4 text-2xl font-aldrich font-bold">       
          OUR
        </h1>
        <h1 data-aos="fade-in" class="absolute  bottom-0 left-0 m-4 text-2xl font-aldrich font-bold">       
          BEAUTIFUL EARTH <i class="fa-regular text-black bg-white rounded-full w-[23px] fa-circle-play"></i>
        </h1>
      </div>
    </div>
  );
}

export default Header;
