import {
  ArrowUpRight,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function NewFooter() {
  const legalLinks = [
    { name: "Term & Condition", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Legal Notice", href: "#" },
    { name: "Accessibility", href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Car Type", href: "#" },
    { name: "Service", href: "#" },
  ];

  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative bg-black text-white py-16 px-4 lg:px-12 overflow-hidden rounded-t-[3rem]">
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-8 h-8 text-gray-800">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-40 right-32 w-6 h-6 text-gray-800">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 text-gray-800">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-1/3 w-7 h-7 text-gray-800">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-20 w-5 h-5 text-gray-800">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              <span className="text-orange-600">NOVA</span>
              <span className="text-white">RIDE</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Experience the ease and convenience of renting a car with
              Novaride.
            </p>
          </div>

          {/* Legal Policy Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Legal Policy
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Subscribe To The Newsletters
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email..."
                className="flex-1 bg-gray-800 text-white placeholder-gray-500 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 text-sm"
              />
              <button
                type="submit"
                className="w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2026 Novaride. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
