export default function Certifications() {
  const certifications = [
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Johns Hopkins University",
      platform: "Coursera",
      date: "May 2024",
      verify: "https://www.coursera.org/account/accomplishments/certificate/S7GMH6L849SK",
    },
    
  ];

  return (
    <section
      id="certifications"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            CERTIFICATIONS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Professional Certifications
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I continuously improve my skills through recognized online learning
            platforms and hands-on professional experience.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              <div className="text-5xl">🏆</div>

              <h3 className="mt-6 text-2xl font-bold">
                {cert.title}
              </h3>

              <p className="mt-4 text-cyan-400 font-semibold">
                {cert.issuer}
              </p>

              <p className="text-gray-300">
                Platform: {cert.platform}
              </p>

              <p className="text-gray-400 mt-2">
                Completed: {cert.date}
              </p>

              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold transition duration-300 hover:scale-105"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}