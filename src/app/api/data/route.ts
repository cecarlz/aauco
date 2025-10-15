import { CourseType } from "@/app/types/course";
import { FooterLinkType } from "@/app/types/footerlink";
import { MentorType } from "@/app/types/mentor";
import { HeaderType } from "@/app/types/menu";
import { TestimonialType } from "@/app/types/testimonial";
import { NextResponse } from "next/server";

const HeaderData: HeaderType[] = [
  {
    label: "Abeona",
    href: "/abeona",
  },
  {
    label: "Adeona",
    href: "/adeona",
  },
  {
    label: "Unlimited Services",
    href: "/unlimited-services",
  },
  {
    label: "Company Partners",
    href: "/company-partners",
  },
  {
    label: "Competitions & Platforms",
    href: "/competitions-platforms",
  },
  // The Join the movement button will be handled in the component, not as a nav link
];

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: "/images/companies/airbnb.zsvg",
  },
  {
    imgSrc: "/images/companies/fedex.svg",
  },
  {
    imgSrc: "/images/companies/google.svg",
  },
  {
    imgSrc: "/images/companies/hubspot.svg",
  },
  {
    imgSrc: "/images/companies/microsoft.svg",
  },
  {
    imgSrc: "/images/companies/walmart.svg",
  },
  {
    imgSrc: "/images/companies/airbnb.svg",
  },
  {
    imgSrc: "/images/companies/fedex.svg",
  },
];

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    TechGaintsData,
  });
};
