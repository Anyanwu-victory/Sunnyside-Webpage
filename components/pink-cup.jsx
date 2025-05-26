import React from 'react'

const pinkCupBackground = () => {
  return (
    <div
      className="overflow-hidden  items-center
     justify-center text-start text-fraunces font-bold md:grid md:grid-cols-2"
    >
              {/*Mobile egg background */}
      <section
        className="w-full flex-center flex-col bg-cover right-0 
        bg-center bg-mobileImagePinkCup h-[30rem] lg:hidden"
      ></section>

      {/* desktop background */}
      <section
        className="hidden w-full bg-cover
         bg-mobileImagePinkCup right-0 bg-center h-[35rem] lg:flex-center lg:flex-col 
        lg:flex "
      ></section>

      {/* left side text */}

      <section
        className=" text-Verydarkdesaturatedblue text-center items-center 
        justify-center w-full bg-white h-[30rem] text-fraunces px-[3rem] py-[6rem]
         lg:h-[35rem] lg:px-[10rem] lg:py-[12rem] lg:text-start "
      >
        <h1 className="font-fraunces text-[25px] lg:text-[30px] font-bold">
          Stand out to the right audience
        </h1>
        <p className=" text-[15px] lg:text-[20px] font-barlow text-Grayishblue leading-7 mt-4 lg:leading-10 lg:tracking-wide">

          Using the collaborative formular of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.

        </p>

        <a
          href=""
          className="px-5 uppercase font-bold font-fraunces mt-9 red_underline" 
        >
          <h1 className='red_underline
           lg:hover:text-soft-red lg:hover:transition-all lg:hover:duration-300 lg:hover:ease-in-out lg:hover:cursor-pointer'>Learn More</h1>
        </a>
      </section>

      
    </div>

  )
}

export default pinkCupBackground