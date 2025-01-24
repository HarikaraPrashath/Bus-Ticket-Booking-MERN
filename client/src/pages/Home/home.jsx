import React from "react";
import Hero from "../Home/hero/hero"
import TopSearch from "../Home/topSearch/topSarch"
import Service from "./hero/service/service";

const Home = () => {
  return (
    <div className="space-y-16 w-full min-h-screen pb-16 bg-gradient-to-br from-white to-blue-400 rounded-lg shadow-lg">
    {/* Hero */}
    <Hero  />

    {/* service */}
    <Service/>

    {/* top search */}
    <TopSearch/>

    
  </div>
  );
};

export default Home;
