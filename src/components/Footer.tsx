import Link from "next/link";
import { Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--accent)] text-[var(--text-dark)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-2">PastPort</h3>
            <p className="text-[var(--text-dark)]/70">
              Utforsk fortiden, én historie om gangen.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <Link
              href="mailto:support@pasthive.no"
              className="inline-flex items-center gap-2 text-[var(--burgundy)] hover:text-[var(--text-dark)] transition-colors"
            >
              <Mail className="w-5 h-5" />
              support@pasthive.no
            </Link>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-end gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-[var(--burgundy)]/10 flex items-center justify-center hover:bg-[var(--burgundy)]/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-[var(--burgundy)]/10 flex items-center justify-center hover:bg-[var(--burgundy)]/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--burgundy)]/20 mt-8 pt-8 text-center">
          <p className="text-sm text-[var(--text-dark)]/60">
            &copy; {currentYear} PastPort. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
