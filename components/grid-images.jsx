import React from "react";
import Image from "next/image";

const gridImages = () => {
  return (
    <div className="md:grid md:grid-cols-2 justify-center items-center ">
        {/* Graphic Design */}
      <div className="bg-mobileImageGraphicDesign w-full bg-cover md:bg-contain
       bg-no-repeat h-[30rem] md:h-[35rem]
      lg:bg-Desktopimagegraphicdesign 
      lg:bg-cover lg:bg-center lg:bg-no-repeat">

        <div
          className=" text-graphicDesigntext absolute text-center 
          items-center justify-center 
         text-barlow  pt-[18rem] mx-auto lg:h-[35rem] 
         lg:px-[12rem] lg:pt-[20rem] lg:w-1/2 "
        >
          <h1 className="text-[25px] lg:text-[30px] font-bold">
            Graphic Design
          </h1>
          <p className=" text-[15px] lg:text-[15px] leading-7 mt-9 lg:leading-6
           lg:tracking-wide px-4 lg:px-0">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients' attention
          </p>

          
        </div>
      </div>
      {/* Graphic Design */}

      <div className="bg-mobileImagePhotography w-full bg-cover md:bg-contain
       bg-no-repeat h-[30rem] md:h-[35rem]
      lg:bg-desktopImagePhotography 
      lg:bg-cover lg:bg-center lg:bg-no-repeat">

        <div
          className=" text-photographyText absolute text-center 
          items-center justify-center 
         text-barlow  pt-[18rem] mx-auto lg:h-[35rem] 
         lg:px-[12rem] lg:pt-[20rem] lg:w-1/2 "
        >
          <h1 className="text-[25px] lg:text-[30px] font-bold">
            Photography
          </h1>
          <p className=" text-[15px] lg:text-[15px] leading-7 
          mt-9 lg:leading-6 lg:tracking-wide px-4 lg:px-0">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
          </p>

          
        </div>
      </div>

    </div>
  );
};

export default gridImages;
