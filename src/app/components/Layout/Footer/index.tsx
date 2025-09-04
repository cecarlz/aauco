"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FooterLinkType } from "@/app/types/footerlink";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="pt-10">
      <div className="container">
        <div className="lg:flex items-center justify-between border-t border-black/10 py-5">
          <p className="text-black/50 text-base text-center lg:text-start font-normal">
            @2025 AAUCO. All Rights Reserved by{" "}
          </p>
          <div className="flex gap-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="/" target="_blank">
              <p className="text-black/50 text-base font-normal hover:text-primary hover:underline px-5 border-r border-grey/20">
                Privacy policy
              </p>
            </Link>
            <Link href="/" target="_blank">
              <p className="text-black/50 text-base font-normal hover:text-primary hover:underline">
                Terms & conditions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
