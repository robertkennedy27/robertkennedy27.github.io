"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_6lo7cqp",
        "template_b7silzt",
        form.current,
        "8bKwpgUEzGUBrKo8u"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current?.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I'm actively looking for AEM, CMS, and Frontend Developer opportunities.
            Feel free to connect with me for collaborations or full-time roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-cyan-400 font-semibold">👤 Name</p>
                <p className="text-gray-300">Robert Kennedy</p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">💼 Role</p>
                <p className="text-gray-300">
                  AEM Content Author | Full Stack Developer | CMS Specialist
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">📧 Email</p>
                <a
                  href="mailto:robertkennedy957@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  robertkennedy957@gmail.com
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">📱 Phone</p>
                <a
                  href="tel:+918655489705"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  +91 8655489705
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">📍 Location</p>
                <p className="text-gray-300">
                  Mumbai, Maharashtra, India
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">🌍 Availability</p>
                <p className="text-green-400 font-medium">
                  Open to Relocation Worldwide
                </p>
              </div>

              <div className="flex gap-4 pt-6">

                <a
                  href="https://www.linkedin.com/in/robert-kennedy-1644641b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 font-semibold hover:scale-105 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/robertkennedy27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-linear-to-r from-gray-700 to-gray-900 font-semibold hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href="/RobertResume.pdf"
                  download
                  className="px-5 py-3 rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 font-semibold hover:scale-105 transition"
                >
                  Resume
                </a>

              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-[#111827] border border-gray-700 p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl bg-[#111827] border border-gray-700 p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl bg-[#111827] border border-gray-700 p-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                required
                className="w-full rounded-xl bg-[#111827] border border-gray-700 p-4 outline-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 py-4 text-lg font-bold hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(34,211,238,0.35)] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}