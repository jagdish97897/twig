import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../resource/twcpl.png';

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuDropDown, setMenuDropDown] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };


  const handleMenuDropDown = (menu) => {
    setMenuDropDown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownData = [
    {
      title: 'Businesses',
      sections: [
        {
          header: 'Sectors',
          items: [
            { name: 'Logistics and Supply Chain', url: '/Twi' },
            { name: 'Freight Forwarding and Logistics', url: '/Ustl' },
            { name: 'E-Mobility Solutions', url: '/Kgvl' },
            { name: 'IT Solutions and Digital Services', url: '/Tsil' },
            { name: 'Pulp and Paper Manufacturing (Bamboo Paste Pulp)', url: '/Gep' },
            { name: 'Industrial Products and Project Supplies', url: '/Tbw' },
            { name: 'Hospitality (Luxury Resorts)', url: '/businesses/others' },
            { name: 'IT Support and Software Services', url: '/businesses/others' },
            { name: 'Government Advocacy and Business Consultancy', url: '/businesses/others' },
          ],
        },
        {
          header: 'Companies',
          items: [
            { name: 'TRANSPORT WINGS (CAL) PVT.LTD', url: 'https://www.twcpl.in/' },
            { name: 'USTRANS World Logistics Limited (USTL)', url: 'https://ustl.in/' },
            { name: 'Karishma Global Ventures LLP (KGV)', url: 'https://kgvl.co.in/' },
            { name: 'Transvue Solutions India Pvt Ltd (TSIL)', url: 'https://tsil.net.in/' },
            { name: 'Green Earth Pulp & Paper Pvt Ltd', url: '#' },
            { name: 'Trade Biz Worldwide (TBW)', url: '#' },
            { name: 'Dream Luxottica', url: '#' },
            { name: 'Connect 2 Xperts LLC, USA', url: '#' },
            { name: 'Advance Consultancy', url: '#' },
          ],
        },
      ],
    },
    {
      title: 'About Us',
      sections: [
        {
          header: 'Explore About Us',
          items: [
            { name: 'Our Vision One Team', url: '/Ovot' },
            { name: "Chairman's Message", url: '/ChairmansMessage' },
          ],
        },
      ],
    },
    {
      title: 'Sustainability',
      sections: [
        {
          header: 'Explore Sustainability',
          items: [
            { name: 'Environmental Initiatives', url: '/sustainability/environmental-initiatives' },
            { name: 'Social Responsibility', url: '/sustainability/social-responsibility' },
          ],
        },
      ],
    },
    {
      title: 'Blogs',
      sections: [
        {
          header: 'Our Blogs',
          items: [
            { name: 'Latest Blog', url: '/BlogGrid' },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-screen bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className='flex'>
          <a href="/">
            <img src={logo} alt="Logo" className="h-16" />
          </a>
          <span className="text-xl font-bold text-gray-800 m-4">TWI GROUP OF COMPANIES</span>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-6 mr-16">
          {dropdownData.map((dropdown, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(dropdown.title)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <button className="hover:text-teal-500 text-gray-800 font-semibold">
                {dropdown.title}
              </button>

              {openDropdown === dropdown.title && (
                <div
                  className="absolute top-full left-3/4 transform -translate-x-1/2 w-[90%] lg:w-[500px] bg-white shadow-lg z-50"
                  onMouseEnter={() => handleMouseEnter(dropdown.title)} // Keep dropdown open on hover
                  onMouseLeave={() => handleMouseLeave()} // Close dropdown when leaving it
                >
                  <div className="flex flex-col lg:flex-row justify-around py-4 px-8 space-y-4 lg:space-y-0 lg:space-x-8">
                    {dropdown.sections.map((section, secIndex) => (
                      <div key={secIndex}>
                        <h3 className="font-bold text-lg text-gray-800 mb-4">{section.header}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="hover:text-teal-500">
                              <a href={item.url}>{item.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {dropdownData.map((dropdown, index) => (
              <li key={index}>
                <div className="flex items-center justify-between">
                  {/* <a href="/">{dropdown.title}</a> */}
                  {dropdown.title}
                  <button
                    onClick={() => handleMenuDropDown(menuDropDown !== dropdown.title ? dropdown.title : null)}
                    className="flex items-center hover:text-teal-500 text-gray-800 font-semibold"
                  >
                    {menuDropDown === dropdown.title ? "v" : ">"}
                    {/* {dropdown.title}
                    <span className="mr-2">{openDropdown === dropdown.title ? "v" : ">"}</span> Toggle arrow */}
                  </button>
                </div>

                {/* Dropdown content that shows up when openDropdown matches dropdown title */}
                {menuDropDown === dropdown.title && (
                  <div className="mt-2 bg-gray-100 p-4 max-h-[200px] overflow-y-auto">
                    {dropdown.sections.map((section, secIndex) => (
                      <div key={secIndex}>
                        <h3 className="font-bold text-lg text-gray-800 mb-4">{section.header}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="hover:text-teal-500">
                              <a href={item.url}>{item.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
};
