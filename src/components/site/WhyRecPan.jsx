import React from "react";
import { motion } from "framer-motion";

const features = [
{
  title: "State-of-the-art technology",
  description: "A combination of the most advanced mechanical technology in the Czech Republic and patented processes ensures exceptionally high purity of recovered materials."
},
{
  title: "High material recovery rate",
  description: "We recover more than 97% of every solar panel's weight in high purity."
},
{
  title: "European expansion",
  description: "We are building recycling capacity across Europe and beyond."
},
{
  title: "Long-term partnerships",
  description: "We work with industrial and waste-management partners."
}];


export default function WhyRecPan() {
  return (
    <section id="why-recpan" className="snap-section relative min-h-0 flex flex-col justify-center py-6 lg:py-9">
      <div className="px-6 md:px-[4.166%]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          
          <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-obsidian/30 mb-3">
            III — Why RecPan
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-obsidian py-20">Why RecPan

          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-obsidian/10 lg:p-10 rounded-lg hover:-translate-y-1 hover:shadow-md transition-all duration-300 px-4 py-6">
            
              <p className="font-heading text-xs text-brand-green mb-6 font-medium">
                0{i + 1}
              </p>
              <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] text-obsidian mb-3">
                {feature.title}
              </h3>
              <p className="font-heading text-sm leading-relaxed text-obsidian/50 font-light">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}