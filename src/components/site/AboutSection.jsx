import React from "react";
import { motion } from "framer-motion";

const credentials = [
{ label: "Annual capacity", value: "7,000 t" },
{ label: "Material recovery", value: "< 97%" },
{ label: "Headquartered in", value: "Czechia" },
{ label: "Expansion", value: "3 countries" }];


const pillars = [
{
  title: "Who we are",
  description: "We are a Czech technology and recycling company closing the materials loop — from recovering critical raw materials to manufacturing our own products."
},
{
  title: "Why we exist",
  description: "End-of-life photovoltaic panels are not waste — they are a new source of strategic raw materials. Our mission is to return these materials to industry and close their life cycle."
},
{
  title: "What sets us apart",
  description: "Proprietary recycling technology that maximises material recovery from every fraction, combined with in-house manufacturing that closes the loop under one roof."
}];


const values = [
{ label: "Innovation", desc: "Proprietary recycling technology.\n\nContinuous technological improvement." },
{ label: "Transparency", desc: "Full material traceability" },
{ label: "Partnership", desc: "Long-term industrial collaboration" },
{ label: "Efficiency & sustainability", desc: "Environmentally and economically viable.\nMaximised material recovery." }];


export default function AboutSection() {
  return (
    <section id="about" className="snap-section relative min-h-0 flex flex-col justify-center py-6 lg:py-9">
      <div className="px-6 md:px-[4.166%]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16">
          
          <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-obsidian/30 mb-3">
            I — About
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-obsidian max-w-2xl py-20">A circular approach to solar panel recycling


          </h2>
        </motion.div>

        {/* Credentials bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-obsidian/10">
          
          {credentials.map((item) =>
          <div key={item.label}>
              <p className="font-heading text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-brand-green mb-1">
                {item.value}
              </p>
              <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-obsidian/40">
                {item.label}
              </p>
            </div>
          )}
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-20">
          {pillars.map((pillar, i) =>
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>
            
              <p className="font-heading text-xs text-brand-green mb-3 font-medium">
                0{i + 1}
              </p>
              <h3 className="font-heading text-lg md:text-xl font-semibold tracking-[-0.01em] text-obsidian mb-3">
                {pillar.title}
              </h3>
              <p className="font-heading text-sm leading-relaxed text-obsidian/50 font-light">
                {pillar.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Values */}
        















        
      </div>
    </section>);

}