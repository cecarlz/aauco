"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseType } from "@/app/types/course";
import CourseSkeleton from "../../Skeleton/Course";

const iconMap = [
  "tabler:certificate",
  "tabler:building",
  "tabler:users-group",
  "tabler:home",
];

const ProgramsMobility = () => {
  const cards = [
    {
      title: "TESDA-Microcredential",
      desc: "Micro-credentialing offers short-term, competency-based certifications to help individuals upskill and reskill.",
    },
    {
      title: "GEB Inc",
      desc: "In today's complex business landscape, GEB helps employers navigate regulatory shifts, accountability, and rising costs.",
    },
    {
      title: "WYLC",
      desc: "The World Youth Leadership Conference empowers young leaders to tackle global challenges and drive transformative change.",
    },
    {
      title: "#ReSpACE",
      desc: "Focused on sustainable building transformation— rearranging or reimagining spaces for a greener future.",
    },
  ];

  return (
    <section id="programs-mobility" className="scroll-mt-12 pb-20">
      <div className="container">
        <h2 className="text-midnight_text mb-10 capitalize text-3xl font-bold text-center">
          Programs & Mobility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 border border-black/10 flex flex-col justify-between h-full transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <Icon
                  icon={iconMap[i]}
                  width={48}
                  height={48}
                  className="text-primary text-5xl mb-2 group-hover:text-secondary"
                />
              </div>
              <h3 className="text-primary text-xl font-semibold mb-4 group-hover:text-secondary">
                {card.title}
              </h3>
              <p className="text-black/80 text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsMobility;
