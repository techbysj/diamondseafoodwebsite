import React from 'react'
import FullWidthBanner from "../components/Banner";
import ContactWidget from '../components/ContactWidget';
import ContactForm from '../components/ContactForm';
import FrozenCrabDetails from '../components/FrozenCrabDetails';

const FrozenDeepSeaCrab = () => {
    return (
      <div className="">
        <FullWidthBanner
          imageUrl="https://coasttocoastseafood.ca/cdn/shop/products/kingcrab.jpg?v=1667099198"
          title="Frozen Deep Sea Crab"
          description="Enjoy the ocean's best, anytime, anywhere—with our premium frozen sea crabs."
          buttonText="Order Now"
          buttonUrl="/contact"
        />
        <FrozenCrabDetails />
        <ContactWidget />
        <ContactForm />
      </div>
    );
};

export default FrozenDeepSeaCrab