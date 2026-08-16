const galleryItems = [
  {
    title: "Technical Workshop",
    category: "Workshop",
    image: "/gallery/workshop.jpg",
  },
  {
    title: "Student Activity",
    category: "FEETA",
    image: "/gallery/activity.jpg",
  },
  {
    title: "Technical Competition",
    category: "ISF",
    image: "/gallery/competition.jpg",
  },
  {
    title: "Project Exhibition",
    category: "Innovation",
    image: "/gallery/project.jpg",
  },
]

const achievements = [
  {
    number: "01",
    title: "Technical Excellence",
    description:
      "Recognizing students for outstanding technical projects and contributions.",
  },
  {
    number: "02",
    title: "Competition Success",
    description:
      "Celebrating students who participate and perform in technical competitions.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Encouraging students to transform ideas into practical and innovative solutions.",
  },
  {
    number: "04",
    title: "Student Leadership",
    description:
      "Recognizing students who contribute through leadership, teamwork and initiative.",
  },
]

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Moments & Achievements
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our
            <span className="text-blue-600"> Journey</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A collection of moments, activities, projects and
            achievements from the ETC student community.
          </p>

        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"
            >

              <div className="relative h-64 overflow-hidden bg-slate-900">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />

                {/* Fallback */}
                <div className="absolute inset-0 -z-0 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-slate-900">
                  <div className="text-center">
                    <div className="text-4xl">
                      📸
                    </div>

                    <p className="mt-2 text-sm font-semibold text-white">
                      Photo Coming Soon
                    </p>
                  </div>
                </div>

              </div>

              <div className="p-5">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  {item.category}
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* Achievements */}
        <div className="mt-24">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Achievements
            </p>

            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
              Celebrating Student Success
            </h3>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {achievements.map((achievement) => (
              <div
                key={achievement.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >

                <span className="text-4xl font-black text-blue-100">
                  {achievement.number}
                </span>

                <h4 className="mt-5 text-xl font-bold">
                  {achievement.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  {achievement.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Gallery