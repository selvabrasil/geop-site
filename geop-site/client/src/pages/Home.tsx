/*
 * GeOp Home Page - Tactical Dark theme
 * Hero with app screenshot, features, how it works, CTA
 * Emerald green (#10b981) accent on dark background
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Globe,
  Map,
  Route,
  Download,
  Navigation,
  FileText,
  Signal,
} from "lucide-react";

const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: t("feature_1_title"),
      desc: t("feature_1_desc"),
    },
    {
      icon: Map,
      title: t("feature_2_title"),
      desc: t("feature_2_desc"),
    },
    {
      icon: Route,
      title: t("feature_3_title"),
      desc: t("feature_3_desc"),
    },
    {
      icon: FileText,
      title: t("feature_4_title"),
      desc: t("feature_4_desc"),
    },
  ];

  const steps = [
    {
      step: t("how_1_step"),
      title: t("how_1_title"),
      desc: t("how_1_desc"),
      icon: Navigation,
    },
    {
      step: t("how_2_step"),
      title: t("how_2_title"),
      desc: t("how_2_desc"),
      icon: Route,
    },
    {
      step: t("how_3_step"),
      title: t("how_3_title"),
      desc: t("how_3_desc"),
      icon: Signal,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 49px,
                oklch(0.72 0.15 158) 49px,
                oklch(0.72 0.15 158) 50px
              ), repeating-linear-gradient(
                90deg,
                transparent,
                transparent 49px,
                oklch(0.72 0.15 158) 49px,
                oklch(0.72 0.15 158) 50px
              )`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glowing orb */}
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />

        <div className="container relative">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono text-primary">{t("hero_tagline")}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {t("hero_title_1")}
                <br />
                <span className="text-primary">{t("hero_title_2")}</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                {t("hero_description")}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/manual">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all active:scale-[0.97] shadow-lg shadow-primary/20">
                    <Download className="h-4 w-4" />
                    {t("hero_cta")}
                  </button>
                </Link>
                <Link href="/manual">
                  <button className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-all active:scale-[0.97]">
                    {t("nav_manual")}
                  </button>
                </Link>
              </div>

              {/* Coordinate decoration */}
              <div className="mt-10 flex items-center gap-3 text-muted-foreground/40">
                <span className="font-mono text-xs">LAT 0.0000°</span>
                <span className="font-mono text-xs">|</span>
                <span className="font-mono text-xs">LNG 0.0000°</span>
                <span className="font-mono text-xs">|</span>
                <span className="font-mono text-xs">ALT 0m</span>
              </div>
            </motion.div>

            {/* App Screenshot */}
            <motion.div variants={fadeUp} className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                {/* Phone frame */}
                <div className="relative bg-card rounded-3xl border border-border/50 p-2 shadow-2xl">
                  <img
                    src="/manus-storage/WhatsAppImage2026-07-20at15.02.07_44029819.jpeg"
                    alt="GeOp App Interface"
                    className="w-full max-w-[280px] rounded-2xl"
                  />
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 md:py-28 border-t border-border/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-primary/60 tracking-widest">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              {t("features_title")}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t("features_subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== APP SHOWCASE ===== */}
      <section className="py-20 md:py-28 border-t border-border/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs text-primary/60 tracking-widest">INTERFACE</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                {t("showcase_title")}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("showcase_description")}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { label: "Standard OSM", desc: "Online map browsing" },
                  { label: "Import GeoPDF", desc: "Offline map support" },
                  { label: "Track Recording", desc: "GPS path creation" },
                  { label: "Data Export", desc: "KML formats" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-mono text-sm text-foreground">{item.label}</span>
                    <span className="text-xs text-muted-foreground">— {item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-xl" />
                <img
                  src="/manus-storage/geop-offline-map_f27e7455.png"
                  alt="GeOp Offline Map Feature"
                  className="relative rounded-xl border border-border/30 w-full max-w-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 border-t border-border/30 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-primary/60 tracking-widest">WORKFLOW</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              {t("how_title")}
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-x-8" />
                )}
                <div className="p-6">
                  <div className="font-mono text-5xl font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 md:py-28 border-t border-border/30">
        <div className="container">
          <motion.div
            className="relative rounded-xl border border-border/50 bg-card p-12 md:p-16 text-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 49px,
                  oklch(0.72 0.15 158) 49px,
                  oklch(0.72 0.15 158) 50px
                )`,
              }}
            />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("cta_title")}
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                {t("cta_description")}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all active:scale-[0.97] shadow-lg shadow-primary/20 text-lg">
                  <Download className="h-5 w-5" />
                  {t("cta_button")}
                </button>
              </div>

              {/* Decorative coordinates */}
              <div className="mt-8 flex justify-center gap-6 text-muted-foreground/30">
                <span className="font-mono text-xs">51.5074°N</span>
                <span className="font-mono text-xs">2.3522°E</span>
                <span className="font-mono text-xs">-33.8688°S</span>
                <span className="font-mono text-xs">151.2093°E</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
