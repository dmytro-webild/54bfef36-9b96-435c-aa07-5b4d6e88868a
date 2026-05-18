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
import { Award, Shield, Sparkles, MapPin, Clock, Phone } from "lucide-react";

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
      description="Greek natural, organic cosmetics brand founded by Dimitra Katsafadou in 2016. Harnessing the power of nature to bring radiance and health to your skin through ethical, high-quality botanical formulations."
      kpis={[
        { value: "2016", label: "Founded" },
        { value: "100%", label: "Organic" },
        { value: "Greek", label: "Artisan Craft" },
      ]}
      enableKpiAnimation={true}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg?_wi=1"
      imageAlt="La Vie en Rose natural cosmetics"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "Pure Nature, " },
        { type: "text", content: "Pure Radiance" },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { icon: Sparkles, title: "Organic Certified", description: "Pure, natural ingredients sourced from Greek lands." },
        { icon: Award, title: "Artisan Formula", description: "Expertly blended by Dimitra Katsafadou since 2016." },
        { icon: Shield, title: "Cruelty-Free", description: "Ethically produced with respect for nature and skin." },
      ]}
      title="Our Philosophy"
      description="Beauty that honors the earth and empowers your spirit."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Botanical Serum", price: "€42", variant: "Skincare", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg?_wi=2" },
        { id: "p2", name: "Essential Glow Oil", price: "€38", variant: "Face", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg?_wi=3" },
      ]}
      title="Signature Collection"
      description="Discover our best-selling organic treasures."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      tag="Sparta Store"
      useInvertedBackground={false}
      title="Visit Us"
      metrics={[
        { id: "m1", value: "Sparta", description: "Kon/nou Palaiologou 62" },
        { id: "m2", value: "Daily", description: "Operating Hours available on-site" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[{ id: "t1", name: "Maria G.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DssUMJKVcmwVqfaFmYK7mykjub/uploaded-1779082306907-44xp7acu.jpg?_wi=4" }]}
      cardTitle="Natural Beauty"
      cardTag="Customer Favorites"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Visit our Sparta location at Kon/nou Palaiologou 62 to experience our organic cosmetics firsthand."
      buttons={[{ text: "Call Us: +30 2731 0XXXXX", href: "tel:+302731000000" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="La Vie en Rose"
      columns={[{ title: "Store", items: [{ label: "Sparta: Kon/nou Palaiologou 62", href: "#" }] }]}
      copyrightText="© 2024 La Vie en Rose"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}