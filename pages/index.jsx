import React from "react";
import BannerBottom from "../components/Home/BannerBottom";
import HomePartFour from "../components/Home/HomePartFour";
import HomePartFive from "../components/Home/HomePartFive";
import HomeServices from "../components/Home/HomeServices";
import OurDoctors from "../components/Home/OurDoctors";
import Testimonial from "../components/Home/Testimonial";
import TopBanner from "../components/Home/TopBanner";

function index() {
  return (
    <div>
      <TopBanner />
      <BannerBottom />
      <HomeServices />
      <HomePartFour />
      <HomePartFive />
      <Testimonial />
      <OurDoctors />
    </div>
  );
}

export default index;
