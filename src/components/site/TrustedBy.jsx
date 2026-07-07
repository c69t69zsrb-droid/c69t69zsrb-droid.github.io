import React from "react";
import { motion } from "framer-motion";

const partners = [
"PV CYCLE",
"WEEELABEX",
"CTU",
"Industrial partners",
"Technology partners"];


export default function TrustedBy() {
  return (
    <section className="relative py-6 lg:py-8 border-t border-obsidian/5">
      <div className="px-6 md:px-[4.166%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          
          <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-obsidian/30 mb-3">
            II — Trusted by
          </p>
          <p className="font-heading text-sm text-obsidian/40 max-w-2xl mx-auto font-light leading-relaxed">
            We are building the future of photovoltaic panel recycling alongside industry leaders, research institutions and strategic partners.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          
          {partners.map((partner) =>
          <div
            key={partner}
            className="font-heading text-base md:text-lg font-semibold tracking-[-0.01em] text-obsidian/20 hover:text-obsidian/50 transition-colors duration-300 cursor-default hidden">
            
              {partner}
            </div>
          )}
        </motion.div>
      </div>
    </section>);

}