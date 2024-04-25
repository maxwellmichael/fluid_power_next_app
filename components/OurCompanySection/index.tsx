"use client";
import React from "react";

import SectionHeader from "../Common/SectionHeader";
import Slider from "../Slider";
import Image from "next/image";
import MasonaryGallery from "../MasonaryGallery";

const slides=[
    '/images/work/site_work_6.png',
    '/images/work/site_work_2.jpg',
    '/images/work/site_work_7.png',
    '/images/work/site_work_4.jpg',
    '/images/work/site_work_5.jpg',
]

const OurCompanySection = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Company",
              subtitle: "Your hydraulic service experts.",
              description: `At Fluid Power, we're committed to meeting our customers' needs, delivering top-quality products and services. Our dedicated team of experts designs, manufactures, and delivers hydraulic solutions customized to your requirements. Our team of skilled mechanics and technicians specializes in hydraulic cylinder repair and rebuilding, bringing a wealth of knowledge and experience to every project.`,
            }}
          />

          <div className="w-full h-auto my-11">
          {/* <Slider autoSlide={true} >
            {[...slides.map((s) => (
                <img alt={s} src={s} style={{width:'auto', height:'auto', objectFit:'cover'}} />
            ))]}
            </Slider> */}
            <MasonaryGallery/>
          </div>
          
          
        
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default OurCompanySection;
