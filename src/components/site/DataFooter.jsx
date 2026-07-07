import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FooterLogo from "@/components/site/FooterLogo";
import { useTonnesCounter } from "@/hooks/useTonnesCounter";

export default function DataFooter({ onNavigate }) {
  const tonnes = useTonnesCounter();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (href) => {
    if (location.pathname === "/" && onNavigate) {
      onNavigate(href);
    } else {
      navigate(`/${href}`);
    }
  };

  const impactData = [
  { label: "Tonnes recycled", value: tonnes },
  { label: "Glass recovered", value: tonnes * 0.76 },
  { label: "Aluminium recovered", value: tonnes * 0.08 },
  { label: "Silicon recovered", value: tonnes * 0.05 },
  { label: "Copper recovered", value: tonnes * 0.01 },
  { label: "CO₂ saved", value: tonnes * 2.2 }];


  return (
    <footer className="relative bg-obsidian text-titanium px-6 md:px-[4.166%] py-6 md:py-9">
      {/* Impact metrics */}
      <div className="mb-16 md:mb-24">
        <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-titanium/30 mb-8">
          Our impact to date
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {impactData.map((item) =>
          <div key={item.label}>
              <p className="font-heading text-[9px] uppercase tracking-[0.25em] text-titanium/30 mb-2">
                {item.label}
              </p>
              <p className="font-heading text-xl md:text-2xl font-bold text-brand-green tracking-tight">
                {item.value.toLocaleString("en-GB", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} t
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main footer content */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
        {/* Left: contact + brand */}
        <div className="flex flex-col justify-between">
          <div className="font-heading text-[10px] text-titanium/20 tracking-[0.1em] space-y-1">
            <p>Petrská 1033/66, 
110 00 Prague, Czech Republic</p>
            <p>office@rec-pan.cz 
+420 603 598 400</p>
            <p>www.rec-pan.cz</p>
          </div>
          <FooterLogo />
        </div>

        {/* Center: links */}
        <div className="flex gap-12">
          <div className="space-y-3">
            <p className="font-heading text-[9px] uppercase tracking-[0.25em] text-titanium/30 mb-2">Navigation</p>
            {[{ label: "Materials", href: "#materials" }, { label: "Process", href: "#process" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" }].
            map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {e.preventDefault();handleNav(link.href);}}
              className="block font-heading text-xs text-titanium/40 hover:text-brand-green transition-colors">
              
                {link.label}
              </a>
            )}
          </div>
          <div className="space-y-3">
            <p className="font-heading text-[9px] uppercase tracking-[0.25em] text-titanium/30 mb-2">Legal</p>
            {["Privacy Policy", "Terms of Service", "Sustainability Report"].map((label) =>
            <a key={label} href="#hero" onClick={(e) => {e.preventDefault();handleNav("#hero");}} className="block font-heading text-xs text-titanium/40 hover:text-brand-green transition-colors">
                {label}
              </a>
            )}
          </div>
        </div>

        {/* Right: CTA */}
        <div>
          <button
            onClick={() => handleNav("#contact")}
            className="group flex items-center gap-3 bg-brand-green text-white px-8 py-5 font-heading text-xs font-medium uppercase tracking-[0.15em] hover:bg-titanium hover:text-obsidian transition-colors rounded-lg">
            
            Partner with RecPan
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-16 md:mt-24 pt-6 border-t border-titanium/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="font-heading text-[9px] uppercase tracking-[0.2em] text-titanium/15">
          © 2025 RecPan Solar Panel Recycling. All materials recovered.
        </p>
        <p className="font-heading text-[9px] uppercase tracking-[0.2em] text-titanium/15">
          Technology &amp; sustainability for a better future
        </p>
      </div>
    </footer>);

}