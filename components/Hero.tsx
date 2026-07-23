export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] text-white">

      {/* RGB Background */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center px-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-5 py-2 backdrop-blur-md mb-8">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-cyan-300 font-medium">
            Open to Relocation Worldwide
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
            Robert Kennedy
          </span>
        </h1>

        {/* Role */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-300">
          Web Content Management Specialist | AEM & Sitefinity CMS | Full Stack Developer
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Building enterprise digital experiences using Adobe Experience Manager (AEM), Sitefinity CMS, and full-stack technologies. Experienced in web content management, digital asset management (DAM), SEO optimization, and developing scalable web solutions.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Resume */}
          <a
            href="/RobertResume.pdf"
            download
            className="rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(168,85,247,0.8)]"
          >
            📄 Download Resume
          </a>

          {/* Projects */}
          <a
            href="#projects"
            className="rounded-xl border border-cyan-400 bg-white/5 backdrop-blur-md px-8 py-4 font-bold text-cyan-300 transition-all duration-300 hover:border-fuchsia-500 hover:bg-fuchsia-500/10 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            🚀 View Projects
          </a>

        </div>

      </div>

    </section>
  );
}