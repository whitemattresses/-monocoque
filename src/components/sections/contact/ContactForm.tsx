"use client";

import { useState } from "react";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/40 focus:border-charcoal focus:outline-none transition-colors";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const { form } = getDictionary(locale).contactPage;

  if (submitted) {
    return (
      <div className="border border-line p-10">
        <p className="font-serif text-2xl">{form.thankYouTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
          {form.thankYouBody}
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
            {form.fullName}
          </span>
          <input required type="text" className={`mt-3 ${inputClasses}`} />
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            {form.email}
          </span>
          <input required type="email" className={`mt-3 ${inputClasses}`} />
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            {form.projectType.label}
          </span>
          <select required defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              {form.projectType.placeholder}
            </option>
            {form.projectType.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            {form.numberOfUnits.label}
          </span>
          <select defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              {form.numberOfUnits.placeholder}
            </option>
            {form.numberOfUnits.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            {form.siteStatus.label}
          </span>
          <select defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              {form.siteStatus.placeholder}
            </option>
            {form.siteStatus.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
            {form.targetTimeline.label}
          </span>
          <select defaultValue="" className={`mt-3 ${inputClasses}`}>
            <option value="" disabled>
              {form.targetTimeline.placeholder}
            </option>
            {form.targetTimeline.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="tracking-wide-label text-[0.68rem] uppercase text-charcoal/50">
          {form.message}
        </span>
        <textarea
          rows={5}
          className={`mt-3 resize-none ${inputClasses}`}
        />
      </label>

      <button type="submit" className="btn-primary">
        {form.submit}
      </button>
    </form>
  );
}
