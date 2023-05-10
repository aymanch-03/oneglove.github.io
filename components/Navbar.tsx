/* eslint-disable react/jsx-key */
import { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { BsX } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";
import SearchBar from "./SearchBar";
import MdNavContent from "./MdNavContent";

const Navbar = () => {
  const transition = "duration-300 transition-all";
  const glovesLinks = [
    "All Goalkeeper Gloves",
    "All Goalkeeper Gloves",
    "All Goalkeeper Gloves",
    "Pro Issued Collectables",
  ];
  const glovesLinksByType = [
    "Negative Cut",
    "Roll Finger",
    "Hybrid Cut",
    "Finger Save",
  ];
  const glovesLinksByGrip = ["All Weather", "Wet Weather"];
  const [navMenu, setNavMenu] = useState(false);
  const [dropdowns, setDropdowns] = useState([false, false, false, false]);

  function handleDropDown(index: number) {
    const newDropdowns = [...dropdowns];
    newDropdowns[index] = !newDropdowns[index];
    for (let i = 0; i < newDropdowns.length; i++) {
      if (i !== index) {
        newDropdowns[i] = false;
      }
    }

    setDropdowns(newDropdowns);
  }
  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div
      className={
        navMenu ? `bg-black ${transition}` : `bg-black/50 ${transition}`
      }
    >
      <nav className="flex justify-between items-center md:py-6 py-4 container px-5 mx-auto w-full relative z-50">
        <div className="lg:grid lg:grid-cols-3 flex items-center justify-between lg:place-items-center gap-x-20 w-full">
          <SearchBar />
          <Link href="/">
            <p className="flex items-center justify-center font-bold text-white md:text-2xl text-xl">
              THE<span className="text-primary font-light">ONE</span> GLOVE
            </p>
          </Link>
          <div>
            {navMenu ? (
              <BsX
                size={28}
                className="text-white cursor-pointer hover:text-primary transition-all duration-200 focus:outline-none"
                onClick={handleNavMenu}
              />
            ) : (
              <RiMenu3Fill
                size={28}
                className="text-white cursor-pointer hover:text-primary transition-all duration-200 focus:outline-none"
                onClick={handleNavMenu}
              />
            )}
          </div>
        </div>
      </nav>
      <div
        className={
          navMenu
            ? "w-full  absolute bg-black top-0 z-10 transition-all duration-300 ease-out text-white lg:block hidden"
            : "w-full  absolute bg-black top-[-80vh] z-10 transition-all duration-300 ease hover:text-white/90 hover:translate-x-1.5 text-black lg:block hidden"
        }
      >
        <main className="container px-5 h-full mx-auto">
          <ul className="flex justify-between items-baseline pt-20 pb-3">
            <li className="font-bold text-lg cursor-pointer text-center w-full group">
              <Link
                href="/"
                className="duration-200 transition-all group-hover:text-primary "
              >
                SHOP
              </Link>
              <div className="py-10 px-24 absolute left-0 w-full bg-black h-0 opacity-0 text-white overflow-hidden transition-all duration-300 text-left group-hover:opacity-100 group-hover:h-[72vh] cursor-default">
                <main className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-10">
                  <section>
                    <h1 className="text-lg font-semibold mb-3">GLOVES</h1>
                    <ul className="mb-6">
                      {glovesLinks.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-base font-semibold mb-3">By Type</h3>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-base font-semibold mb-3 mt-6">
                      By Grip
                    </h2>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h1 className="text-lg font-semibold mb-3">
                      KIT & CLOTHING
                    </h1>
                    <ul className="mb-6">
                      {glovesLinks.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-base font-semibold mb-3">By Type</h3>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h1 className="text-lg font-semibold mb-3">ESSENTIALS</h1>
                    <ul className="mb-6">
                      {glovesLinks.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-base font-semibold mb-3">Glove Care</h3>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-base font-semibold mb-3 mt-6">
                      Travel
                    </h2>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-base font-semibold mb-3 mt-6">
                      Training Aids
                    </h2>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="">
                    <h1 className="text-lg font-semibold mb-3">PROMOTION</h1>
                    <div className="promo-bg w-[288px] h-72 object-contain bg-no-repeat bg-cover flex flex-col items-center justify-end pb-10">
                      <h1 className="text-3xl pb-7 font-extrabold">OUTLET</h1>
                      <button
                        className={`px-12 py-5 font-semibold text-sm bg-blue-600 tracking-widest hover:bg-blue-700 ${transition}`}
                      >
                        SHOP SALE
                      </button>
                    </div>
                    {/* <ul className="mb-6">
                      {glovesLinks.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-base font-semibold mb-3">By Type</h3>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-white/90 duration-200 transition-all hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-base font-semibold mb-3 mt-6">
                      By Grip
                    </h2>
                    <ul>
                      {glovesLinksByGrip.map((e) => (
                        <li className="font-light text-[17px] text-white/70 hover:text-white/90 duration-200 transition-all hover:translate-x-1.5">
                          <Link href="/">{e}</Link>
                        </li>
                      ))} 
                    </ul> */}
                  </section>{" "}
                </main>
              </div>
            </li>
            <li className="font-bold text-lg cursor-pointer text-center w-full group">
              <Link
                href="/"
                className="duration-200 transition-all group-hover:text-primary"
              >
                DISCOVER
              </Link>
              <div className="absolute left-0 w-full bg-black h-0 opacity-0 text-primary overflow-hidden transition-all duration-300 text-left group-hover:opacity-100 group-hover:h-[300px]">
                <main className="">
                  <section></section>
                  <section></section>
                  <section></section>
                  <section></section>
                </main>
              </div>
            </li>
            <li className="font-bold text-lg cursor-pointer text-center w-full group">
              <Link
                href="/"
                className="duration-200 transition-all group-hover:text-primary"
              >
                CONTACT
              </Link>
              <div className="absolute left-0 w-full bg-black h-0 opacity-0 text-primary overflow-hidden transition-all duration-300 text-left group-hover:opacity-100 group-hover:h-[300px]">
                <main className="">
                  <section></section>
                  <section></section>
                  <section></section>
                  <section></section>
                </main>
              </div>
            </li>
            <li className="font-bold text-lg   cursor-pointer text-center w-full group">
              <Link
                href="/"
                className="duration-200 transition-all group-hover:text-primary"
              >
                HELP
              </Link>
              <div className="absolute left-0 w-full bg-black h-0 opacity-0 text-primary overflow-hidden transition-all duration-300 text-left group-hover:opacity-100 group-hover:h-[300px]">
                <main className="">
                  <section></section>
                  <section></section>
                  <section></section>
                  <section></section>
                </main>
              </div>
            </li>
          </ul>
        </main>
      </div>
      <div
        className={
          navMenu
            ? `md:w-[500px] w-[300px] h-[90vh] absolute ${transition} left-0 bg-black lg:hidden block z-[100] px-5 overflow-scroll pb-6`
            : `left-[-100%] md:[500px] w-[300px] h-screen absolute ${transition} bg-black lg:hidden block z-[100] px-5 overflow-scroll`
        }
      >
        <MdNavContent />
      </div>
    </div>
  );
};

export default Navbar;
