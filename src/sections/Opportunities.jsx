const opportunities = [
  {
    icon: "🎓",
    title: "Learn New Skills",
    description:
      "Participate in workshops, technical sessions and activities that help you learn beyond the classroom.",
  },
  {
    icon: "🚀",
    title: "Build Projects",
    description:
      "Turn your ideas into practical projects and gain experience with real engineering technologies.",
  },
  {
    icon: "🏆",
    title: "Compete & Represent",
    description:
      "Take part in competitions, hackathons and technical events and represent the ETC department.",
  },
  {
    icon: "🤝",
    title: "Connect & Collaborate",
    description:
      "Meet students, faculty, seniors and professionals and build meaningful technical connections.",
  },
]

function Opportunities() {
  return (
    <section
      id="opportunities"
      className="relative overflow-hidden bg-white px-6 py-24"
    >

      <div className="relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Opportunities
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Grow beyond the
            <span className="text-blue-600"> classroom.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            FEETA and ISF create opportunities for students to
            learn, build, compete, collaborate and prepare for
            their future.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {opportunities.map((opportunity) => (

            <div
              key={opportunity.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                {opportunity.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {opportunity.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {opportunity.description}
              </p>

              <div className="mt-6 text-sm font-semibold text-blue-600">
                Explore →
              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">

          <div className="grid lg:grid-cols-2">

            <div className="p-8 sm:p-10 lg:p-14">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Alumni Network
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Learn from those who came before.
              </h3>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                Our alumni can become an important part of the
                ETC community by sharing their experiences,
                career journeys, technical knowledge and
                opportunities with current students.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                  Career Guidance
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                  Mentorship
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                  Industry Connect
                </span>

              </div>

            </div>

            <div className="flex min-h-[320px] items-center justify-center border-t border-slate-800 bg-slate-900 p-8 lg:border-l lg:border-t-0">

              <div className="w-full max-w-sm text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600/10 text-4xl">
                  🎓
                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Alumni Stories
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Alumni profiles, career journeys and
                  achievements will be featured here.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Opportunities