import React from "react";
import Image from "next/image";
import Link from "next/link";

const orangeSection = () => {
  return (
    <div className="overflow-hidden absolute top-0 left-0 w-full h-screen z-10">
      {/* Background Image */}
      <section className="w-full flex-center flex-col bg-cover bg-center h-full 
      bg-mobileTopImage lg:bg-topImage">
        <h1 className="uppercase text-white text-[2rem] lg:text-[4rem] font-fraunces"> We are Creatives</h1>

        <Link href="/">
          <Image
            src={"/icons/icon-arrow-down.svg"}
            width={30}
            height={30}
            alt="arrow down"
            className="justify-center items-center text-white"
          />
        </Link>
      </section>
    </div>
  );
};

export default orangeSection;
