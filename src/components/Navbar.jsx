/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Theme from "./SharedCmp/Theme";
import useTheme from "../Hooks/useThem";
import { FaGithub } from "react-icons/fa";
import PageLogo from "../Shared/PageLogo/PageLogo";


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { mode } = useTheme(); 
  
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavList = () => {
    return (
      <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
        <Typography
          as="li"
          variant="large"
          color= 'black'
          className="p-1 font-medium"
        >
          <Link
            to={"/components/avatar"}
            className={`flex items-center hover:text-[#D9FE54]  transition-colors ${mode === "dark"? "text-white":""}`}
          >
            Components
          </Link>
        </Typography>
        
        <Typography
          as="li"
          variant="large"
          color= 'black'
          className="p-1 font-medium"
        >
          <Link
            to={"/Documantion"}
            className={`flex items-center hover:text-[#D9FE54]  transition-colors ${mode === "dark"? "text-white":""}`}
          >
            Documentation
          </Link>
        </Typography>

        <Typography
          as="li"
          variant="large"
          color= 'black'
          className="p-1 font-medium"
        >
          <Link
            to={"/blog"}
            className={`flex items-center hover:text-[#D9FE54]  transition-colors ${mode === "dark"? "text-white":""}`}
          >
            Blogs
          </Link>
        </Typography>

        <Typography
          as="li"
          variant="large"
          color= 'black'
          className="p-1 font-medium hidden lg:block"
        >
         <Theme/>
        </Typography>

        <Typography
          as="li"
          variant="large"
          color= 'black'
          className="p-1 font-medium"
        >
         <a href="https://github.com/nayon117/EliteX-UI" target="_blank">
          <FaGithub
           className={`text-black ${mode === "dark"? "text-white":""}`}
           />
           </a>
        </Typography>
      </ul>
    );
  };

  return (
    <nav className={`mx-auto fixed top-0 w-full navbar z-10 ` } style={{ backdropFilter: isScrolled ? "blur(5px)" : "none" }} >
    <div className="flex items-center justify-between max-w-8xl mx-auto px-5">
      <Link to={"/"}>
        <PageLogo/>
      </Link>
      <div className="hidden lg:block">
        <NavList />
      </div>
      
      <IconButton
          variant="text"
          className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className={`h-8 w-8 ${mode === "dark" ? "text-white" : "text-black"}`} strokeWidth={2} />
          ) : (
            <Bars3Icon className={`h-8 w-8 ${mode === "dark" ? "text-white" : "text-black"}`} strokeWidth={2} />
          )}
        </IconButton>
      <div className="block ml-4 lg:hidden">
      <Theme/>
      </div>
    </div>
    <Collapse open={openNav} className={`navbar ${mode === "dark" ? "bg-black" : "bg-white "}`} strokeWidth={2}>
      <NavList />
    </Collapse>
  </nav>
  );
};

export default Navbar;