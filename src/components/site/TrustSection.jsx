import React from "react";
import { motion } from "framer-motion";
import { Factory, Cpu, Recycle, Globe, Handshake } from "lucide-react";

const items = [
{
  title: "Industrial scale",
  description: "Processing capacity for high-volume photovoltaic waste streams.",
  icon: Factory
},
{
  title: "Advanced technology",
  description: "Proprietary mechanical separation processes.",
  icon: Cpu
},
{
  title: "Circular materials",
  description: "Recovered fractions returned to industrial supply chains.",
  icon: Recycle
},
{
  title: "Expansion",
  description: "Planned regional recycling centres across and beyond Europe.",
  icon: Globe
},
{
  title: "Partnership",
  description: "Collaboration with waste owners, collective schemes and industry.",
  icon: Handshake
}];


export default function TrustSection() {
  return (
    <section id="trust" className="snap-section relative min-h-0 flex flex-col justify-center lg:py-9 border-t border-obsidian/10 py-4">
      <div className="px-6 md:px-[4.166%]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          
          <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-obsidian/30 mb-4">VII — BUILT FOR INDUSTRY

          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-obsidian py-16">Built for industry

          </h2>
        </motion.div>

        {/* Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="hover:-translate-y-1 transition-all duration-300">
                
                <Icon size={28} strokeWidth={1.25} className="text-obsidian/60 mb-5" />
                <h3 className="font-heading text-sm font-semibold text-obsidian mb-2">
                  {item.title}
                </h3>
                <p className="font-heading text-xs text-obsidian/40 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}