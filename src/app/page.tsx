"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Collection", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="La Vie en Rose"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "gradient-bars" }}
      title="La Vie en Rose"
      description="Elegant lifestyle essentials curated for your unique moments. Discover our collection of hand-picked artisan pieces designed for refined living."
      kpis={[
        { value: "12+", label: "Years Curating" },
        { value: "500+", label: "Unique Pieces" },
        { value: "10k+", label: "Happy Clients" },
      ]}
      enableKpiAnimation={true}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg"
      imageAlt="La Vie en Rose signature collection"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "Life in " },
        { type: "text", content: "Bloom" },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { icon: Sparkles, title: "Artisan Quality", description: "Handcrafted excellence in every detail." },
        { icon: Award, title: "Timeless Design", description: "Pieces built to last through trends." },
        { icon: Shield, title: "Ethical Living", description: "Sourced with care for our planet." },
      ]}
      title="Core Values"
      description="Our commitment to beauty and ethics."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Signature Vase", price: "$85", variant: "Decor", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg" },
        { id: "p2", name: "Artisan Throw", price: "$180", variant: "Home", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg" },
      ]}
      title="Curated Collections"
      description="Exclusive selections."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      tag="Our Impact"
      useInvertedBackground={false}
      title="Growth"
      metrics={[
        { id: "m1", value: "15+", description: "Cities Serviced" },
        { id: "m2", value: "98%", description: "Satisfaction" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[{ id: "t1", name: "Isabelle Laurent", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg" }]}
      cardTitle="Connoisseur Feedback"
      cardTag="Loved by many"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Stay connected with our latest artisan releases."
      buttons={[{ text: "Join Circle", href: "#contact" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="La Vie en Rose"
      columns={[{ title: "Links", items: [{ label: "Home", href: "#hero" }] }]}
      copyrightText="© 2024 La Vie en Rose"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}