import React from "react";
import SubAct from "./SubAct";

function OneHuman() {
  return (
    <div className="px-2  mt-3 flex flex-col">
      {" "}
      <h1  className="font-bold pl-4 mt-4 font-aldrich text-[#fb8500]">
        ONE HUMAN MATTER :
      </h1>
      <div className="p-2 flex flex-row">
        <img
          className="rounded-xl h-[150px] w-[160px]  shadow-xl"
          src="https://images.pexels.com/photos/31300793/pexels-photo-31300793.jpeg"
        />
        <h1 className=" pt-2 text-[12px] text-[#343a40] font-Cascadia">
          Change does not begin with the world—it begins with one human. Every
          action, no matter how small it seems, carries weight. One choice
          repeated daily can create a powerful impact over time.
        </h1>
      </div>
      <h1 className="pl-5 pt-2 text-[12px] text-[#343a40] font-Cascadia">
        You may feel that your efforts are too small to matter, but history
        proves otherwise. When one person chooses to care, it influences
        another. When awareness spreads from one mind to many, small changes
        come together to create meaningful results. One idea, followed by many
        people, becomes success. Taking action does not require perfection or
        grand gestures. Simple steps—saving water, reducing waste, choosing
        awareness over convenience, and speaking up when something feels
        wrong—are enough to begin. Earth does not need a few people doing
        everything right. It needs many people doing small things consciously.
        One human matters. And together, many humans can make a difference.
      </h1>
      <h1 className="text-center px-3 font-bold font-aldrich text-[#fb8500] mt-4 text-xl">
        YOU DON'T WANT TO CHANGE EVERYONE. JUST DON'T BE CARELESS
      </h1>
      <h1 className="pl-5 pt-2 text-[12px] text-[#343a40] font-Cascadia">
        Saving Earth does not require extraordinary actions. It begins with
        awareness and small, conscious choices made every day. When many
        individuals take responsibility, real change becomes possible.
      </h1>
      <SubAct
        img={
          "https://images.pexels.com/photos/6185245/pexels-photo-6185245.jpeg"
        }
        sub={
          "Talk about environmental issues with friends, family, classmates, or colleagues. Awareness spreads through conversations. When people talk about problems, they begin to care—and caring leads to action."
        }
        title={"USE YOUR VOICE"}
      />
      <SubAct
        title={"TRAVEL RESPONSIBLY"}
        sub={
          "Whenever possible, walk, cycle, or use public transport instead of private vehicles. Reduce unnecessary travel and avoid fuel wastage. Small travel choices can significantly reduce carbon emissions."
        }
        img={"https://images.pexels.com/photos/221284/pexels-photo-221284.jpeg"}
      />
      <SubAct
        title={"CHOOSE FOOD WISELY"}
        sub={
          "What we eat affects the planet. Reducing food waste and limiting excessive meat consumption helps lower greenhouse gas emissions and protects forests and wildlife. Even small dietary changes matter."
        }
        img={
          "https://images.pexels.com/photos/4997810/pexels-photo-4997810.jpeg"
        }
      />
      <SubAct
        title={"REDUCE PLASTIC USE"}
        sub={
          "Avoid single-use plastics. Carry reusable bags, bottles, and containers. Plastic lasts for hundreds of years and harms land, oceans, and living beings."
        }
        img={
          "https://images.pexels.com/photos/4498089/pexels-photo-4498089.jpeg"
        }
      />
      <SubAct
        title={"STAY INFORMED"}
        sub={
          "Learn about environmental issues and climate change. Being informed helps you make better daily decisions and guide others correctly."
        }
        img={
          "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg"
        }
      />
      <SubAct
        title={"USE SOCIAL MEDIA FOR GOOD"}
        sub={
          "Social media is powerful. Share meaningful content, spread awareness, and support environmental initiatives. One post can reach hundreds of minds."
        }
        img={
          "https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg"
        }
      />
      <SubAct
        title={"VOLUNTEER"}
        sub={
          "Support environmental organizations by volunteering, donating, or participating in community activities. Giving time and effort is as valuable as giving money."
        }
        img={
          "https://images.pexels.com/photos/7156173/pexels-photo-7156173.jpeg"
        }
      />
      <SubAct
        title={"SAVE ENERGY"}
        sub={
          "Simple habits like switching off unused lights, using stairs instead of elevators, and conserving electricity reduce energy demand and pollution."
        }
        img={
          "https://images.pexels.com/photos/6990575/pexels-photo-6990575.jpeg"
        }
      />
      <SubAct
        title={"SUPPORT SUSTAINABLE BRAND"}
        sub={
          "Choose products and brands that follow ethical and eco-friendly practices. Supporting responsible businesses encourages a greener market."
        }
        img={
          "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg"
        }
      />
      <SubAct
        title={"RRR"}
        sub={
          "Recycle materials whenever possible. Reuse items creatively instead of throwing them away. Reduce food waste by planning meals and using leftovers."
        }
        img={
          "https://images.pexels.com/photos/4668363/pexels-photo-4668363.jpeg"
        }
      />
      <SubAct
        title={"PARTICIPATE IN LOCAL CLEAN-UPs"}
        sub={
          "Join or organize clean-up drives in your neighborhood, parks, or beaches. These actions visibly improve the environment and inspire others."
        }
        img={
          "https://images.pexels.com/photos/10047780/pexels-photo-10047780.jpeg"
        }
      />
      <SubAct
        title={"CREATE AWARENESS AT SCHOOL OR WORK"}
        sub={
          "Start small initiatives, clubs, or discussions in your school, college, or workplace. Collective awareness changes habits over time."
        }
        img={
          "https://images.pexels.com/photos/7692893/pexels-photo-7692893.jpeg"
        }
      />
      <SubAct
        title={"JOIN ENVIRONMENTAL GROUPS"}
        sub={
          "Being part of environmental organizations strengthens your impact. Together, voices become louder and actions become stronger."
        }
        img={
          "https://images.pexels.com/photos/35641027/pexels-photo-35641027.jpeg"
        }
      />
      <h1 className="pl-5 pt-2 text-[12px] text-[#343a40] font-Cascadia">
        Living sustainably may seem difficult, but when it broken into small
        steps, it becomes achievable. Earth does not need perfection—it needs
        participation. One conscious action can inspire many. And many small
        actions can protect our only home.
      </h1>
      <h1 data-aos='fade-in' className="text-center px-3 font-bold font-aldrich text-[#fb8500] mt-4 text-xl">
        EARTH IS WOUNDED, NOT LOST
      </h1>
    </div>
  );
}

export default OneHuman;
