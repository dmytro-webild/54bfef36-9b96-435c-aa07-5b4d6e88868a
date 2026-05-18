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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="La Vie en Rose"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Experience Life in Bloom"
      description="Discover curated lifestyle essentials designed to elevate your everyday moments with elegance and grace."
      kpis={[
        {
          value: "12+",
          label: "Years Curating",
        },
        {
          value: "500+",
          label: "Unique Pieces",
        },
        {
          value: "10k+",
          label: "Happy Clients",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-still-life-arrangement-with-water_23-2149176105.jpg"
      imageAlt="La Vie en Rose lifestyle collection"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/person-drinking-healthy-matcha-tea_52683-109318.jpg",
          alt: "Person drinking healthy matcha tea",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-still-life-arrangement-with-water_23-2149176106.jpg",
          alt: "Beautiful still life arrangement with water",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beatuful-wedding-rings_1328-2232.jpg",
          alt: "beatuful wedding rings ",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-knitted-stockings-uses-phone-cozy-bed-autumn-leaves_169016-14028.jpg",
          alt: "A young woman in knitted stockings uses the phone in a cozy bed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/still-life-with-spring-flowers-home_169016-3770.jpg",
          alt: "Still life with spring flowers at home",
        },
      ]}
      avatarText="Join 10k+ happy clients"
      marqueeItems={[
        {
          type: "text",
          text: "Timeless Aesthetic",
        },
        {
          type: "text",
          text: "Handcrafted Excellence",
        },
        {
          type: "text",
          text: "Ethical Sourcing",
        },
        {
          type: "text",
          text: "Refined Living",
        },
        {
          type: "text",
          text: "Elegant Boutique",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Our Philosophy of ",
        },
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=o47cwr",
          alt: "flower",
        },
        {
          type: "text",
          content: " Beauty",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Sparkles,
          title: "Handcrafted Excellence",
          description: "Each item is meticulously selected for its quality and artistry.",
        },
        {
          icon: Award,
          title: "Timeless Aesthetic",
          description: "Designs that transcend trends for lasting beauty in your home.",
        },
        {
          icon: Shield,
          title: "Ethical Sourcing",
          description: "Committed to sustainable and ethical practices in all our collections.",
        },
      ]}
      title="The Art of Living"
      description="Exquisitely selected items for a refined life."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Floral Vase",
          price: "$85",
          variant: "Decor",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-white-rose-vase_52683-121581.jpg",
        },
        {
          id: "p2",
          name: "Silk Scarf",
          price: "$120",
          variant: "Accessories",
          imageSrc: "http://img.b2bpic.net/free-photo/accessories-skincare-products_23-2147710691.jpg",
        },
        {
          id: "p3",
          name: "Ceramic Tea Set",
          price: "$240",
          variant: "Kitchen",
          imageSrc: "http://img.b2bpic.net/free-photo/preparing-sake-japanese-beverage_23-2150158614.jpg",
        },
        {
          id: "p4",
          name: "Velvet Throw",
          price: "$180",
          variant: "Home",
          imageSrc: "http://img.b2bpic.net/free-photo/bed-arrangement-with-fresh-sheets_23-2150551110.jpg",
        },
        {
          id: "p5",
          name: "Gold Scented Candle",
          price: "$65",
          variant: "Fragrance",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-flowers-with-decorative-objects-living-room_169016-5968.jpg",
        },
        {
          id: "p6",
          name: "Crystal Decanter",
          price: "$320",
          variant: "Barware",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-vases-with-spring-flowers-living-room_169016-6356.jpg",
        },
      ]}
      title="Curated Collections"
      description="Exclusive pieces available only through La Vie en Rose."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="A Legacy of Elegance"
      tag="Our Growth"
      metrics={[
        {
          id: "m1",
          value: "15+",
          description: "Cities Serviced",
        },
        {
          id: "m2",
          value: "98%",
          description: "Customer Satisfaction",
        },
        {
          id: "m3",
          value: "100%",
          description: "Artisan Crafted",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Isabelle Laurent",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-interested-girl-with-wavy-hair-smiling-excited-caucasian-female-model-with-tanned-skin_197531-9029.jpg",
        },
        {
          id: "t2",
          name: "Marcus Thorne",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-priest-confession_23-2149284637.jpg",
        },
        {
          id: "t3",
          name: "Chloe Dupont",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-serious-blond-girl-trench-coat-confidently-looking-camera-city-street_574295-3880.jpg",
        },
        {
          id: "t4",
          name: "Elena Rossi",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-looking-woman-looking-camera_23-2148286468.jpg",
        },
        {
          id: "t5",
          name: "Julian Vane",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-redhead-model-man-sits-swing-room-with-loft-interior_613910-20177.jpg",
        },
      ]}
      cardTitle="Loved by Connoisseurs"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Join our inner circle for exclusive invitations, artisan updates, and first access to new collections."
      buttons={[
        {
          text: "Get In Touch",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="La Vie en Rose"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Press",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Shipping",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 La Vie en Rose"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
