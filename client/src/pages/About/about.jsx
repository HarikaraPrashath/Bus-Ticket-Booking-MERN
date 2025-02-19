import React from "react";
import Topplayout from "../../layout/toppages/topplayout";
import Rootlayout from "../../layout/rootlayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full space-y-12 pb-16 bg-blue-50">
      {/* Top Section with Animated Banner */}
      <Topplayout
        bgImage={
          "https://www.akinatours.com/wp-content/gallery/luxury-mini-coach/cache/Luxury-Mini-Coach-Interior-Blue-LEDs-Rack-1800x1200.jpg-nggid0221-ngg0dyn-1197x800x60-00f0w010c010r110f110r010t010.jpg"
        }
        title={"About Us"}
      />

      {/* Main Content Section */}
      <Rootlayout className="space-y-12 w-full pb-16 px-4 md:px-8 lg:px-12">
        {/* Who We Are Section */}
        <motion.section
          className="max-w-5xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-blue-800">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a team of passionate individuals dedicated to making a
            difference through innovation, creativity, and excellence. Our
            goal is to provide unforgettable experiences and solutions that
            transform the way you achieve success.
          </p>
        </motion.section>

        {/* Our Mission Section */}
        <motion.section
          className="max-w-5xl mx-auto space-y-6 bg-blue-100 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-700">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To empower individuals and organizations to achieve their goals
            by offering world-class services and innovative solutions. We
            believe in creating value through collaboration and pushing the
            boundaries of what's possible.
          </p>
        </motion.section>

        {/* Meet Our Team Section */}
        <motion.section
          className="max-w-5xl mx-auto space-y-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-blue-700">
            Meet Our Team
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team is a diverse group of talented professionals who are
            committed to delivering exceptional results. We value
            collaboration, creativity, and innovation in everything we do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Team Member Cards */}
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-24 w-24 mx-auto rounded-full bg-blue-200"></div>
                <h4 className="mt-4 text-xl font-semibold text-blue-800">
                  Team Member {i + 1}
                </h4>
                <p className="text-sm text-gray-600">
                  Expert in innovation and excellence.
                </p>
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
            Ready to Join Us?
          </h4>
          <p className="mt-2 text-gray-600">
            Let’s work together to create something amazing!
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition shadow-md">
            Contact Us
          </button>
        </motion.section>
      </Rootlayout>
    </div>
  );
};

export default About;
