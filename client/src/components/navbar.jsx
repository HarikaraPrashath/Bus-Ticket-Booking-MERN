import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the FaBars and FaTimes icons

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [open, setOpen] = useState(false);

  // Navbar items
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Service', link: '/service' },
    { label: 'Ticket', link: '/busTicket' },
    { label: 'About', link: '/about' },
  ];

  // Toggle menu open/close
  const handleToggle = () => {
    setOpen(!open);
  };

  // Close menu
  const handleClose = () => {
    setOpen(false);
  };

  // Handle scrolling for showing/hiding the navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollingPosition = window.scrollY;
      if (currentScrollingPosition > scrollPosition && currentScrollingPosition > 50) {
        setIsValid(false); // Hide the navbar
      } else {
        setIsValid(true); // Show the navbar
      }
      setScrollPosition(currentScrollingPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div
      className={`w-full fixed top-0 left-0 px-4 lg:px-24 md:px-16 sm:px-7 backdrop-blur-lg transition-transform duration-300 z-50 ${
        isValid ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between w-full h-16">
        {/* Logo */}
        <Link to="/" className="text-4xl text-primary font-bold">
          <span className=''>Route </span>Bus
        </Link>

        {/* Hamburger menu */}
        <div
          onClick={handleToggle}
          className="md:hidden flex items-center justify-center cursor-pointer text-neutral-700"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Nav links and button */}
        <div
          className={`md:flex md:items-center ${
            open ? 'flex' : 'hidden'
          } flex-col md:flex-row md:gap-6 gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none py-4 md:py-0`}
        >
          {/* Nav links */}
          <ul className="list-none flex md:flex-row flex-col items-center md:gap-6 gap-4 text-lg font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="text-primary hover:text-blue-700">
                <Link
                  to={item.link}
                  className="block px-4 py-2 rounded-md hover:bg-blue-100 transition"
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="w-full md:w-auto px-6 py-2 bg-primary text-white font-medium rounded-lg border border-primary hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
