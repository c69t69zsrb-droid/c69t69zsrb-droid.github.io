import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, AlertCircle, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const orgTypes = ["Solar farm operator", "Installation company", "Manufacturer", "Government / Municipality", "Other"];
const panelTypes = ["Monocrystalline", "Polycrystalline", "Thin-film", "Mixed / Unknown"];

const initialFormData = { name: "", company: "", email: "", phone: "", volume: "", country: "", notes: "" };

export default function LogisticsNexus() {
  const [step, setStep] = useState(1);
  const [orgType, setOrgType] = useState("");
  const [panelType, setPanelType] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !isValidEmail(formData.email)) {
      return;
    }
    setStatus("sending");
    const submittedAt = new Date().toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" });
    const body = [
      "New website enquiry",
      "",
      `Contact type: ${orgType}`,
      `Solar panel type: ${panelType}`,
      `Contact name: ${formData.name}`,
      `Company: ${formData.company || "—"}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "—"}`,
      `Estimated volume: ${formData.volume || "—"}`,
      `Country: ${formData.country || "—"}`,
      `Message: ${formData.notes || "—"}`,
      "",
      `Submitted: ${submittedAt}`
    ].join("\n");
    try {
      const res = await base44.functions.invoke("sendEnquiryEmail", {
        orgType,
        panelType,
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        volume: formData.volume,
        country: formData.country,
        notes: formData.notes,
      });
      if (res?.data?.success !== true) {
        throw new Error(res?.data?.error || "Email delivery failed");
      }
      setFormData(initialFormData);
      setOrgType("");
      setPanelType("");
      setStep(1);
      setStatus("success");
    } catch (e) {
      console.error("Enquiry submission failed:", e);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="snap-section relative min-h-0 flex items-center justify-center px-6 md:px-[4.166%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-brand-green" />
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-obsidian mb-4">
            Enquiry submitted
          </h2>
          <p className="font-heading text-sm text-obsidian/50 leading-relaxed font-light">
            Thank you for your enquiry. We have received your message and will be in touch shortly.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="snap-section relative min-h-0 flex flex-col justify-center px-6 md:px-[4.166%] py-6">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-obsidian/30 mb-3">
            X — Contact
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-obsidian mb-12">
            Partner with RecPan
          </h2>
        </motion.div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs transition-colors duration-300 ${
                step >= s ? "bg-brand-green text-white" : "bg-obsidian/5 text-obsidian/30"
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-[1px] transition-colors duration-300 ${step > s ? "bg-brand-green" : "bg-obsidian/10"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1: Org Type */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-heading text-xs uppercase tracking-[0.15em] text-obsidian/40 mb-6">
              I am a —
            </p>
            <div className="space-y-3">
              {orgTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => { setOrgType(type); setStep(2); }}
                  className={`w-full text-left px-6 py-5 border-b border-obsidian/10 font-heading text-lg md:text-xl font-medium tracking-[-0.01em] hover:text-brand-green hover:border-brand-green transition-all duration-300 ${
                    orgType === type ? "text-brand-green border-brand-green" : "text-obsidian"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Panel Type */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-heading text-xs uppercase tracking-[0.15em] text-obsidian/40 mb-6">
              Panel type —
            </p>
            <div className="space-y-3">
              {panelTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => { setPanelType(type); setStep(3); }}
                  className={`w-full text-left px-6 py-5 border-b border-obsidian/10 font-heading text-lg md:text-xl font-medium tracking-[-0.01em] hover:text-brand-green hover:border-brand-green transition-all duration-300 ${
                    panelType === type ? "text-brand-green border-brand-green" : "text-obsidian"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="font-heading text-[10px] uppercase tracking-[0.15em] text-obsidian/30 mt-6 hover:text-obsidian transition-colors">
              ← Back
            </button>
          </motion.div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex gap-2 font-heading text-[10px] uppercase tracking-[0.15em] text-obsidian/30 mb-8">
              <span className="text-brand-green">{orgType}</span>
              <span>→</span>
              <span className="text-brand-green">{panelType}</span>
            </div>

            <div className="space-y-8">
              {[
                { key: "name", label: "Contact name", placeholder: "Full name", type: "text" },
                { key: "company", label: "Company", placeholder: "Company name", type: "text" },
                { key: "email", label: "Email", placeholder: "name@organisation.com", type: "email" },
                { key: "phone", label: "Phone", placeholder: "+420 ...", type: "tel" },
                { key: "volume", label: "Estimated panel volume", placeholder: "e.g. 500 panels", type: "text" },
                { key: "country", label: "Country", placeholder: "Czech Republic", type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="font-heading text-[10px] uppercase tracking-[0.2em] text-obsidian/30 block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full bg-transparent border-b border-obsidian/20 focus:border-brand-green outline-none pb-3 font-heading text-lg font-medium text-obsidian placeholder:text-obsidian/15 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="font-heading text-[10px] uppercase tracking-[0.2em] text-obsidian/30 block mb-2">
                  Additional notes
                  </label>
                  <textarea
                   placeholder="Tell us about your recycling needs..."
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-transparent border-b border-obsidian/20 focus:border-brand-green outline-none pb-3 font-heading text-lg font-medium text-obsidian placeholder:text-obsidian/15 transition-colors resize-none"
                />
              </div>
            </div>

            {status === "error" && (
              <div className="flex items-start gap-3 mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                <p className="font-heading text-sm text-red-700 leading-relaxed">
                  Something went wrong while submitting your enquiry. Please try again or contact us directly at office@rec-pan.cz.
                </p>
              </div>
            )}
            <div className="flex items-center gap-6 mt-10">
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !isValidEmail(formData.email) || status === "sending"}
                className="group flex items-center gap-3 bg-brand-green text-white px-8 py-4 font-heading text-xs font-medium uppercase tracking-[0.15em] hover:bg-obsidian transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-lg"
              >
                {status === "sending" ? (
                  <>
                    Sending...
                    <Loader2 size={14} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Submit enquiry
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <button onClick={() => setStep(2)} className="font-heading text-[10px] uppercase tracking-[0.15em] text-obsidian/30 hover:text-obsidian transition-colors">
                ← Back
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}