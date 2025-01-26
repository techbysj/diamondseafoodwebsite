import React from 'react'
import FullWidthBanner from "../components/Banner";
import ContactWidget from '../components/ContactWidget';
import ContactForm from '../components/ContactForm';
import LiveCardCrab from '../components/LiveCardCrab';

const LiveDeepSeaCrab = () => {
  return (
    <div className="">
      <FullWidthBanner
        imageUrl="https://coasttocoastseafood.ca/cdn/shop/products/kingcrab.jpg?v=1667099198"
        title="Live Deep Sea Crab"
        description="Fresh from the deep blue—our live sea crabs promise unrivaled taste and quality."
        buttonText="Order Now"
        buttonUrl="/contact"
      />
      <LiveCardCrab />
      <ContactWidget />
      <ContactForm />
    </div>
  );
};

export default LiveDeepSeaCrab