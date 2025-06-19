import React, { useState } from "react";
import logo from "../assets/VikasGarh-removebg-preview1.png";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-40" />

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#about">About Program</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#mentors">Mentors</a>
          <a href="#faq">FAQ</a>
          <a href="#schedule">Schedule</a>
          <a href="#contact">Contact</a>
        </nav>
 
        <a href="#register" className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded">
          Register Now
        </a>

        <button className="md:hidden flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
          <a href="#about" onClick={() => setIsOpen(false)}>About Program</a>
          <a href="#curriculum" onClick={() => setIsOpen(false)}>Curriculum</a>
          <a href="#mentors" onClick={() => setIsOpen(false)}>Mentors</a>
          <a href="#success" onClick={() => setIsOpen(false)}>Success Stories</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#schedule" onClick={() => setIsOpen(false)}>Schedule</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#register" className="block bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={() => setIsOpen(false)}>
            Register Now
          </a>
        </div>
      )}
    </header>
  );
}
