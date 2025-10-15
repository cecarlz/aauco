export type SubmenuItem = {
  label: string;
  href: string;
};

export type HeaderType = {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};

export const menuItems: HeaderType[] = [
  {
    label: "About",
    href: "#",
    submenu: [
      { label: "About", href: "/about" },
      { label: "Cultural Diplomacy", href: "/cultural-diplomacy" },
      { label: "Youth Mobility", href: "/youth-mobility" },
      { label: "Transnational Policy", href: "/transnational-policy" },
      { label: "Global Connectivities", href: "/global-connectivities" },
    ],
  },
  // ...other menu items
];
