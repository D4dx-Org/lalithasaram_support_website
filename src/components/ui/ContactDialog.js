import React from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';

const ContactDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl w-full max-w-2xl shadow-xl relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Title Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="/images/logo.png" alt="Thafheem Logo" className="w-full h-full object-cover rounded-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about Thafheem ul Quran? We're here to help!
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#57b8d0]" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Phone</h3>
                  <a href="tel:+919946666139" className="text-gray-900 text-lg hover:text-[#57b8d0] transition-colors">
                    +91 99466 66139
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#57b8d0]" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Email</h3>
                  <a href="mailto:info@d4media.in" className="text-gray-900 text-lg hover:text-[#57b8d0] transition-colors">
                    info@d4media.in
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#57b8d0]" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Address</h3>
                  <p className="text-gray-900 text-lg">
                    D4media, Hira Centre, Calicut, Kerala, Pin 673004
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog; 