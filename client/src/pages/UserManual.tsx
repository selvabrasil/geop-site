/*
 * GeOp User Manual Page - Tactical Dark theme
 * Clean reading layout with emerald accents
 */
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function UserManual() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("manual_sec1_title"),
      content: t("manual_sec1_content"),
    },
    {
      title: t("manual_sec2_title"),
      content: t("manual_sec2_content"),
    },
    {
      title: t("manual_sec3_title"),
      content: t("manual_sec3_content"),
    },
    {
      title: t("manual_sec4_title"),
      content: t("manual_sec4_content"),
    },
    {
      title: t("manual_sec5_title"),
      content: t("manual_sec5_content"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors no-underline mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("manual_back")}
          </Link>

          {/* Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
              <span className="font-mono text-xs text-primary/60">GUIDE</span>
              <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("manual_title")}
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {t("manual_intro")}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
              >
                <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-primary/40" />
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* App Screenshot */}
          <div className="mt-16 rounded-lg overflow-hidden border border-border/50">
            <img
              src="/manus-storage/WhatsAppImage2026-07-20at15.02.07_44029819.jpeg"
              alt="GeOp App Interface"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GeOp. {t("footer_rights")}</p>
          <div className="flex items-center gap-4">
            <Link href="/manual" className="hover:text-primary transition-colors no-underline">
              {t("footer_manual")}
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors no-underline">
              {t("footer_privacy")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
