"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FooterLinkType } from "@/app/types/footerlink";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a message.",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-12 pb-8">
      <div className="container">
        {/* Contact Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 lg:items-start">
          {/* Left Side - Get In Touch */}
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Get In Touch
              </h2>
              <p className="text-grey text-sm">
                Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Contact Cards - Stacked */}
            <div className="space-y-4 flex-grow">
              {/* Email Card */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:email-outline"
                      className="text-primary"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">
                      Email Us
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="mailto:jenni.montero@aauco-gui.com"
                        className="text-grey hover:text-primary transition-colors block text-xs"
                      >
                        jenni.montero@aauco-gui.com
                      </Link>
                      <Link
                        href="mailto:jennifermontero.1120@gmail.com"
                        className="text-grey hover:text-primary transition-colors block text-xs"
                      >
                        jennifermontero.1120@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:whatsapp"
                      className="text-green-600"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">
                      WhatsApp
                    </h3>
                    <Link
                      href="https://wa.me/639178875655"
                      className="text-grey hover:text-primary transition-colors text-xs block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      0917 887 5655
                    </Link>
                    <p className="text-xs text-grey mt-1">Chat with us</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:phone-outline"
                      className="text-primary"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">
                      Call Us
                    </h3>
                    <Link
                      href="tel:+639684727593"
                      className="text-grey hover:text-primary transition-colors text-xs block"
                    >
                      +63 968 4727 593
                    </Link>
                    <p className="text-xs text-grey mt-1">
                      Mon - Fri, 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex-grow flex flex-col">
              <div className="mb-5">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Send Us a Message
                </h3>
                <p className="text-grey text-xs">
                  Have a question or inquiry? Fill out the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-primary mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:email-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-grey"
                      width={18}
                      height={18}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-xs"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-primary mb-1.5"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:message-text-outline"
                      className="absolute left-3 top-2.5 text-grey"
                      width={18}
                      height={18}
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      required
                      rows={5}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-xs resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-2.5 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon
                          icon="mdi:loading"
                          className="animate-spin"
                          width={18}
                          height={18}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:send" width={18} height={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-lg text-xs ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        icon={
                          submitStatus.type === "success"
                            ? "mdi:check-circle"
                            : "mdi:alert-circle"
                        }
                        width={16}
                        height={16}
                      />
                      <span>{submitStatus.message}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Dynamic Footer Links */}
        {footerlink && footerlink.length > 0 && (
          <div className="border-t border-gray-200 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerlink.map((section, index) => (
                <div key={index}>
                  <h4 className="text-base font-semibold text-primary mb-4">
                    {section.section}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-grey hover:text-primary transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Footer */}
        <div className="lg:flex items-center justify-between border-t border-gray-200 pt-6">
          <p className="text-grey text-sm text-center lg:text-start font-normal mb-4 lg:mb-0">
            © 2025 AAUCO. All Rights Reserved.
          </p>
          <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
            <Link href="/privacy-policy" target="_blank">
              <p className="text-grey text-sm font-normal hover:text-primary hover:underline transition-colors">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-conditions" target="_blank">
              <p className="text-grey text-sm font-normal hover:text-primary hover:underline transition-colors">
                Terms & Conditions
              </p>
            </Link>
            <Link href="/cookie-policy" target="_blank">
              <p className="text-grey text-sm font-normal hover:text-primary hover:underline transition-colors">
                Cookie Policy
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
