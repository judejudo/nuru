import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Updated to use React Router

const Header = () => {
  const [menuItems, setMenuItems] = useState([
    { label: "Home", isActive: true, href: "/" },
    { label: "Services", isActive: false, href: "/services" },
    { label: "Contact us", isActive: false, href: "/contact" },
    { label: "Blogs", isActive: false, href: "/blogs" },
  ]);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleItemClick = (clickedIndex) => {
    const updatedMenuItems = menuItems.map((item, index) => ({
      ...item,
      isActive: index === clickedIndex
    }));
    setMenuItems(updatedMenuItems);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Full-screen backdrop when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-80 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
      
      <header className={`relative flex justify-between bg-black items-center px-12 py-6 max-md:px-8 max-sm:px-5 ${mobileMenuOpen ? 'z-50' : 'z-30'}`}>
        <Link to="/" className="flex items-center gap-2">
          <div className="text-gray-300 text-4xl font-bold leading-tight tracking-tighter font-sansDoto max-sm:text-3xl">
            Nuruforge
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="flex items-center bg-opacity-60 bg-neutral-900 backdrop-blur-sm border border-neutral-800 gap-10 px-8 py-5 rounded-full max-md:hidden">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              onClick={() => handleItemClick(index)}
              style={{ 
                color: item.isActive ? "#BDFF02" : "white",
                cursor: "pointer",
                textDecoration: "none"
              }}
              className="text-base font-bold leading-tight hover:opacity-80 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div 
          className="hidden max-md:block cursor-pointer z-50" 
          onClick={toggleMobileMenu}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: mobileMenuOpen 
                ? `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`,
            }}
          />
        </div>
        
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
            <div className="w-full max-w-md bg-black bg-opacity-95 backdrop-blur-xl rounded-xl py-12 px-6 pointer-events-auto">
              <nav className="flex flex-col items-center gap-8 py-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => handleItemClick(index)}
                    style={{ 
                      color: item.isActive ? "#BDFF02" : "white",
                      cursor: "pointer",
                      textDecoration: "none"
                    }}
                    className="text-xl font-bold hover:opacity-80 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;