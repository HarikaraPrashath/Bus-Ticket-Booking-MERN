import React from "react";
import Topplayout from "../../layout/toppages/topplayout";
import Rootlayout from "../../layout/rootlayout";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="w-full space-y-12 pb-16 bg-blue-50">
      {/* Top Section with Animated Banner */}
      <Topplayout
        bgImage={
            "https://www.akinatours.com/wp-content/gallery/luxury-mini-coach/cache/Luxury-Mini-Coach-Interior-Blue-LEDs-Rack-1800x1200.jpg-nggid0221-ngg0dyn-1197x800x60-00f0w010c010r110f110r010t010.jpg"
        }
        title={"Our Services"}
      />

      {/* Main Content Section */}
      <Rootlayout className="space-y-12 w-full pb-16 px-4 md:px-8 lg:px-12">
        {/* Our Services Section */}
        <motion.section
          className="max-w-5xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-blue-800">Our Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer a range of transportation services tailored to your needs.
            From convenient bus travel across Sri Lanka to private trip hire,
            our goal is to make your journey smooth, safe, and enjoyable.
          </p>
        </motion.section>

        {/* Bus Travel Section */}
        <motion.section
          className="max-w-5xl mx-auto space-y-6 bg-blue-100 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-700">Bus Travel</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore Sri Lanka with our modern and comfortable buses. Our routes
            cover all major cities, ensuring affordable and reliable
            transportation for daily commutes, tourism, or business trips.
          </p>
        </motion.section>

        {/* Private Trip Hire Section */}
        <motion.section
          className="max-w-5xl mx-auto space-y-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-blue-700">Private Trip Hire</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Need personalized travel plans? Hire our private trips with premium
            vehicles and experienced drivers. Whether it’s a family vacation or
            a corporate retreat, we ensure a seamless journey for you and your
            group.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Service Feature Cards */}
            {[
              { title: "Luxury Buses", description: "Comfortable seating and amenities." },
              { title: "Custom Itineraries", description: "Plan your trip your way." },
              { title: "24/7 Support", description: "Reliable customer service anytime." },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-24 w-24 mx-auto rounded-full bg-blue-200"></div>
                <h4 className="mt-4 text-xl font-semibold text-blue-800">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h4 className="text-2xl font-semibold text-blue-700">
            Ready to Travel with Us?
          </h4>
          <p className="mt-2 text-gray-600">
            Whether it's a quick trip or a long journey, we’ve got you covered.
            Book your service today and travel hassle-free.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition shadow-md">
            Book Now
          </button>
        </motion.section>
      </Rootlayout>
    </div>
  );
};

export default Service;
