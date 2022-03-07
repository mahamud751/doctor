import React from "react";
import BannerBottom from "../components/Home/BannerBottom";
import HomePart4 from "../components/Home/HomePart4";
import HomePart5 from "../components/Home/HomePart5";
import HomeServices from "../components/Home/HomeServices";
import OurDoctors from "../components/Home/OurDoctors";
import TopBanner from "../components/Home/TopBanner";

function index() {
  return (
    <div>
      <TopBanner />
      <BannerBottom />
      <HomeServices />
      <HomePart4 />
      <HomePart5 />
      <OurDoctors />
    </div>
  );
}

export default index;
