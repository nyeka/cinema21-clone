"use client";
import React from "react";

export const Header = (headerText: { text: string }) => {
  return (
    <div className="px-5 mt-12">
      <div className="bg-gray-900 text-white text-xl w-fit md:w-52 flex items-center justify-center p-2 rounded-lg">
        {headerText.text}
      </div>
    </div>
  );
};
