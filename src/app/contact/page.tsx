'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaSlack } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rj24e8d',      
        'template_ghaq8nl',     
        formRef.current!,
        'Gz1jQunmXAwYa1nKB'     
      )
      .then(() => {
        alert('✅ Message sent successfully!');
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        alert('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md py-24">
      <h1 className="text-4xl py-5 text-center font-bold text-[#BF5700] mb-2">
        Connect with Us
      </h1>

            <div className="mb-5 text-center">
        <div className="inline-flex gap-8 text-[#BF5700] text-3xl justify-center">
          <a
            href="https://instagram.com/txtriathloncycling"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 hover:text-[#914202] transition"
          >
            <FaInstagram />
            <span className="text-lg font-semibold hidden sm:inline">Instagram</span>
          </a>
          <a
            href="https://utexastriathlon.slack.com/archives/C027F3YT72L"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Slack"
            className="flex items-center gap-2 hover:text-[#914202] transition"
          >
            <FaSlack />
            <span className="text-lg font-semibold hidden sm:inline">Slack</span>
          </a>
        </div>
        <p className="mt-4 text-gray-600 max-w-md mx-auto">
          Follow us on Instagram or join our Slack community to keep up with workouts, events, and all things Texas Triathlon & Cycling.
        </p>
      </div>

        <h1 className="text-4xl py-5 text-center font-bold text-[#BF5700] mt-12 mb-2">
        Leave a Message
      </h1>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="user_name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"  
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email" 
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"    
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#BF5700] text-white font-semibold py-3 rounded-md hover:bg-[#8d4103] transition cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
