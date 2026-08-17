import { useState } from "react"

// =====================================================
// FACULTY DATA
// =====================================================

const faculty = [
  {
    name: "Dr. Abhay Kasetwar",
    role: "Professor & HoD",
    joiningDate: "27/10/14",
    qualification: "Ph.D (Digital Technology)",
    experience: "12+ Years",
    areaOfInterest: "Signal Processing, VLSI",
    association: "Regular",
    email: "hodetc@sbjit.edu.in",
    isHod: true,
  },

  {
    name: "Dr. Rahul Pethe",
    role: "Associate Professor",
    joiningDate: "01/03/2023",
    qualification: "Ph.D",
    experience: "20+ Years",
    areaOfInterest:
      "Embedded Systems, IoT, WSN, CCN, Image Processing, Big Data, Web Development",
    association: "Regular",
    email: "rahulpethe@sbjit.edu.in",
  },

  {
    name: "Dr. Mohammad Waseem Khanooni",
    role: "Assistant Professor",
    joiningDate: "05/11/14",
    qualification: "Ph.D VLSI",
    experience: "18.6+ Years",
    areaOfInterest: "Digital Design",
    association: "Regular",
    email: "mwkhanooni@sbjit.edu.in",
  },

  {
    name: "Dr. Parag Vinod Puranik",
    role: "Assistant Professor",
    joiningDate: "13/07/2023",
    qualification: "Ph.D. (Biomedical Signal Processing)",
    experience: "15+ Years",
    areaOfInterest:
      "Signal Processing, Biomedical Signal Processing",
    association: "Regular",
    email: "paragpuranik@sbjit.edu.in",
  },

  {
    name: "Dr. Sagar Pradhan",
    role: "Assistant Professor",
    joiningDate: "21/05/2018",
    qualification: "Ph.D (Pursuing), M.Tech (ETC)",
    experience: "8.6+ Years",
    areaOfInterest:
      "Wireless Sensor Networks, Internet of Things, Electromagnetic, Antenna and Wave Propagation",
    association: "Regular",
    email: "sagarpaddhan@sbjit.edu.in",
  },

  {
    name: "Prof. Vivek Deshmukh",
    role: "Assistant Professor",
    joiningDate: "11/06/2009",
    qualification: "M.Tech (Electronics)",
    experience: "15.6+ Years",
    areaOfInterest:
      "System Programming, OS, Computer Networks",
    association: "Regular",
    email: "vivekdeshmukh@sbjit.edu.in",
  },

  {
    name: "Prof. Mohammed Akram",
    role: "Assistant Professor",
    joiningDate: "01/10/2012",
    qualification: "M.Tech, Ph.D (Pursuing)",
    experience: "10.6+ Years",
    areaOfInterest: "RF and Microwave",
    association: "Regular",
    email: "waseemakram@sbjit.edu.in",
  },

  {
    name: "Prof. Shailesh M. Sakhare",
    role: "Assistant Professor",
    joiningDate: "20/09/2022",
    qualification:
      "M.Tech. (Electronics), Ph.D (Pursuing)",
    experience: "8+ Years",
    areaOfInterest: "RF and Microwave",
    association: "Regular",
    email: "shaileshsakhare@sbjit.edu.in",
  },

  {
    name: "Prof. Ayushi Jaiswal",
    role: "Assistant Professor",
    joiningDate: "30/06/2017",
    qualification:
      "M.E (Embedded System & Computing), Ph.D (Pursuing)",
    experience: "9.6+ Years",
    areaOfInterest: "Embedded System, IoT",
    association: "Regular",
    email: "ayushijaiswal@sbjit.edu.in",
  },

  {
    name: "Ms. Vijetalaxmi A Hegde",
    role: "Assistant Professor",
    joiningDate: "10/08/2022",
    qualification: "M.Tech, Ph.D (Pursuing)",
    experience: "10+ Years",
    areaOfInterest: "Digital Design",
    association: "Regular",
    email: "laxmi.vijeta@sbjit.edu.in",
  },

  {
    name: "Ms. Chaitali Darode",
    role: "Assistant Professor",
    joiningDate: "08/08/2022",
    qualification: "M.Tech, Ph.D (Pursuing)",
    experience: "8+ Years",
    areaOfInterest:
      "C, C++, Python, SQL, HTML, Microprocessor, Microcontroller, Digital Circuit",
    association: "Regular",
    email: "chaitalidarode@sbjit.edu.in",
  },

  {
    name: "Prof. Irfan Javed",
    role: "Assistant Professor",
    joiningDate: "28/08/2023",
    qualification: "M.Tech",
    experience: "11+ Years",
    areaOfInterest: "Electronic and Telecommunication",
    association: "Regular",
    email: "irfanjaved@sbjit.edu.in",
  },
]


