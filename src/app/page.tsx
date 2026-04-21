"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Beef, CheckCircle, CookingPot, Droplet, Flame, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Menu", id: "lineup" },
        { name: "Reviews", id: "reviews" },
        { name: "Story", id: "story" },
        { name: "Location", id: "visit" },
      ]}
      brandName="Smash'd Burger Erbil"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "radial-gradient" }}
      title="Erbil's #1 Smashed Burger."
      titleClassName="text-6xl font-extrabold"
      description="Fresh ingredients. Zero shortcuts. Every patty smashed to order."
      buttons={[
        { text: "See Our Menu", href: "#lineup" },
        { text: "Visit Us", href: "#visit" }
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/front-view-hamburger-menu-composition_23-2148614045.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-beef-burger-with-salad_23-2148784488.jpg" }
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { title: "Never Frozen", description: "You taste the freshness from the very first bite", bentoComponent: "reveal-icon", icon: Flame },
        { title: "Smashed to Order", description: "Crispy caramelized crust. Juicy center. Every time.", bentoComponent: "reveal-icon", icon: Beef },
        { title: "The Secret Weapon", description: "Caramelized onions + special sauce", bentoComponent: "reveal-icon", icon: CookingPot },
        { title: "Free Drink Refills", description: "Because generosity is on the menu", bentoComponent: "reveal-icon", icon: Droplet },
      ]}
      title="Why Smash'd Hits Different"
      description="We don't do frozen. We do fresh."
    />
  </div>

  <div id="lineup" data-section="lineup">
      <ProductCardOne
      title="The Lineup"
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "The OG Smash", price: "12,000 IQD", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-bacon-burger-with-salad-copy-space_23-2148784487.jpg" },
        { id: "2", name: "Jalapeño Burger", price: "14,000 IQD", imageSrc: "http://img.b2bpic.net/free-photo/dark-plate-with-waffles-grapes-dark-background_23-2148340373.jpg" },
        { id: "3", name: "All American", price: "15,000 IQD", imageSrc: "http://img.b2bpic.net/free-photo/fresh-hamburger-wooden-board_140725-6629.jpg" },
      ]}
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[{ id: "1", name: "Chase H.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12134.jpg" }]}
      cardTitle="Straight From Erbil's Mouths"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      gridVariant="bento-grid-inverted"
      useInvertedBackground={true}
      metrics={[
        { id: "1", value: "10/10", title: "Taste Rated", description: "Pure perfection.", icon: Award },
        { id: "2", value: "100%", title: "Freshness", description: "Never frozen.", icon: CheckCircle },
      ]}
      title="Built for Flavor"
    />
  </div>

  <div id="story" data-section="story">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Origin"
      title="We had one goal: make Erbil's best smashed burger."
      description="Fresh patties. Real ingredients. Zero compromise."
      subdescription="Smash'd Burger Erbil"
      icon={Flame}
      imageSrc="http://img.b2bpic.net/free-photo/view-delicious-fantasy-surreal-street-food_23-2151569032.jpg"
    />
  </div>

  <div id="visit" data-section="visit">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Visit Us"
      title="Your Next Favourite Burger Is One Street Away."
      description="Erbil City Centre, Main St. Open Daily 12pm - 2am."
      imageSrc="http://img.b2bpic.net/free-photo/lovely-couple-sitting-coffeeshop_23-2148422418.jpg"
      buttonText="Get Directions"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/pub-promo-with-delicious-burger_23-2148868253.jpg"
      logoText="Smash'd Burger Erbil"
      columns={[{ title: "Links", items: [{ label: "Menu", href: "#lineup" }] }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}