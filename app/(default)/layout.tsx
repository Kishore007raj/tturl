import React from "react";
import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "url-shortener",
  description: "shorten urls in one click",
  icons: {
    icon: "/assets/logo.png",
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="absolute">
        <Navbar />
      </div>
      <h1 className="text-4xl sm:text-6xl mt-[8rem] font-medium text-center w-full">
        Shorten Long Urls <br /> in <span className="text-blue-500">one</span> click
      </h1>
      <div className="w-full flex-grow">{children}</div> {/* Added flex-grow */}
      <footer className="text-center text-gray-500 mt-8 py-4">
        Built with 💻 by Murugaperumal R <br />© 2024 Murugaperumal R. All rights reserved.
      </footer>
    </div>
  );
};

export default layout;
