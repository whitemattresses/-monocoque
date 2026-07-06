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
            Company
          </span>
          <input type="text" className={`mt-3 ${inputClasses}`} />
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Email
          </span>
          <input required type="email" className={`mt-3 ${inputClasses}`} />
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            Phone
          </span>
          <input type="tel" className={`mt-3 ${inputClasses}`} />
        </label>
      </div>

      <label className="block">
        <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
          Site Location & Project Brief
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
