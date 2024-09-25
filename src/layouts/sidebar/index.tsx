"use client";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  AboutIcon,
  ServiceIcon,
  PortfolioIcon,
  ExperienceIcon,
  ContactIcon,
} from "@/src/assets/icon/icon-sidebar";
import Link from "next/link";

const SIDEBAR_LINK = [
  {
    name: "Home",
    link: "#home",
    icon: <HomeIcon />,
  },
  {
    name: "About me",
    link: "#about",
    icon: <AboutIcon />,
  },
  {
    name: "Service",
    link: "#service",
    icon: <ServiceIcon />,
  },
  {
    name: "Portfolio",
    link: "#portfolio",
    icon: <PortfolioIcon />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <ExperienceIcon />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <ContactIcon />,
  },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <aside
      className={`fixed z-50 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:block`}
    >
      <div className="h-screen w-24 bg-white shadow-2xl">
        <div className="flex flex-col">
          {/* icon */}
          <div className="h-11 bg-teal-600 flex items-center justify-center">
            <h1 className="text-center text-white font-semibold">dicky.</h1>
          </div>

          {/* menu */}
          <div className="flex flex-col items-center text-black uppercase font-body w-full h-20">
            {SIDEBAR_LINK.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                className={`nav-link border-b border-zinc-200 py-3 w-full text-center hover:text-teal-600 ${
                  activeLink === link.link ? "text-teal-600" : ""
                }`}
              >
                <div className="flex justify-center items-center mb-1">
                  {link.icon}
                </div>
                <span className="text-xs">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
