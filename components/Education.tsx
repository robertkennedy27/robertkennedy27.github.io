export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college:
        "Thakur Institute of Management Studies, Career Development & Research",
      university: "University of Mumbai",
      year: "2020 – 2022",
      cgpa: "8.86",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Kirandevi Saraf Institute",
      university: "Tilak Maharashtra Vidyapeeth",
      year: "2017 – 2020",
      cgpa: "6.35",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            EDUCATION
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Academic Journey
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My academic background has provided a strong foundation in
            computer applications, software development, databases, and
            modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl">🎓</span>

                <span className="rounded-full bg-cyan-500/20 border border-cyan-400 px-4 py-1 text-cyan-300 text-sm font-semibold">
                  {item.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.degree}
              </h3>

              <p className="text-cyan-400 mt-4 font-semibold">
                {item.college}
              </p>

              <p className="text-gray-400 mt-2">
                {item.university}
              </p>

              <div className="mt-8 inline-flex rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-5 py-2 font-semibold">
                CGPA: {item.cgpa}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}