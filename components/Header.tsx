"use client";
import { useEffect, useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`py-4 fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 ${
        isScroll ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="flex gap-10 items-center">
          <SocialMediaLinks />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
