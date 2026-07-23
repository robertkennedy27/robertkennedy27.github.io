export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#050816] py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
          Robert Kennedy
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Web Content Management Specialist | AEM & Sitefinity CMS | Full Stack Developer
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-sm text-gray-400">
          <span>📧 robertkennedy957@gmail.com</span>
          <span>📱 +91 8655489705</span>
          <span>📍 Mumbai, Maharashtra, India</span>
        </div>

        <div className="mt-4 border-t border-cyan-500/20 pt-4">
          <p className="text-xs text-gray-500">
            © 2026 Robert Kennedy. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}