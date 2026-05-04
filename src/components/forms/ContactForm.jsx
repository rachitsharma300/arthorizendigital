"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-brand-gray dark:text-brand-gray-light">Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full bg-transparent border-b border-brand-gray-light/30 pb-3 focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-brand-gray dark:text-brand-gray-light">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full bg-transparent border-b border-brand-gray-light/30 pb-3 focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm text-brand-gray dark:text-brand-gray-light">Phone</label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-transparent border-b border-brand-gray-light/30 pb-3 focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm text-brand-gray dark:text-brand-gray-light">Service</label>
          <select
            id="service"
            required
            defaultValue=""
            className="w-full bg-transparent border-b border-brand-gray-light/30 pb-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none"
          >
            <option value="" disabled className="dark:bg-brand-black text-brand-gray-light">Select a service</option>
            <option value="architecture" className="dark:bg-brand-black text-brand-black dark:text-brand-white">Architectural Design</option>
            <option value="interior" className="dark:bg-brand-black text-brand-black dark:text-brand-white">Interior Architecture</option>
            <option value="styling" className="dark:bg-brand-black text-brand-black dark:text-brand-white">Interior Styling</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-brand-gray dark:text-brand-gray-light">Message</label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full bg-transparent border-b border-brand-gray-light/30 pb-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"
        />
      </div>
      <Button type="submit" className="w-full md:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
      </Button>
    </form>
  );
}
