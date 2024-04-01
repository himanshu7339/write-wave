import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="flex-shrink-0">
            <span className="text-white font-bold text-lg">WriteWave</span>
          </Link>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
              <Link href={"/"}>Service</Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
