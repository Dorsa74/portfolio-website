"use client";
import React, { useState } from "react";
import Button from '../components/Button';

import EducationSection from './sections/educationSection';
import WorkSection from './sections/workSection';
import ProjectSection from './sections/projectSection';

import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState<"education" | "work" | "projects" | null>(null);

  return (
    <div className="grid grid-rows-[1fr_auto] bg-blue-100 min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full min-h-screen">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="text-left w-1/2">
            <h1 className="text-4xl md:text-7xl font-bold text-black pb-10">
              Hi, I'm Dorsa
            </h1>
            <p>I have a background in electrical engineering, specializing in signal processing and communications. I enjoy solving problems and working on projects that contribute to making 
              the world a better place. My main interests lie in programming and energy technology, with a focus on sustainability.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="/images/me.jpg"
              alt="Profile Picture"
              className="rounded-full w-48 h-48 object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-40 flex flex-row gap-4 items-center w-full place-content-center">
          <Button
            onClick={() => setActiveSection("education")}
            text="Education"
            isActive={activeSection === "education"}
          />          
          <Button
            onClick={() => setActiveSection("work")}
            text="Work"
            isActive={activeSection === "work"}
          />
          <Button
            onClick={() => setActiveSection("projects")}
            text="Projects"
            isActive={activeSection === "projects"}
          />

        </div>

        {/* Section Display */}
        <div className="mt-10 w-full">
          {activeSection === "education" && <EducationSection />}
          {activeSection === "work" && <WorkSection />}
          {activeSection === "projects" && <ProjectSection />}
        </div>
      </main>

      {/* Footer */}
      <footer>
        <section id="contact" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold">Find me on LinkedIn:</h3>
              <a
                href="https://www.linkedin.com/in/yourlinkedin" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                linkedin.com/in/dorsa-kabiri-4208b411b
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Send Me an Email:</h3>
              <form action="https://formspree.io/f/mrbeaqnp" method="POST" className="w-full max-w-md mx-auto space-y-4">
                <div>
                  <label htmlFor="name" className="block text-left">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-left">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-left">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-left">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
