import React from 'react'
import FullWidthBanner from '../components/Banner'
import ContactForm from '../components/ContactForm';
import LocationWidget from '../components/Location';
import ContactWidget from '../components/ContactWidget';

const Contact = () => {
  return (
    <div className="">
      <FullWidthBanner
        imageUrl="https://coasttocoastseafood.ca/cdn/shop/products/kingcrab.jpg?v=1667099198"
        title="Contact Us"
        description="Your next seafood adventure begins with a simple message. We're here for YOU!"
        buttonText="Who We Are"
        buttonUrl={"/about"}
      />
      <ContactWidget />
      <ContactForm />
      <LocationWidget />
    </div>
  );
};


export default Contact