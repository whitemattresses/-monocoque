"use client";

import { useState } from "react";

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/40 focus:border-charcoal focus:outline-none transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-line p-10">
        <p className="font-serif text-2xl">Thank you.</p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
          Your enquiry has been received. A member of our team will respond
          within five business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Full Name
          </span>
          <input required type="text" className={`mt-3 ${inputClasses}`} />
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Email
          </span>
          <input required type="email" className={`mt-3 ${inputClasses}`} />
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Project Type
          </span>
          <select required defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              Select project type
            </option>
            <option>Boutique Hotel</option>
            <option>Resort Expansion</option>
            <option>Luxury Villa Development</option>
            <option>Eco Retreat</option>
            <option>Private Residence</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Number of Units
          </span>
          <select defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              Select a range
            </option>
            <option>1–5</option>
            <option>5–20</option>
            <option>20+</option>
          </select>
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Site Status
          </span>
          <select defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              Select site status
            </option>
            <option>Land acquired</option>
            <option>Under evaluation</option>
            <option>Existing hospitality asset</option>
            <option>Planning phase</option>
          </select>
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Target Timeline
          </span>
          <select defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              Select a timeline
            </option>
            <option>Immediate</option>
            <option>6–12 months</option>
            <option>12–24 months</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
          Message (Optional)
        </span>
        <textarea
          rows={5}
          className={`mt-3 resize-none ${inputClasses}`}
        />
      </label>

      <button type="submit" className="btn-primary">
        Submit Enquiry
      </button>
    </form>
  );
}