// =====================================================
// FORUM INCHARGE
// =====================================================

const ayushi = {
  name: "Prof. Ayushi Jaiswal",
  role: "Forum Incharge",
  qualification:
    "M.E (Embedded System & Computing), Ph.D (Pursuing)",
  experience: "9.6+ Years",
  areaOfInterest: "Embedded System, IoT",
  email: "ayushijaiswal@sbjit.edu.in",
}


// =====================================================
// MENTORS
// =====================================================

const mentors = [
  {
    name: "Chaitanya Wankhede",
    role: "Mentor",
  },

  {
    name: "Ayushi Mankar",
    role: "Mentor",
  },

  {
    name: "Soumya Bawane",
    role: "Mentor",
  },

  {
    name: "Krish Sarode",
    role: "Mentor",
  },
]


// =====================================================
// FEETA — 2025-2026
// =====================================================

const feeta2025 = [
  {
    name: "Tushar Thakare",
    role: "President",
    year: "3rd Year",
  },

  {
    name: "Divyani Daware",
    role: "Vice President - FEETA/Clubs",
    year: "3rd Year",
  },

  {
    name: "Prathmesh Kharalkar",
    role: "Secretary",
    year: "3rd Year",
  },

  {
    name: "Tanvi Wankhede",
    role: "Joint Secretary",
    year: "2nd Year",
  },

  {
    name: "Triveni Naik",
    role: "Treasurer",
    year: "3rd Year",
  },

  {
    name: "Pratham Banode",
    role: "Joint Treasurer",
    year: "2nd Year",
  },

  {
    name: "Vansh Gawande",
    role: "Event Manager",
    year: "3rd Year",
  },

  {
    name: "Harsh Thombre",
    role: "Technical Head",
    year: "3rd Year",
  },

  {
    name: "Vidisha Bhadang",
    role: "PRO / Invitation & Reception Head",
    year: "3rd Year",
  },

  {
    name: "Piyush Bawankar",
    role: "Sports Head",
    year: "3rd Year",
  },

  {
    name: "Somesh Khangare",
    role: "Discipline Head",
    year: "3rd Year",
  },

  {
    name: "Sujal Jangilwar",
    role: "Media Head",
    year: "2nd Year",
  },

  {
    name: "Sidhesh Hedau",
    role: "Media Head",
    year: "2nd Year",
  },

  {
    name: "Yash Gore",
    role: "Design Head",
    year: "2nd Year",
  },

  {
    name: "Vidhi Chavhan",
    role: "Joint Event Manager",
    year: "2nd Year",
  },

  {
    name: "Spandan Ingale",
    role: "Joint Technical Head",
    year: "2nd Year",
  },

  {
    name: "Dakshata Kadu",
    role: "Joint Technical Head",
    year: "2nd Year",
  },

  {
    name: "Vedanti Chandore",
    role: "Joint Invitation & Reception / PRO Head",
    year: "2nd Year",
  },

  {
    name: "Chetna Kamdi",
    role: "Joint Discipline Head",
    year: "2nd Year",
  },

  {
    name: "Vedant Zilpe",
    role: "Joint Sports Head",
    year: "2nd Year",
  },

  {
    name: "Mayank Chandrakapure",
    role: "Student Coordinator",
    year: "2nd Year",
  },

  {
    name: "Harshit Masram",
    role: "Student Coordinator",
    year: "2nd Year",
  },
]


