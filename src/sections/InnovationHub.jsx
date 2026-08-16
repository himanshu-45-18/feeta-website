const projects = [
  {
    title: "Smart Embedded Systems",
    category: "Embedded",
    description:
      "Student projects built around microcontrollers, sensors, automation and real-world electronics applications.",
    icon: "⚙️",
  },
  {
    title: "IoT & Smart Solutions",
    category: "IoT",
    description:
      "Connected systems that combine sensors, communication technologies and intelligent automation.",
    icon: "📡",
  },
  {
    title: "Software & AI",
    category: "Software",
    description:
      "Software, artificial intelligence and web-based solutions created by students to solve practical problems.",
    icon: "💻",
  },
  {
    title: "Communication Projects",
    category: "Communication",
    description:
      "Innovative projects exploring wireless communication, networking and modern communication technologies.",
    icon: "📶",
  },
]

function InnovationHub() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >

      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Student Innovation Hub
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ideas into
            <span className="text-cyan-400"> Reality.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A space where ETC students can showcase their ideas,
            projects, experiments and innovative solutions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 lg:col-span-2">

            <div className="relative">

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Featured Area
                </span>

                <span className="text-3xl">
                  🚀
                </span>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
                Build. Experiment. Innovate.
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                From embedded systems and IoT to software and
                communication technologies, the Innovation Hub
                gives students a place to turn engineering
                concepts into working projects.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">

                {["Ideas", "Build", "Test", "Share"].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                  >
                    <p className="text-2xl font-bold text-white">
                      {item}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item === "Ideas"
                        ? "Start here"
                        : item === "Build"
                        ? "Make it real"
                        : item === "Test"
                        ? "Improve"
                        : "Showcase"}
                    </p>
                  </div>

                ))}

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              How It Works
            </p>

            <div className="mt-8 space-y-7">

              {[
                ["01", "Think", "Identify a problem and develop an idea."],
                ["02", "Build", "Turn the idea into a working prototype."],
                ["03", "Showcase", "Present projects and share your work."],
              ].map(([number, title, text]) => (

                <div key={number} className="flex gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {number}
                  </div>

                  <div>

                    <h4 className="font-bold text-white">
                      {title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
                  {project.icon}
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {project.category}
                </span>

              </div>

              <h3 className="mt-6 text-lg font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-cyan-400">
                Explore →
              </div>

            </div>

          ))}

        </div>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

          <h3 className="text-2xl font-bold text-white">
            Have an idea?
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
            Your next project could be the one that inspires
            the next student. Build it, document it and
            showcase it with the ETC community.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Share Your Idea →
          </a>

        </div>

      </div>

    </section>
  )
}

export default InnovationHub