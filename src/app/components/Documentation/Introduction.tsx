"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { DocNavigation } from "./DocNavigation";

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);
  const PackageVersions = [];
  return (
    <>
      <div id="version" className="md:scroll-m-[180px] scroll-m-28">
        {docNavbarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className="flex item-center justify-between">
          <h3 className=" text-2xl mt-4 font-semibold mb-6 text-black">
            Pacakge Versions
          </h3>
          <button onClick={() => setDocNavbarOpen(true)} className="p-0">
            {" "}
            <Icon icon="gg:menu-right" className="text-3xl lg:hidden block" />
          </button>
        </div>

        <div className="w-full flex justify-between lg:gap-0 gap-6 lg:flex-nowrap flex-wrap p-6 rounded-md border border-dark_border border-opacity-60">
          {/* No packages to show */}
        </div>
        <div className="mt-5">
          <p className="text-base font-medium text-muted text-opacity-60">
            ELearning Tailwind NextJs Template is built with Tailwindcss and
            Nextjs.
          </p>
          <p className="text-base font-medium text-muted text-opacity-60">
            These theme is ready to use and you can totally customize as per
            your requirement.
          </p>
          <p className="text-base font-medium text-muted text-opacity-60">
            For Customize, You should have knowledge of NextJs, ReactJs,
            Tailwind and JSX to be able to modify these template.
          </p>
        </div>
      </div>

      <div
        className={`lg:hidden block fixed top-0 right-0 h-full w-full bg-white dark:bg-dark shadow-lg transform transition-transform duration-300 max-w-xs ${
          docNavbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text dark:text-black">
            Docs Menu
          </h2>
          <button
            onClick={() => setDocNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-black"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-4">
          <DocNavigation />
        </nav>
      </div>
    </>
  );
};
