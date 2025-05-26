"use client"

import Image from "next/image";
import Link from "next/link";
import Nav from "@components/Nav";
import OrangeSection from "@components/orange-section";
import TransformSection from "@components/transform-section";
import PinkCupBackground from "@components/pink-cup";
import GridImages from "@components/grid-images";
import Testimonials from "@components/testimonials";
import Gallery from "@components/gallery";
import Footer from "@components/footer";

export default function Home() {
  return (
    <>
    <div className="w-full overflow-hidden ">
    <div className="w-full">
      <Nav/> 
    </div>
      
      <div className="overflow-hidden
       absolute top-0 left-0 w-full
        h-full z-10">
      <OrangeSection/>
      </div>
      
<div className="w-full mt-[41rem] md:mt-[69rem]  lg:mt-[44rem]">
<TransformSection/>
</div>
      
      <PinkCupBackground/>
      <GridImages/>
      <Testimonials/>
      <Gallery/>

      <div className="w-full">
        <Footer/>
      </div>
    </div>

</>
   
  );
}
