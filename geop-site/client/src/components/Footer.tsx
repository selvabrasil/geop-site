/*
 * GeOp Footer - Tactical Dark theme
 * Minimal footer with links and branding
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
              <circle cx="20" cy="20" r="18" stroke="oklch(0.72 0.15 158)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="12" stroke="oklch(0.72 0.15 158)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="20" y1="2" x2="20" y2="8" stroke="oklch(0.72 0.15 158)" strokeWidth="1.5" />
              <line x1="20" y1="32" x2="20" y2="38" stroke="oklch(0.72 0.15 158)" strokeWidth="1" />
              <line x1="2" y1="20" x2="8" y2="20" stroke="oklch(0.72 0.15 158)" strokeWidth="1" />
              <line x1="32" y1="20" x2="38" y2="20" stroke="oklch(0.72 0.15 158)" strokeWidth="1" />
              <polygon points="20,6 22,14 20,11 18,14" fill="oklch(0.72 0.15 158)" />
              <circle cx="20" cy="20" r="2.5" fill="oklch(0.72 0.15 158)" />
            </svg>
            <span className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ge<span className="text-primary">Op</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors no-underline">
              Home
            </Link>
            <Link href="/manual" className="text-muted-foreground hover:text-primary transition-colors no-underline">
              {t("footer_manual")}
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors no-underline">
              {t("footer_privacy")}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GeOp. {t("footer_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