// =====================================================
// FEETA — 2024-2025
// =====================================================

const feeta2024 = []


// =====================================================
// ISF — 2025-2026
// =====================================================

const isf2025 = [
  {
    name: "Yash Site",
    role: "Vice President - ISF",
    year: "3rd Year",
  },

  {
    name: "Himanshu Kukde",
    role: "Member",
    year: "3rd Year",
    image: "/members/himanshu.png",
  },

  {
    name: "Awdhesh Chorgade",
    role: "Member",
    year: "3rd Year",
  },

  {
    name: "Yash Makade",
    role: "Member",
    year: "3rd Year",
  },

  {
    name: "Vaibhav Shete",
    role: "Member",
    year: "3rd Year",
  },

  {
    name: "Soham Nagmote",
    role: "Member",
    year: "3rd Year",
  },

  {
    name: "Himanshu Lokhande",
    role: "Member",
    year: "3rd Year",
  },

  {
    name: "Samiksha Thakare",
    role: "Member",
    year: "3rd Year",
  },

  {
    name: "Aaruni Pisal",
    role: "Member",
    year: "2nd Year",
  },

  {
    name: "Nikhil Shelke",
    role: "Member",
    year: "2nd Year",
  },

  {
    name: "Sumedha Indurkar",
    role: "Member",
    year: "2nd Year",
  },
]


// =====================================================
// ISF — 2024-2025
// =====================================================

const isf2024 = []


// =====================================================
// INITIALS
// =====================================================

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}


// =====================================================
// FACULTY CARD
// =====================================================

