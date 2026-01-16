import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--burgundy)] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Pastport</h3>
            <p className="text-white/70">
              Utforsk fortiden, én historie om gangen.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <Link
              href="mailto:support@pasthive.no"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              support@pasthive.no
            </Link>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-end gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            &copy; {currentYear} Pastport. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
