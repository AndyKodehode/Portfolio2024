"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const HamburgerMenu = ({ hamFill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="block md:hidden ">
      <button
        className="flex items-center justify-center w-10 h-10 transition duration-500 rounded-md top-4 right-4"
        onClick={handleMenuToggle}
        aria-label="Åpne navigasjonsmeny"
      >
        <GiHamburgerMenu
          className={`w-20 h-20 ${
            hamFill === "kv-white" ?  "fill-portfolio-primary-blue" : "fill-kv-white" 
          }`}
        />
      </button>
      <div
        className={`fixed top-0  right-0 w-full bg-kv-white h-screen transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}
      >
        <nav className="relative flex justify-center">
          <button
            className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
            onClick={handleMenuToggle}
            aria-label="Lukke navigasjonsmeny"
          >
            {" "}
            <IoCloseSharp
              className={` ${
                isOpen ? "block" : "hidden"
              } text-kv-black rounded-full transition duration-500 z-50 w-12 h-12`}
            />
          </button>

          <ul className="grid gap-8 mt-40">
            <Link
              href="/"
              aria-label="gå til underside og les om vår visjon"
              className="px-8 text-4xl font-bold transition-all text-jobloop-primary-orange group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              Hjem
            </Link>
            <Link
              href="/omMeg"
              aria-label="gå til underside og få svar på typiske spørsmål"
              className="px-8 text-4xl font-bold transition-all text-jobloop-primary-orange group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              Om meg
            </Link>
            <Link
              href="/kontakt"
              aria-label="gå til underside og les mer om oss"
              className="px-8 text-4xl font-bold transition-all text-jobloop-primary-orange group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              Kontakt
            </Link>
            <Link
              href="/minReise"
              aria-label="gå til underside og les mer om kodespråkene våre"
              className="px-8 text-4xl font-bold transition-all text-jobloop-primary-orange group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              Min reise
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;