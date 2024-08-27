import React from 'react';
import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';

const Contact = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="contact">
      <div className="container relative z-2 pt-20 pb-10">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get in Touch"
          title="Contact Us"
        />

        <div className="relative">
          {/* Contact Information and Form */}
          <div className="flex flex-col lg:flex-row gap-10 pt-10 pb-20">
            {/* Column 1: Contact Information */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <img
                    src="https://phaluongtravel.com/wp-content/uploads/2024/07/phone.png"
                    alt="Phone Icon"
                    className="w-8 h-8 mr-3 filter invert"
                  />
                  <span><strong>HOTLINE:</strong> 0396.806.666 0974.582.584</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://phaluongtravel.com/wp-content/uploads/2024/07/maps.png"
                    alt="Address Icon"
                    className="w-8 h-8 mr-3 filter invert"
                  />
                  <span><strong>ADDRESS:</strong> Tiểu khu 3/2, TTNT Mộc Châu</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://phaluongtravel.com/wp-content/uploads/2024/07/mail.png"
                    alt="Email Icon"
                    className="w-8 h-8 mr-3 filter invert"
                  />
                  <span><strong>EMAIL:</strong> <a href="mailto:mocchau@gmail.com" className="text-blue-500">mocchau@gmail.com</a></span>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact Form */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
              <form
                action="/contact"
                method="post"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone*"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a
              className="text-xs font-code font-bold tracking-wider uppercase border-b"
              href="/contact"
            >
              View Full Contact Details
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 w-full">
          <iframe
            loading="lazy"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.4084249875136!2d104.58972937502531!3d20.815207580781127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3133c1b63b637685%3A0x7a9507f393b73966!2zVGjDoWMgROG6o2kgWeG6v20!5e0!3m2!1svi!2sus!4v1720945084806!5m2!1svi!2sus"
            width="100%"
            height="450"
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
