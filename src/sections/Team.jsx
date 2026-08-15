import MemberCard from "../components/MemberCard"

const members = [
  {
    name: "Tushar Thakare",
    role: "President",
    year: "3rd Year",
    image: "/members/a.png",
  },

  {
    name: "Divyani Daware",
    role: "Vice President",
    year: "3rd Year",
    image: "/members/b.jpeg",
  },

  {
    name: "Himanshu Kukde",
    role: "ISF Member",
    year: "3rd Year",
    image: "/members/c.png",
  },

  {
    name: "Soham Nagmote",
    role: "ISF Member",
    year: "3rd Year",
    image: "/members/d.png",
  },
]

function Team() {
  return (
    <section
      id="team"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Team
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Meet the
            <span className="text-blue-600"> ETC Forum</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Meet the students who work together to organize
            technical activities, events and initiatives for
            the ETC department.
          </p>

        </div>

        {/* Members */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {members.map((member, index) => (
            <MemberCard
              key={index}
              member={member}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Team