const activities = [
  {
    icon: "💻",
    title: "Technical Workshops",
    description:
      "Hands-on workshops where students learn emerging technologies and practical engineering skills.",
  },
  {
    icon: "🤖",
    title: "Projects & Innovation",
    description:
      "Encouraging students to build innovative hardware and software projects and solve real-world problems.",
  },
  {
    icon: "🏆",
    title: "Technical Competitions",
    description:
      "Coding competitions, quizzes, problem-solving challenges and other technical contests.",
  },
  {
    icon: "🎤",
    title: "Expert Sessions",
    description:
      "Interactive sessions with professionals, alumni and experts from the technology industry.",
  },
  {
    icon: "🔧",
    title: "Hands-on Sessions",
    description:
      "Practical learning through electronics, embedded systems, IoT and other engineering activities.",
  },
  {
    icon: "🚀",
    title: "Student Initiatives",
    description:
      "Creating opportunities for students to collaborate, lead events and turn their ideas into reality.",
  },
]

function Activities() {
  return (
    <section
      id="activities"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            What We Do
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our
            <span className="text-blue-600"> Activities</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From technical workshops to competitions and
            innovation projects, the ETC Forum provides students
            with opportunities to learn, build and lead.
          </p>

        </div>

        {/* Activity Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-blue-50 hover:shadow-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl transition group-hover:scale-110">
                {activity.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {activity.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {activity.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Activities
