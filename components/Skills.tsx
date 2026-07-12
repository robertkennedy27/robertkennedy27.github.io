export default function Skills() {
  const skills = [
    "Adobe Experience Manager (AEM)",
    "Sitefinity CMS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Design",
    "SEO",
    "C#",
    "SQL"
  ];

  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Technical Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-4">
            Enterprise CMS platforms, frontend technologies, and modern web development tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}