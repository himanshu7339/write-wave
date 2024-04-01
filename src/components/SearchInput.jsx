"use client";
import React, { useState,createContext, useContext } from "react";
const keywordContext = createContext
const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  console.log(keyword)
  return (
    <div className="relative mx-auto max-w-[80%] m-4">
      <input
        type="text"
        placeholder="Search blog posts..."
        onChange={(e)=> setKeyword(e.target.value)} 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-green-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute right-3 top-3 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9 3a6 6 0 100 12 6 6 0 000-12zM0 9a9 9 0 1118 0A9 9 0 010 9z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M14.95 14.95a1 1 0 01-1.414 0l-3.511-3.51a6 6 0 111.414-1.415l3.51 3.51a1 1 0 010 1.415z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
