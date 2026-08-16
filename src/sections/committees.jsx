const committees = [
  {
    name: "FEETA",
    label: "Student Forum",
    icon: "✦",
    description:
      "FEETA brings students together through leadership, community activities, collaboration and student-driven initiatives across the ETC department.",
    points: [
      "Student Initiatives",
      "Community Activities",
      "Leadership",
      "Collaboration",
    ],
  },
  {
    name: "ISF",
    label: "Technical Committee",
    icon: "⚡",
    description:
      "ISF is the technical committee focused on technical learning, workshops, competitions, innovation and engineering activities.",
    points: [
      "Technical Workshops",
      "Competitions",
      "Innovation",
      "Technical Projects",
    ],
  },
]

function Committees() {
  return (
    <section
      id="committees"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >

      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Committees
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Two committees.
            <span className="text-blue-500">
              {" "}One community.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            FEETA and ISF have distinct responsibilities while
            working together to create opportunities, activities
            and experiences for ETC students.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {committees.map((committee) => (

            <div
              key={committee.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-10"
            >

              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative flex items-start justify-between">

                <div>

                  <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {committee.label}
                  </span>

                  <h3 className="mt-5 text-5xl font-black tracking-tight text-white">
                    {committee.name}
                  </h3>

                </div>

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-400">
                  {committee.icon}
                </div>

              </div>

              <p className="relative mt-7 max-w-xl text-base leading-8 text-slate-400">
                {committee.description}
              </p>

              <div className="relative mt-8">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Focus Areas
                </p>

                <div className="grid grid-cols-2 gap-3">

                  {committee.points.map((point) => (

                    <div
                      key={point}
                      className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-300"
                    >
                      <span className="mr-2 text-blue-400">
                        •
                      </span>

                      {point}

                    </div>

                  ))}

                </div>

              </div>

              <div className="relative mt-8 border-t border-slate-800 pt-6">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-500">
                    ETC Department
                  </span>

                  <span className="text-sm font-semibold text-blue-400">
                    {committee.name} →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">

          <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900 px-5 py-3">

            <span className="font-bold text-blue-400">
              FEETA
            </span>

            <span className="text-slate-600">+</span>

            <span className="font-bold text-cyan-400">
              ISF
            </span>

            <span className="text-slate-600">=</span>

            <span className="text-sm text-slate-400">
              Stronger ETC Community
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Committees