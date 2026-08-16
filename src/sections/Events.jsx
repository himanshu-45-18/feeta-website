const events = [
  {
    date: "25",
    month: "SEP",
    title: "Technical Workshop",
    description:
      "An interactive hands-on workshop designed to introduce students to practical technologies and engineering concepts.",
    category: "Workshop",
    committee: "ISF",
    status: "Upcoming",
  },
  {
    date: "05",
    month: "OCT",
    title: "Coding Challenge",
    description:
      "A technical coding challenge where students can test their problem-solving and programming skills.",
    category: "Competition",
    committee: "ISF",
    status: "Upcoming",
  },
  {
    date: "18",
    month: "OCT",
    title: "Project Exhibition",
    description:
      "Students showcase innovative electronics, communication, embedded and software projects.",
    category: "Exhibition",
    committee: "FEETA + ISF",
    status: "Upcoming",
  },
]

function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-slate-900 px-6 py-24"
    >

      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What's Happening
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Upcoming
            <span className="text-blue-500"> Events</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Stay updated with workshops, competitions,
            exhibitions and activities organized by FEETA
            and ISF.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-6">

          {events.map((event) => (

            <article
              key={event.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 transition duration-500 hover:-translate-y-1 hover:border-blue-500/40 sm:p-7"
            >

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-600 text-white">

                  <span className="text-3xl font-black">
                    {event.date}
                  </span>

                  <span className="text-xs font-bold tracking-[0.2em]">
                    {event.month}
                  </span>

                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      {event.category}
                    </span>

                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {event.committee}
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {event.title}
                  </h3>

                  <p className="mt-2 max-w-2xl leading-7 text-slate-400">
                    {event.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm">

                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="font-medium text-emerald-400">
                      {event.status}
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  className="shrink-0 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-500 hover:bg-blue-600"
                >
                  View Details →
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Events