import React from "react";

const transformSection = () => {
  return (
    <div
      className="overflow-hidden  items-center
     justify-center text-start text-fraunces font-bold md:grid md:grid-cols-2 "
    >
              {/*Mobile egg background */}
      <section
        className="w-full flex-center flex-col bg-cover right-0 
        bg-center bg-mobileEggImage h-[30rem] md:flex lg:hidden"
      ></section>

      {/* left side text */}

      <section
        className=" text-Verydarkdesaturatedblue text-center items-center 
        justify-center w-full bg-white h-[30rem] px-[3rem] py-[6rem]
         lg:h-[35rem] lg:px-[10rem] lg:py-[12rem] lg:text-start "
      >
        <h1 className=" text-[25px] font-fraunces lg:text-[30px] font-bold">
          Transform your brand
        </h1>
        <p className=" text-[15px] lg:text-[20px] font-barlow leading-7 mt-4 text-Grayishblue font-normal lg:leading-10 lg:tracking-wide">
          We are full-service creative agency specializing in helping brands
          grow fast. Engage with your customers through compelling experiences.
        </p>

        <a
          href=""
          className="px-5 font-bold uppercase font-fraunces mt-9  "
        >
          <h1 className="yellow_underline">Learn More</h1>
        </a>
      </section>

      {/* egg background */}
      <section
        className="hidden w-full bg-cover right-0 
        bg-center bg-eggImage h-[35rem] lg:flex-center md:hidden lg:flex-col  lg:flex"
      ></section>
    </div>
  );
};

export default transformSection;
