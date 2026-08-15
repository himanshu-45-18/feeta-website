function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo / Name */}
          <div className="text-center md:text-left">

            <h3 className="text-2xl font-bold">
              ETC <span className="text-blue-500">Forum</span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Electronics & Telecommunication Department
            </p>

          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400">

            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#team"
              className="transition hover:text-white"
            >
              Team
            </a>

            <a
              href="#activities"
              className="transition hover:text-white"
            >
              Activities
            </a>

            <a
              href="#events"
              className="transition hover:text-white"
            >
              Events
            </a>

            <a
              href="#gallery"
              className="transition hover:text-white"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} ETC Forum. All rights reserved.
          </p>

          <p className="mt-2">
            Designed & developed by the ETC Forum Technical Team.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer