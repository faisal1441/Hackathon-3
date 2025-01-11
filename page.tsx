import React from "react";
import Hero from "./component/Hero";
import CompanyLogo from "./component/companyLogo";
import FeaturedProduct from "./component/featuredProducts";
import Categories from "./component/Categories";
import OurProduct from "./component/OurProduct";

export default function Home() {
  return (
    <div>
      <Hero/>
      <CompanyLogo/> 
      <FeaturedProduct/>
      <Categories/>
      <OurProduct/>
    </div>
  );
}

