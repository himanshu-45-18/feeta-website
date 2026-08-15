const achievements = [
  {
    icon: "🏆",
    title: "Technical Competitions",
    description:
      "Students participate in technical competitions and demonstrate their skills, creativity and problem-solving abilities.",
  },
  {
    icon: "💡",
    title: "Innovative Projects",
    description:
      "Forum members work on innovative electronics, communication, embedded systems and software projects.",
  },
  {
    icon: "🥇",
    title: "Student Excellence",
    description:
      "Recognizing students for outstanding performance in academics, technical activities and extracurricular initiatives.",
  },
  {
    icon: "🚀",
    title: "Technical Growth",
    description:
      "Creating opportunities for students to develop practical skills and explore emerging technologies.",
  },
]

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Achievements
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Learning,
            <span className="text-blue-600"> Innovation & Excellence</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Celebrating the efforts, creativity and accomplishments
            of students from the ETC Department Forum.
          </p>

        </div>

        {/* Achievement Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition duration-300 group-hover:bg-blue-600">
                {achievement.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {achievement.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Achievements