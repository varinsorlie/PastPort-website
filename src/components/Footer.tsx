import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-gold/20 text-[var(--text)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Logo & tagline */}
          <div>
            <h3 className="font-display font-black text-2xl text-gold mb-2">
              Pastport
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Utforsk fortiden, én historie om gangen.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <Link
              href="mailto:support@pasthive.no"
              className="inline-flex items-center gap-2 text-gold/80 hover:text-gold transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              support@pasthive.no
            </Link>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-end gap-3">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-sm border border-gold/20 flex items-center justify-center
                text-[var(--text-muted)] hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="https://linkedin.com/company/pastport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-sm border border-gold/20 flex items-center justify-center
                text-[var(--text-muted)] hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-gold/10 mt-8 pt-8 text-center">
          <p className="text-xs text-[var(--text-dim)]">
            &copy; {currentYear} Pastport. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}