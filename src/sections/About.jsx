function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            About Us
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Empowering Students Through
            <span className="text-blue-600"> Technology</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The ETC Department Forum is a student-driven platform that
            encourages innovation, technical learning, leadership and
            collaboration among Electronics and Telecommunication
            Engineering students.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Innovation */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              💡
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Innovation
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Encouraging students to explore new technologies,
              develop innovative ideas and turn concepts into
              real-world projects.
            </p>
          </div>

          {/* Technical Growth */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-2xl">
              ⚡
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Technical Growth
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Conducting workshops, coding sessions, technical
              events and activities that help students build
              practical skills.
            </p>
          </div>

          {/* Leadership */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
              🚀
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Leadership
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Providing students with opportunities to lead,
              organize events, collaborate with others and develop
              professional skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About