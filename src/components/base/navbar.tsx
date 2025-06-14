// src/components/base/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScroll = useRef(0);

  // Shadow & blur after 20px
  useEffect(() => {
    return scrollY.onChange((y) => setScrolled(y > 20));
  }, [scrollY]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    return scrollY.onChange((y) => {
      if (y > prevScroll.current && y > 100) {
        // scrolling down & past 100px → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }
      prevScroll.current = y;
    });
  }, [scrollY]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            className={`
              fixed top-0 w-full z-50
              ${scrolled
                ? "backdrop-blur-sm bg-white/30 shadow-md"
                : "bg-transparent"
              }
            `}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className={`text-2xl font-bold ${scrolled ? "text-gray-800" : "text-white"
                  }`}
              >
                Carentara
              </Link>

              {/* Desktop Links */}
              <ul className="hidden md:flex items-center space-x-12">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
                        hover:underline transition-colors
                        ${scrolled ? "text-gray-800" : "text-white"}
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`
                        hover:text-neutral-800 transition-colors
                        ${scrolled ? "text-gray-800" : "text-white"}
                      `}
                >
                  <Link href={"/login"}>
                    Log In
                  </Link>
                </Button>

                <div
                  className={`
                        hover:text-accent transition-colors
                        ${scrolled ? "text-gray-800" : "text-white"}
                      `}
                >
                  {" "}
                  |{" "}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className={`
                        hover:text-neutral-800 transition-colors
                        ${scrolled ? "text-gray-800" : "text-white"}
                      `}
                >
                  <Link href={"/register"}>
                    Sign Up
                  </Link>
                </Button>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`
                  md:hidden p-2 rounded
                  ${scrolled ? "text-gray-800" : "text-white"}
                  hover:bg-white/20 transition
                `}
              >
                <MenuIcon size={24} />
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 150, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="self-end p-2 rounded hover:bg-gray-100"
              >
                <X size={24} />
              </button>
              <ul className="mt-4 space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-gray-800"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex space-x-2 pt-6 border-t">
                <Button variant="outline" className="flex-1">
                  Log In
                </Button>
                <Button className="flex-1">Sign Up</Button>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
