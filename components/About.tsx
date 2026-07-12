export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0b1120] text-white flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center">
                <span className="text-7xl font-bold bg-linear-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  RK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-cyan-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            Building Enterprise Digital Experiences
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
              I'm an AEM Content Author, Full Stack Developer, and CMS Specialist with 3+ years of experience in enterprise web content management. 
              I have hands-on experience with Adobe Experience Manager (AEM) and Sitefinity CMS, creating and managing enterprise websites, content authoring, responsive web pages, component configuration, digital asset management, website publishing, and SEO.
              I also have experience with .NET, SQL, JavaScript, and modern web technologies, enabling me to deliver high-quality digital experiences while collaborating effectively with cross-functional teams
          </p>

          <p className="text-gray-400 leading-8 mt-6">
            I enjoy building clean, modern, and high-performance web
            applications using HTML, CSS, JavaScript, React, and Next.js. I'm
            continuously improving my frontend skills while seeking
            international opportunities and I'm open to relocation.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="rounded-xl border border-cyan-500/30 bg-white/5 p-5">
              <h3 className="text-cyan-400 text-2xl font-bold">3+</h3>
              <p className="text-gray-300 mt-2">Years Experience</p>
            </div>

            <div className="rounded-xl border border-pink-500/30 bg-white/5 p-5">
              <h3 className="text-pink-400 text-2xl font-bold">AEM</h3>
              <p className="text-gray-300 mt-2">CMS Specialist</p>
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-white/5 p-5">
              <h3 className="text-blue-400 text-2xl font-bold">Next.js</h3>
              <p className="text-gray-300 mt-2">Frontend Learning</p>
            </div>

            <div className="rounded-xl border border-green-500/30 bg-white/5 p-5">
              <h3 className="text-green-400 text-2xl font-bold">🌍</h3>
              <p className="text-gray-300 mt-2">Open to Relocation</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}