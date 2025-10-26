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
        {/* Contact Section */}
        <div className="mb-10">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Get In Touch
            </h2>
            <p className="text-grey text-sm">
              Reach out to us through any of the following channels.
            </p>
          </div>

          {/* Contact Cards - Single Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <p className="text-xs text-grey mt-1">Mon - Fri, 9am - 6pm</p>
                </div>
              </div>
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
