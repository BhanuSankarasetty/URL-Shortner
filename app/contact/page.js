"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-[#F2F4FF] min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Contact Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1566FA]">
            Contact <span className="text-black">Us</span>
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Have questions, feedback, or ideas? We’d love to hear from you.  
            Our team is always ready to help you with any queries.  
          </p>

          <div className="flex flex-col gap-3 text-gray-800">
            <p><span className="font-bold">Address:</span> Guntur, Andhra Pradesh, India</p>
            <p><span className="font-bold">Email: </span> support@bitlinks.com || bhanuchiru619@gmail.com</p>
            <p><span className="font-bold">Phone:</span> +91 1234567890</p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1566FA]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1566FA]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1566FA]"
            required
          />
          <button
            type="submit"
            className="bg-[#1566FA] text-white font-bold rounded-lg px-4 py-2 shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
