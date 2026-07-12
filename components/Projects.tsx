export default function Projects() {
  const projects = [
    {
      title: "MINI Website",
      type: "Enterprise Project",
      tech: "Adobe Experience Manager (AEM)",
      description:
        "Worked on the MINI's country-specific websites, managing enterprise content, page authoring, multilingual updates, DAM assets, and publishing support.",
      showButton: false,
      link: "",
    },
    {
      title: "PNB MetLife Website",
      type: "Enterprise Project",
      tech: "AEM • Sitefinity CMS",
      description:
        "Managed website content updates, page creation, QA, publishing, content migration, and accessibility while maintaining enterprise branding standards.",
      showButton: false,
      link: "",
    },
    {
      title: "Gym Management System",
      type: "Academic Project",
      tech: "ASP.NET • C# • SQL Server",
      description:
        "Developed a full-stack web application for managing gym members, trainers, attendance, memberships, payments, and reports with a secure admin dashboard.",
      showButton: true,
      link: "https://github.com/yourusername/gym-management",
    },
    {
      title: "Fitness App",
      type: "Academic Project",
      tech: "React Native • Firebase",
      description:
        "Built a modern fitness application featuring workout plans, BMI calculator, calorie tracking, progress monitoring, user authentication, and a responsive mobile interface.",
      showButton: true,
      link: "https://github.com/yourusername/fitness-app",
    },
    {
      title: "Portfolio Website",
      type: "Personal Project",
      tech: "Next.js • Tailwind CSS • TypeScript",
      description:
        "Designed and developed a responsive developer portfolio featuring RGB effects, glassmorphism, smooth animations, reusable components, and modern UI/UX principles.",
      showButton: false,
      link: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5">
            Enterprise and personal projects showcasing my professional experience and development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              <span className="text-cyan-400 text-sm font-semibold uppercase">
                {project.type}
              </span>

              <h3 className="text-3xl font-bold mt-3">
                {project.title}
              </h3>

              <p className="text-blue-300 mt-3 font-medium">
                {project.tech}
              </p>

              <p className="text-gray-400 mt-5 leading-8">
                {project.description}
              </p>

          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}