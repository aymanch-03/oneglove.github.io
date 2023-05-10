/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
import glovePromo from "../public/glove-promo.png";
const MdNavContent = () => {
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
    <div>
      <ul className="p-4 text-white">
        <li
          className="px-5 py-6 text-xl cursor-pointer border-b-0 border-y-2 border-white/50 flex flex-col justify-center font-semibold"
          onClick={() => handleDropDown(0)}
        >
          <Link href="/" className="flex justify-between  items-center">
            <p>SHOP</p>
            <HiChevronRight
              className={
                dropdowns[0] ? `rotate-90 ${transition}` : `${transition}`
              }
              size={25}
            />
          </Link>
          <div
            className={
              dropdowns[0]
                ? `${transition} w-full px-3 py-2 h-[200px] overflow-hidden opacity-100`
                : `${transition} w-full  h-0 overflow-hidden opacity-0`
            }
          >
            <ul>
              <h1 className="text-lg cursor-pointer border-b-[2px white solid] font-semibold mb-3">
                GLOVES
              </h1>
              {glovesLinks.map((e) => (
                <li className="font-light text-[15px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                  <Link href="/">{e}</Link>
                </li>
              ))}
            </ul>
          </div>{" "}
        </li>
        <li
          onClick={() => handleDropDown(1)}
          className="px-5 py-6 text-xl cursor-pointer border-b-0 border-y-2 border-white/50 flex flex-col justify-center font-semibold"
        >
          <Link href="/" className="flex justify-between  items-center">
            <p>DISCOVER</p>
            <HiChevronRight
              className={
                dropdowns[1] ? `rotate-90 ${transition}` : `${transition}`
              }
              size={25}
            />
          </Link>
          <div
            className={
              dropdowns[1]
                ? `${transition} w-full px-3 py-2 h-[200px] overflow-hidden opacity-100`
                : `${transition} w-full h-0 overflow-hidden opacity-0`
            }
          >
            <ul>
              <h1 className="text-lg cursor-pointer border-b-[2px white solid] font-semibold mb-3">
                GLOVES
              </h1>
              {glovesLinks.map((e) => (
                <li className="font-light text-[15px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                  <Link href="/">{e}</Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          className="px-5 py-6 text-xl cursor-pointer border-b-0 border-y-2 border-white/50 flex flex-col justify-center font-semibold"
          onClick={() => handleDropDown(2)}
        >
          <Link href="/" className="flex justify-between  items-center">
            <p>CONTACT</p>
            <HiChevronRight
              className={
                dropdowns[2] ? `rotate-90 ${transition}` : `${transition}`
              }
              size={25}
            />
          </Link>
          <div
            className={
              dropdowns[2]
                ? `${transition} w-full px-3 py-2 h-[200px] overflow-hidden opacity-100`
                : `${transition} w-full h-0 overflow-hidden opacity-0`
            }
          >
            <ul>
              <h1 className="text-lg font-semibold mb-3">GLOVES</h1>
              {glovesLinks.map((e) => (
                <li className="font-light text-[15px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                  <Link href="/">{e}</Link>
                </li>
              ))}
            </ul>
          </div>{" "}
        </li>
        <li
          className="px-5 py-6 text-xl cursor-pointer border-y-2 border-white/50 flex flex-col justify-center font-semibold"
          onClick={() => handleDropDown(3)}
        >
          <Link href="/" className="flex justify-between  items-center">
            <p>HELP</p>
            <HiChevronRight
              className={
                dropdowns[3] ? `rotate-90 ${transition}` : `${transition}`
              }
              size={25}
            />
          </Link>
          <div
            className={
              dropdowns[3]
                ? `${transition} w-full px-3 py-2 h-[200px] overflow-hidden opacity-100`
                : `${transition} w-full h-0 overflow-hidden opacity-0`
            }
          >
            <ul>
              <h1 className="text-lg font-semibold mb-3">GLOVES</h1>
              {glovesLinks.map((e) => (
                <li className="font-light text-[15px] text-white/70 hover:text-primary/90 duration-200 transition-all cursor-pointer hover:translate-x-1.5">
                  <Link href="/">{e}</Link>
                </li>
              ))}
            </ul>
          </div>{" "}
        </li>
      </ul>
      <div className=" promo-bg w-full h-[400px] bg-cover bg-no-repeat "></div>
    </div>
  );
};

export default MdNavContent;
