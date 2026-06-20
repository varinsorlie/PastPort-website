"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#features", label: "App" },
  { href: "https://pasthive.no", label: "Plattform", external: true },
  { href: "#team", label: "Teamet" },
] as const;

const CTA_HREF = "https://nettskjema.no/a/566846#/page/1";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-10
          transition-all duration-300 border-b
          ${scrolled
            ? "bg-bg/90 backdrop-blur-md border-gold/20"
            : "bg-transparent border-transparent"
          }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-[1.6rem] font-black tracking-wider text-gold"
        >
          Pastport
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm tracking-[0.06em] uppercase font-medium
                text-[var(--text-muted)] hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-bg text-sm tracking-[0.08em] uppercase font-semibold
              px-5 py-2.5 rounded-sm transition-all duration-200 hover:bg-[#f0d380] hover:-translate-y-px"
          >
            Bli med
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-[var(--text)] cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-bg/[0.98] z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-light tracking-wide text-[var(--text)] hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-gold text-bg font-semibold tracking-[0.08em] uppercase
              px-8 py-3.5 rounded-sm mt-4 hover:bg-[#f0d380] transition-colors duration-200"
          >
            Bli med
          </Link>
        </div>
      )}
    </>
  );
}