function FacultyCard({ member, index }) {
  const initials = getInitials(member.name)

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        ${
          member.isHod
            ? "border-blue-500/60 shadow-xl shadow-blue-500/10"
            : "border-slate-800"
        }
        bg-slate-900
        opacity-0
        animate-[teamCardIn_0.8s_ease-out_forwards]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-blue-500/60
        hover:shadow-2xl
        hover:shadow-blue-500/10
      `}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >

      {/* Animated glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-blue-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-blue-500/15
          group-hover:scale-150
        "
      />

      {/* Photo */}

      <div
        className="
          relative
          flex
          h-80
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-br
          from-slate-800
          via-slate-900
          to-slate-950
        "
      >

        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="
              relative
              z-10
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              relative
              z-10
              flex
              h-40
              w-40
              items-center
              justify-center
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              text-4xl
              font-bold
              text-blue-400
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:border-blue-400
            "
          >
            {initials}
          </div>
        )}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {member.isHod && (
          <div
            className="
              absolute
              left-5
              top-5
              z-30
              rounded-full
              border
              border-blue-400/30
              bg-blue-500/15
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-blue-300
              backdrop-blur-md
            "
          >
            HOD
          </div>
        )}

      </div>


      {/* Details */}

      <div className="relative z-20 p-6">

        <h3
          className="
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {member.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-blue-400">
          {member.role}
        </p>

        <div className="mt-5 space-y-3 text-sm">

          <div>
            <span className="text-slate-500">
              Joining Date
            </span>

            <p className="mt-1 text-slate-300">
              {member.joiningDate}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Qualification
            </span>

            <p className="mt-1 text-slate-300">
              {member.qualification}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Experience
            </span>

            <p className="mt-1 text-slate-300">
              {member.experience}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Area of Interest
            </span>

            <p className="mt-1 leading-6 text-slate-300">
              {member.areaOfInterest}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Association
            </span>

            <p className="mt-1 text-slate-300">
              {member.association}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Email
            </span>

            <a
              href={`mailto:${member.email}`}
              className="
                mt-1
                block
                break-all
                text-blue-400
                transition-colors
                hover:text-cyan-400
              "
            >
              {member.email}
            </a>
          </div>

        </div>

        <div className="mt-6 h-px w-full bg-slate-800">

          <div
            className="
              h-full
              w-0
              bg-gradient-to-r
              from-blue-500
              to-cyan-400
              transition-all
              duration-700
              group-hover:w-full
            "
          />

        </div>

      </div>

    </div>
  )
}


// =====================================================
// MEMBER CARD
// =====================================================

function MemberCard({ member, index }) {
  const initials = getInitials(member.name)

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        opacity-0
        animate-[teamCardIn_0.8s_ease-out_forwards]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:scale-[1.02]
        hover:border-blue-500/60
        hover:shadow-2xl
        hover:shadow-blue-500/15
      "
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-blue-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-blue-500/20
          group-hover:scale-150
        "
      />

      {/* Photo */}

      <div
        className="
          relative
          flex
          h-72
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-br
          from-slate-800
          via-slate-900
          to-slate-950
        "
      >

        <div
          className="
            absolute
            h-44
            w-44
            rounded-full
            border
            border-blue-500/10
            transition-all
            duration-700
            group-hover:h-56
            group-hover:w-56
            group-hover:border-blue-500/30
          "
        />

        <div
          className="
            absolute
            h-32
            w-32
            rounded-full
            border
            border-cyan-400/10
            transition-all
            duration-700
            group-hover:h-44
            group-hover:w-44
            group-hover:border-cyan-400/30
          "
        />

        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="
              relative
              z-10
              h-full
              w-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        ) : (
          <div
            className="
              relative
              z-10
              flex
              h-32
              w-32
              items-center
              justify-center
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              text-4xl
              font-bold
              text-blue-400
              transition-all
              duration-500
              group-hover:scale-125
              group-hover:border-blue-400
              group-hover:bg-blue-500/20
            "
          >
            {initials}
          </div>
        )}

        <div
          className="
            absolute
            inset-0
            z-20
            bg-gradient-to-t
            from-slate-950
            via-slate-950/20
            to-transparent
            opacity-60
            transition-opacity
            duration-500
            group-hover:opacity-80
          "
        />

      </div>


      {/* Details */}

      <div className="relative z-30 p-6">

        <h3
          className="
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {member.name}
        </h3>

        <p
          className="
            mt-2
            text-sm
            font-semibold
            leading-6
            text-blue-400
          "
        >
          {member.role}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {member.year}
        </p>

        <div className="mt-5 h-px w-full bg-slate-800">

          <div
            className="
              h-full
              w-0
              bg-gradient-to-r
              from-blue-500
              to-cyan-400
              transition-all
              duration-700
              group-hover:w-full
            "
          />

        </div>

      </div>

    </div>
  )
}


// =====================================================
// MENTOR CARD
// =====================================================

function MentorCard({ mentor, index }) {
  const initials = getInitials(mentor.name)

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        opacity-0
        animate-[teamCardIn_0.8s_ease-out_forwards]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-blue-500/60
        hover:shadow-2xl
        hover:shadow-blue-500/15
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >

      {/* Blue glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          bg-blue-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-blue-500/20
          group-hover:scale-150
        "
      />

      {/* Large photo placeholder */}

      <div
        className="
          relative
          flex
          h-72
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-br
          from-slate-800
          via-slate-900
          to-slate-950
        "
      >

        <div
          className="
            absolute
            h-52
            w-52
            rounded-full
            border
            border-blue-500/10
            transition-all
            duration-700
            group-hover:h-64
            group-hover:w-64
            group-hover:border-blue-500/30
          "
        />

        <div
          className="
            absolute
            h-36
            w-36
            rounded-full
            border
            border-cyan-400/10
            transition-all
            duration-700
            group-hover:h-48
            group-hover:w-48
            group-hover:border-cyan-400/30
          "
        />

        <div
          className="
            relative
            z-10
            flex
            h-36
            w-36
            items-center
            justify-center
            rounded-full
            border
            border-blue-400/30
            bg-blue-500/10
            text-4xl
            font-black
            text-blue-400
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-blue-400
            group-hover:bg-blue-500/20
          "
        >
          {initials}
        </div>

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-transparent
            to-transparent
            opacity-70
          "
        />

      </div>


      {/* Mentor information */}

      <div className="relative z-20 p-6 text-center">

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-blue-400
          "
        >
          Mentor
        </p>

        <h3
          className="
            mt-3
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {mentor.name}
        </h3>

        <div className="mx-auto mt-5 h-px w-full bg-slate-800">

          <div
            className="
              h-full
              w-0
              bg-gradient-to-r
              from-blue-500
              to-cyan-400
              transition-all
              duration-700
              group-hover:w-full
            "
          />

        </div>

      </div>

    </div>
  )
}


// =====================================================
// FORUM INCHARGE
// =====================================================

function ForumIncharge() {
  return (
    <div
      className="
        group
        relative
        mx-auto
        mb-12
        max-w-3xl
        overflow-hidden
        rounded-3xl
        border
        border-blue-500/40
        bg-gradient-to-br
        from-blue-500/10
        via-slate-900
        to-slate-950
        p-6
        shadow-2xl
        shadow-blue-500/10
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-400/70
        hover:shadow-blue-500/20
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-blue-500/10
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
        "
      />

      <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

        <div
          className="
            flex
            h-32
            w-32
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-blue-400/40
            bg-blue-500/10
            text-3xl
            font-bold
            text-blue-400
            shadow-lg
            shadow-blue-500/10
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-blue-400
          "
        >
          AJ
        </div>

        <div>

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-blue-400
            "
          >
            Forum Incharge
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {ayushi.name}
          </h3>

          <p className="mt-1 text-sm font-semibold text-blue-400">
            {ayushi.role}
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {ayushi.qualification}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {ayushi.areaOfInterest}
          </p>

          <a
            href={`mailto:${ayushi.email}`}
            className="
              mt-2
              inline-block
              text-sm
              text-blue-400
              transition-colors
              hover:text-cyan-400
            "
          >
            {ayushi.email}
          </a>

        </div>

      </div>

    </div>
  )
}


// =====================================================
// YEAR SELECTOR
// =====================================================

function YearSelector({ year, setYear }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">

      <button
        type="button"
        onClick={() => setYear("2025")}
        className={`
          rounded-full
          border
          px-6
          py-3
          text-sm
          font-semibold
          transition-all
          duration-300
          ${
            year === "2025"
              ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
              : "border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-500/50 hover:text-white"
          }
        `}
      >
        2025–2026
      </button>

      <button
        type="button"
        onClick={() => setYear("2024")}
        className={`
          rounded-full
          border
          px-6
          py-3
          text-sm
          font-semibold
          transition-all
          duration-300
          ${
            year === "2024"
              ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
              : "border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-500/50 hover:text-white"
          }
        `}
      >
        2024–2025
      </button>

    </div>
  )
}


// =====================================================
// YEAR MEMBERS
// =====================================================

function YearMembers({ members, type }) {

  if (members.length === 0) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-slate-700
          bg-slate-900/50
          px-6
          py-16
          text-center
        "
      >

        <div className="text-4xl">
          📚
        </div>

        <h3 className="mt-4 text-xl font-bold text-white">
          Past Members
        </h3>

        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
          Past {type} members for this academic year will be added here.
        </p>

      </div>
    )
  }

  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >

      {members.map((member, index) => (
        <MemberCard
          key={`${member.name}-${member.role}-${index}`}
          member={member}
          index={index}
        />
      ))}

    </div>
  )
}


// =====================================================
// TEAM
// =====================================================

function Team() {

  const [activeSection, setActiveSection] = useState("faculty")

  const [feetaYear, setFeetaYear] = useState("2025")

  const [isfYear, setIsfYear] = useState("2025")


  const feetaMembers =
    feetaYear === "2025"
      ? feeta2025
      : feeta2024


  const isfMembers =
    isfYear === "2025"
      ? isf2025
      : isf2024


  return (
    <section
      id="team"
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-6
        py-24
      "
    >

      {/* =================================================
          BACKGROUND ANIMATIONS
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-20
          h-96
          w-96
          rounded-full
          bg-blue-600/5
          blur-3xl
          animate-[teamOrb_8s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          h-96
          w-96
          rounded-full
          bg-cyan-500/5
          blur-3xl
          animate-[teamOrb2_10s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/3
          h-72
          w-72
          rounded-full
          bg-blue-500/5
          blur-3xl
          animate-[teamOrb3_12s_ease-in-out_infinite]
        "
      />


      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-400
              opacity-0
              animate-[fadeUp_0.8s_ease-out_forwards]
            "
          >
            Our People
          </p>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.2s_forwards]
              sm:text-5xl
            "
          >
            Meet the{" "}
            <span className="text-blue-500">
              Team
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-400
              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.4s_forwards]
            "
          >
            Meet the faculty, students, mentors and members
            who contribute to the ETC community.
          </p>

        </div>


        {/* =================================================
            SECTION BUTTONS
        ================================================= */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {["faculty", "feeta", "isf", "mentors"].map((section) => {

            const label =
              section === "faculty"
                ? "Faculty"
                : section === "feeta"
                ? "FEETA"
                : section === "isf"
                ? "ISF"
                : "Mentors"

            return (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`
                  rounded-full
                  border
                  px-8
                  py-3
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  ${
                    activeSection === section
                      ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-500/50 hover:text-white"
                  }
                `}
              >
                {label}
              </button>
            )
          })}

        </div>


        {/* =================================================
            FACULTY
        ================================================= */}

        {activeSection === "faculty" && (
          <div className="mt-20">

            <div className="mb-10 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Department
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Faculty
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Faculty members of the Electronics and Telecommunication
                Engineering department.
              </p>

            </div>


            {/* HOD */}

            <div className="mb-16">

              <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Head of Department
              </p>

              <div className="mx-auto max-w-md">

                <FacultyCard
                  member={faculty[0]}
                  index={0}
                />

              </div>

            </div>


            {/* FACULTY MEMBERS */}

            <div>

              <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                Faculty Members
              </p>

              <div
                className="
                  grid
                  gap-6
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >

                {faculty.slice(1).map((member, index) => (
                  <FacultyCard
                    key={member.name}
                    member={member}
                    index={index + 1}
                  />
                ))}

              </div>

            </div>

          </div>
        )}


        {/* =================================================
            FEETA
        ================================================= */}

        {activeSection === "feeta" && (
          <div className="mt-20">

            <div className="mb-10 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                FEETA
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                FEETA Team
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Forum members responsible for student activities,
                events, coordination and departmental initiatives.
              </p>

            </div>


            <ForumIncharge />


            <YearSelector
              year={feetaYear}
              setYear={setFeetaYear}
            />


            <div className="mb-8 text-center">

              <h4 className="text-2xl font-bold text-white">

                {feetaYear === "2025"
                  ? "FEETA — 2025–2026"
                  : "FEETA — 2024–2025"}

              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Academic Year
              </p>

            </div>


            <YearMembers
              members={feetaMembers}
              type="FEETA"
            />

          </div>
        )}


        {/* =================================================
            ISF
        ================================================= */}

        {activeSection === "isf" && (
          <div className="mt-20">

            <div className="mb-10 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                ISF
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                ISF Team
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Students involved in technical activities,
                innovation, learning and engineering initiatives.
              </p>

            </div>


            <ForumIncharge />


            <YearSelector
              year={isfYear}
              setYear={setIsfYear}
            />


            <div className="mb-8 text-center">

              <h4 className="text-2xl font-bold text-white">

                {isfYear === "2025"
                  ? "ISF — 2025–2026"
                  : "ISF — 2024–2025"}

              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Academic Year
              </p>

            </div>


            <YearMembers
              members={isfMembers}
              type="ISF"
            />

          </div>
        )}


        {/* =================================================
            MENTORS
        ================================================= */}

        {activeSection === "mentors" && (
          <div className="mt-20">

            <div className="mb-12 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Guidance & Support
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Our{" "}
                <span className="text-blue-500">
                  Mentors
                </span>
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Mentors who guide and support students in
                technical activities, projects and initiatives.
              </p>

            </div>


            <div
              className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {mentors.map((mentor, index) => (
                <MentorCard
                  key={mentor.name}
                  mentor={mentor}
                  index={index}
                />
              ))}

            </div>

          </div>
        )}

      </div>

    </section>
  )
}


export default Team