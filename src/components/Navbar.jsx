import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Activities", href: "#activities" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* FEETA Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/forumlogo.png"
            alt="FEETA Logo"
            className="h-12 w-12 object-contain"
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight text-slate-900">
              FEETA
            </h1>

            <p className="text-xs text-slate-500">
              Electronics & Telecommunication Engineering
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">

          <div className="flex flex-col">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar