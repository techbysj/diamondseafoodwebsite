import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationWidget = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 ">
      <h2 className="text-6xl font-thin text-gray-800 p-6 mb-4 text-center">
        Visit Our Location
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Map Section */}
        <div className="flex-1">
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95565101531573!3d-37.81724797975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775bb5a0adab6a!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1695348332901!5m2!1sen!2sus"
            title="Google Map of Federation Square"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Details Section */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-sm text-gray-600">
                Federation Square, Melbourne, VIC 3000, Australia
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-sm text-gray-600">+61 3 9658 9658</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-red-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-sm text-gray-600">info@fedsquare.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationWidget;
