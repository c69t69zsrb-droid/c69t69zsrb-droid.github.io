import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@/components/site/Logo";

const navLinks = [
{ label: "Home", href: "#hero", tint: "bg-brand-green/[0.03]" },
{ label: "About", href: "#about", tint: "bg-brand-green/[0.03]" },
{ label: "Why RecPan", href: "#why-recpan", tint: "bg-brand-green/[0.05]" },
{ label: "Expansion", href: "#expansion", tint: "bg-brand-green/[0.05]" },
{ label: "Recovered Materials", href: "#materials", tint: "bg-brand-green/[0.05]" },
{ label: "Process", href: "#process", tint: "bg-brand-green/[0.05]" },
{ label: "News", href: "/news", tint: "bg-brand-green/[0.03]", isRoute: true },
{ label: "Contact", href: "#contact", tint: "bg-brand-dark/[0.03]" }];


export default function Navigation({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [hoveredTint, setHoveredTint] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (href) => {
    setOpen(false);
    if (location.pathname === "/" && onNavigate) {
      onNavigate(href);
    } else {
      navigate(`/${href}`);
    }
  };

  const handleRouteClick = (path) => {
    setOpen(false);
    navigate(path);
  };

  const handleLogoClick = () => {
    setOpen(false);
    if (location.pathname === "/" && onNavigate) {
      onNavigate("#hero");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between md:px-[4.166%] px-5">
        <a
          href="#hero"
          onClick={(e) => {e.preventDefault();handleLogoClick();}}>
          
          <Logo size="sm" />
        </a>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-xs font-heading font-medium uppercase tracking-[0.15em] text-obsidian/60 hover:text-brand-green transition-colors">
          
          Menu <Menu size={16} />
        </button>
      </header>

      {/* Drawer */}
      <AnimatePresence>
        {open &&
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/10"
            onClick={() => setOpen(false)} />
          
            {hoveredTint &&
          <div className={`fixed inset-0 z-50 pointer-events-none transition-colors duration-500 ${hoveredTint}`} />
          }
            <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] md:w-[30%] bg-titanium z-50 flex flex-col justify-between p-8 md:p-12 border-l border-obsidian/10 overflow-y-auto">
            
              <div className="flex items-center justify-between">
                <Logo size="sm" />
                <button
                onClick={() => setOpen(false)}
                className="text-obsidian/40 hover:text-obsidian transition-colors">
                
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-4 md:gap-5">
                {navLinks.map((link) =>
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.isRoute) {
                    handleRouteClick(link.href);
                  } else {
                    handleSectionClick(link.href);
                  }
                }}
                onMouseEnter={() => setHoveredTint(link.tint)}
                onMouseLeave={() => setHoveredTint(null)}
                className="font-heading text-xl md:text-2xl font-medium tracking-[-0.02em] text-obsidian hover:text-brand-green transition-colors duration-300">
                
                    {link.label}
                  </a>
              )}
              </nav>

              <div className="font-heading text-[10px] text-obsidian/30 uppercase tracking-[0.2em]">
                © 2025 RecPan Solar Panel Recycling
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}