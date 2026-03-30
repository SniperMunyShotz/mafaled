import Image from "next/image";
import { COMPANY, NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-deeper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/mafaled-logo.png"
              alt={COMPANY.fullName}
              width={140}
              height={44}
              className="h-9 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional drone-powered cleaning for buildings, windows, solar
              panels, and industrial structures. Safer. Faster. Smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^\d]/g, "")}`}
                  className="hover:text-teal-accent transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-teal-accent transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.city}</li>
              <li className="pt-1">{CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-500">{COMPANY.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
