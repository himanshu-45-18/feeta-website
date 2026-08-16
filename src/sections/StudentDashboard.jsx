const badges = [
  {
    icon: "🚀",
    title: "Innovator",
    description: "Submitted a project",
  },
  {
    icon: "🏆",
    title: "Competitor",
    description: "Participated in a competition",
  },
  {
    icon: "🎓",
    title: "Learner",
    description: "Completed a workshop",
  },
  {
    icon: "🤝",
    title: "Team Player",
    description: "Participated in a team activity",
  },
]

const activities = [
  {
    title: "Technical Workshop",
    type: "Workshop",
    points: "+50 XP",
  },
  {
    title: "Project Submission",
    type: "Innovation",
    points: "+100 XP",
  },
  {
    title: "Coding Challenge",
    type: "Competition",
    points: "+75 XP",
  },
]

function StudentDashboard() {
  const xp = 720
  const nextLevel = 1000
  const progress = (xp / nextLevel) * 100

  return (
    <section
      id="dashboard"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Student Portal
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your
            <span className="text-blue-500"> Journey</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Track your participation, achievements, activities
            and progress within the ETC community.
          </p>

        </div>

        {/* Profile Card */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

          <div className="grid gap-8 p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">

            {/* Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold">
                HK
              </div>
            </div>

            {/* Student information */}
            <div className="text-center lg:text-left">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Student Profile
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                Himanshu Kukde
              </h3>

              <p className="mt-1 text-slate-400">
                ENTC • 3rd Year
              </p>

              <div className="mt-5">

                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-400">
                    Level 7
                  </span>

                  <span className="text-blue-400">
                    {xp} / {nextLevel} XP
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                  <div
                    className="h-full rounded-full bg-blue-600 transition-all"
                    style={{ width: `${progress}%` }}
                  />

                </div>

              </div>

            </div>

            {/* Points */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-center">

              <p className="text-sm text-slate-400">
                Total XP
              </p>

              <p className="mt-1 text-4xl font-bold text-blue-400">
                {xp}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Keep going!
              </p>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-3xl font-bold">12</p>
            <p className="mt-1 text-sm text-slate-400">
              Events Joined
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-3xl font-bold">4</p>
            <p className="mt-1 text-sm text-slate-400">
              Projects
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-3xl font-bold">8</p>
            <p className="mt-1 text-sm text-slate-400">
              Workshops
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-3xl font-bold">4</p>
            <p className="mt-1 text-sm text-slate-400">
              Badges
            </p>
          </div>

        </div>

        {/* Lower sections */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* Badges */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  Achievements
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Your Badges
                </h3>
              </div>

              <span className="text-sm text-slate-500">
                4 earned
              </span>

            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">

              {badges.map((badge) => (

                <div
                  key={badge.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-center transition hover:border-blue-500/40"
                >

                  <div className="text-4xl">
                    {badge.icon}
                  </div>

                  <h4 className="mt-3 font-bold">
                    {badge.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {badge.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Activity */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Recent Activity
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Your Contributions
            </h3>

            <div className="mt-7 space-y-4">

              {activities.map((activity) => (

                <div
                  key={activity.title}
                  className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4"
                >

                  <div>

                    <h4 className="font-semibold">
                      {activity.title}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {activity.type}
                    </p>

                  </div>

                  <span className="font-bold text-blue-400">
                    {activity.points}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Leaderboard */}
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-7">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Community
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Student Leaderboard
              </h3>

            </div>

            <p className="text-sm text-slate-500">
              Top contributors
            </p>

          </div>

          <div className="mt-7 space-y-3">

            {[
              ["01", "Student One", "1250 XP"],
              ["02", "Student Two", "1100 XP"],
              ["03", "Himanshu Kukde", "720 XP"],
              ["04", "Student Four", "650 XP"],
            ].map(([rank, name, score]) => (

              <div
                key={rank}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4"
              >

                <span className="w-8 text-sm font-bold text-blue-400">
                  {rank}
                </span>

                <div className="flex-1">
                  <p className="font-semibold">
                    {name}
                  </p>
                </div>

                <span className="text-sm font-semibold text-slate-400">
                  {score}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default StudentDashboard