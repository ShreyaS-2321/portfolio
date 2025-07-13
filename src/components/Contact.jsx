import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_krhzb9h', // Replace with your EmailJS service ID
      'template_uxeczdm', // Replace with your EmailJS template ID
      form.current,
      'rUfnxOSZJhTQuyx2b' // Replace with your EmailJS public key
    )
    .then(() => {
      setSent(true);
      setError(null);
      form.current.reset();
    }, (err) => {
      setError("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="py-16 px-6 max-w-3xl mx-auto text-center text-white">
      <h2 className="text-4xl font-bold mb-6 text-purple-500">Contact Me</h2>
      <p className="mb-10 text-white text-lg">
        Got a project or just want to say hi? Fill the form below or drop an email.
      </p>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-white text-black"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-white text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded bg-white text-black"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Send Message
        </button>
      </form>

      {sent && <p className="mt-4 text-green-400">Message sent successfully!</p>}
      {error && <p className="mt-4 text-red-400">{error}</p>}
    </section>
  );
}