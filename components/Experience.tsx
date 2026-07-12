 export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            My Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Professional Experience
          </h2>

          <p className="text-gray-400 mt-4">
            My career journey in enterprise CMS and web technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-6">

          {/* Experience 1 */}
          <div className="relative mb-12 pl-10">
            <div className="absolute -left-2.75 top-2 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-8 hover:border-cyan-400 transition">

              <span className="text-cyan-400 font-semibold">
                Apr 2024 – Present
              </span>

              <h3 className="text-3xl font-bold mt-2">
                AEM Content Author
              </h3>

              <p className="text-lg text-gray-300 mt-1">
                Decision Culture
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>• Manage enterprise content using Adobe Experience Manager.</li>
                <li>• Worked on the MINI's country-specific websites.</li>
                <li>• Created and updated multilingual web pages.</li>
                <li>• Managed Digital Asset Management (DAM).</li>
                <li>• Optimized content for SEO and accessibility.</li>
              </ul>

            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative mb-12 pl-10">
            <div className="absolute -left-2.75 top-2 h-5 w-5 rounded-full bg-pink-400 shadow-[0_0_20px_#ec4899]"></div>

            <div className="rounded-2xl border border-pink-500/20 bg-white/5 backdrop-blur-lg p-8 hover:border-pink-400 transition">

              <span className="text-pink-400 font-semibold">
                Apr 2023 – Mar 2024
              </span>

              <h3 className="text-3xl font-bold mt-2">
                CMS Executive
              </h3>

              <p className="text-lg text-gray-300 mt-1">
                Idealake Information Technologies
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>• Managed AEM & Sitefinity CMS websites.</li>
                <li>• Updated 50+ web pages.</li>
                <li>• Performed content migration.</li>
                <li>• Managed digital assets.</li>
                <li>• Maintained SEO and brand consistency.</li>
              </ul>

            </div>
          </div>

          {/* Experience 3 */}
          <div className="relative pl-10">
            <div className="absolute -left-2.75 top-2 h-5 w-5 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]"></div>

            <div className="rounded-2xl border border-violet-500/20 bg-white/5 backdrop-blur-lg p-8 hover:border-violet-400 transition">

              <span className="text-violet-400 font-semibold">
                Mar 2022 – Mar 2023
              </span>

              <h3 className="text-3xl font-bold mt-2">
                Full Stack Intern (.NET)
              </h3>

              <p className="text-lg text-gray-300 mt-1">
                Idealake Information Technologies
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>• Assisted in .NET web development.</li>
                <li>• Worked with SQL databases.</li>
                <li>• Developed responsive web pages.</li>
                <li>• Supported frontend development using HTML, CSS & JavaScript.</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
