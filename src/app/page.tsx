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
import { Award, Beef, CheckCircle, CookingPot, Droplet, Flame } from "lucide-react";

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
        {
          name: "Home",          id: "hero"},
        {
          name: "Menu",          id: "lineup"},
        {
          name: "Reviews",          id: "reviews"},
        {
          name: "Story",          id: "story"},
        {
          name: "Location",          id: "visit"},
      ]}
      brandName="Smash'd"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "radial-gradient"}}
      title="Erbil's #1 Smashed Burger."
      description="Fresh ingredients. Zero shortcuts. Every patty smashed to order."
      buttons={[
        {
          text: "See Our Menu",          href: "#lineup"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hamburger-menu-composition_23-2148614045.jpg",          imageAlt: "smashed burger close up melting cheese"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-beef-burger-with-salad_23-2148784488.jpg",          imageAlt: "smashed burger close up melting cheese"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-delicious-hamburgers-white-table_23-2148614106.jpg",          imageAlt: "smashed burger close up melting cheese"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-cheeseburger-grilled-beef-patty-with-cheese-lettuce-burger-buns_141793-4806.jpg",          imageAlt: "smashed burger close up melting cheese"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pair-hands-holding-fresh-juicy-burger-with-lettuce-onions-cheese-black-background_181624-59244.jpg",          imageAlt: "smashed burger close up melting cheese"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fire-meat-burger-wooden-hemp_140725-7009.jpg",          imageAlt: "smashed burger close up melting cheese"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Never Frozen",          description: "You taste the freshness from the very first bite",          bentoComponent: "reveal-icon",          icon: Flame,
        },
        {
          title: "Smashed to Order",          description: "Crispy caramelized crust. Juicy center. Every time.",          bentoComponent: "reveal-icon",          icon: Beef,
        },
        {
          title: "The Secret Weapon",          description: "Caramelized onions + special sauce that make all the difference",          bentoComponent: "reveal-icon",          icon: CookingPot,
        },
        {
          title: "Free Drink Refills",          description: "Because generosity is always on the menu",          bentoComponent: "reveal-icon",          icon: Droplet,
        },
      ]}
      title="Why Smash'd Hits Different"
      description="We don't do frozen. We don't do pre-made. We do fresh."
    />
  </div>

  <div id="lineup" data-section="lineup">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "The OG Smash",          price: "12,000 IQD",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-bacon-burger-with-salad-copy-space_23-2148784487.jpg"},
        {
          id: "2",          name: "Jalapeño Burger",          price: "14,000 IQD",          imageSrc: "http://img.b2bpic.net/free-photo/dark-plate-with-waffles-grapes-dark-background_23-2148340373.jpg"},
        {
          id: "3",          name: "All American",          price: "15,000 IQD",          imageSrc: "http://img.b2bpic.net/free-photo/fresh-hamburger-wooden-board_140725-6629.jpg"},
        {
          id: "4",          name: "Golden Crunch Chicken",          price: "13,000 IQD",          imageSrc: "http://img.b2bpic.net/free-photo/big-sandwich-with-chicken-kebab-lettuce_2829-16567.jpg"},
        {
          id: "5",          name: "Curly Fries",          price: "5,000 IQD",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cookie-with-grapefruit-slices-black-plate-grey-surface_114579-61389.jpg"},
        {
          id: "6",          name: "Jalapeño Poppers",          price: "6,000 IQD",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-corn-dog_23-2149388008.jpg"},
      ]}
      title="The Lineup"
      description="Bold flavors. Hand-crafted. Ready for you."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Chase H.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12134.jpg"},
        {
          id: "2",          name: "Villar A.",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-smiling-korean-barista-pouring-filter-coffee-prepare-batch-brew-client-cafe_1258-203378.jpg"},
        {
          id: "3",          name: "Narden A.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-asian-girl-barista-working-cafe-holding-cup-tea-giving-client-their-order_1258-199284.jpg"},
        {
          id: "4",          name: "Shanaz N.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-asian-woman-shows-thumbs-up-approves-likes-smth-good-stands-near-cafe-entrance-give-her_1258-199002.jpg"},
        {
          id: "5",          name: "Bunny O.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-showing-eclairs-bakery-counter_23-2148189123.jpg"},
      ]}
      cardTitle="Straight From Erbil's Mouths"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "10/10",          title: "Taste Rated",          description: "Pure flavor perfection.",          icon: Award,
        },
        {
          id: "2",          value: "100%",          title: "Freshness",          description: "Never frozen. Ever.",          icon: CheckCircle,
        },
        {
          id: "3",          value: "Top",          title: "Talked-About",          description: "Erbil's favorite.",          icon: Flame,
        },
        {
          id: "4",          value: "∞",          title: "Free Refills",          description: "Stay as long as you like.",          icon: Droplet,
        },
      ]}
      title="Built for Flavor"
      description="Numbers don't lie. Tastebuds don't lie either."
    />
  </div>

  <div id="story" data-section="story">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Origin"
      title="We had one goal: make Erbil's best smashed burger."
      description="Fresh patties. Real ingredients. Zero compromise. One bite and you'll understand why people keep coming back."
      subdescription="Smash'd Burger Erbil"
      icon={Flame}
      imageSrc="http://img.b2bpic.net/free-photo/view-delicious-fantasy-surreal-street-food_23-2151569032.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="visit" data-section="visit">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Visit Us"
      title="Your Next Favourite Burger Is One Street Away."
      description="Location: Erbil City Centre, Main St. Open Daily 12pm - 2am."
      imageSrc="http://img.b2bpic.net/free-photo/lovely-couple-sitting-coffeeshop_23-2148422418.jpg"
      mediaAnimation="slide-up"
      buttonText="Get Directions"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/pub-promo-with-delicious-burger_23-2148868253.jpg"
      logoText="Smash'd Burger Erbil"
      columns={[
        {
          title: "Links",          items: [
            {
              label: "Menu",              href: "#lineup"},
            {
              label: "Story",              href: "#story"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Instagram",              href: "https://instagram.com"},
          ],
        },
      ]}
      copyrightText="© 2025 Smash'd Burger Erbil"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
