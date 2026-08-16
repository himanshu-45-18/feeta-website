function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <img
            src="/forumlogo.png"
            alt="FEETA × ISF"
            className="h-10 w-10 shrink-0 object-contain"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-bold text-white">
              FEETA × ISF
            </p>

            <p className="text-[10px] uppercase tracking-wider text-slate-500">
              ETC Student Community
            </p>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#committees"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            Committees
          </a>

          <a
            href="#events"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            Events
          </a>

          <a
            href="#innovation"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            Innovation
          </a>

          <a
            href="#opportunities"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            Opportunities
          </a>

          <a
            href="#team"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            Team
          </a>

          <a
            href="#gallery"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
          >
            Gallery
          </a>

        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 md:block"
        >
          Contact
        </a>

      </div>
    </nav>
  )
}

export default Navbar