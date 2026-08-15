function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">

          {/* Department */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Electronics & Telecommunication Engineering
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            ETC
            <span className="text-blue-500"> Forum</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            A platform for students to learn, innovate, collaborate
            and lead through technology and teamwork.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="#activities"
              className="w-full rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 sm:w-auto"
            >
              Explore Activities
            </a>

            <a
              href="#team"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800 sm:w-auto"
            >
              Meet Our Team
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero