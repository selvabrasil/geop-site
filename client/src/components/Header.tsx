/*
 * GeOp Header - Tactical Dark theme
 * Dark background, emerald accent, monospace coordinate labels
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "pt", label: "Português", flag: "PT" },
  { code: "es", label: "Español", flag: "ES" },
  { code: "zh", label: "中文", flag: "ZH" },
];

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="relative h-9 w-9 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none">
              <circle cx="20" cy="20" r="18" stroke="oklch(0.72 0.15 158)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="12" stroke="oklch(0.72 0.15 158)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="20" y1="2" x2="20" y2="8" stroke="oklch(0.72 0.15 158)" strokeWidth="1.5" />
              <line x1="20" y1="32" x2="20" y2="38" stroke="oklch(0.72 0.15 158)" strokeWidth="1" />
              <line x1="2" y1="20" x2="8" y2="20" stroke="oklch(0.72 0.15 158)" strokeWidth="1" />
              <line x1="32" y1="20" x2="38" y2="20" stroke="oklch(0.72 0.15 158)" strokeWidth="1" />
              <polygon points="20,6 22,14 20,11 18,14" fill="oklch(0.72 0.15 158)" />
              <circle cx="20" cy="20" r="2.5" fill="oklch(0.72 0.15 158)" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ge<span className="text-primary">Op</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/manual"
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors no-underline ${
              location === "/manual"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {t("nav_manual")}
          </Link>
          <Link
            href="/privacy"
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors no-underline ${
              location === "/privacy"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {t("nav_privacy")}
          </Link>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 gap-1.5 text-muted-foreground hover:text-primary"
              >
                <Globe className="h-4 w-4" />
                <span className="font-mono text-xs">{language.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-3 ${
                    language === lang.code ? "text-primary" : "text-foreground"
                  }`}
                >
                  <span className="font-mono text-xs w-6">{lang.flag}</span>
                  <span>{lang.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-2">
            <Link
              href="/manual"
              className="px-4 py-3 text-sm font-medium rounded-md transition-colors no-underline hover:bg-secondary"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav_manual")}
            </Link>
            <Link
              href="/privacy"
              className="px-4 py-3 text-sm font-medium rounded-md transition-colors no-underline hover:bg-secondary"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav_privacy")}
            </Link>
            <div className="border-t border-border/50 pt-3 mt-1">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileOpen(false);
                    }}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-colors ${
                      language === lang.code
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang.flag} - {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
