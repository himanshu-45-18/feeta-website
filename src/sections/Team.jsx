// =====================================================
// TEAM DATA
// =====================================================

const teams = {
  officeBearers: [
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
      name: "Yash Site",
      role: "Vice President - ISF",
      year: "3rd Year",
    },
    {
      name: "Prathamesh Kharalkar",
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
      name: "Pratham Bunode",
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
  ],

  feeta: [
    {
      name: "Sujal Jangilwar",
      role: "Media Head",
      year: "2nd Year",
    },
    {
      name: "Siddhesh Hedau",
      role: "Media Head",
      year: "2nd Year",
    },
    {
      name: "Yash Gore",
      role: "Design Head",
      year: "2nd Year",
    },
    {
      name: "Vidhi Chavan",
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
      name: "Chaitanya Ramadi",
      role: "Joint Discipline Head",
      year: "2nd Year",
    },
    {
      name: "Vedant Alpe",
      role: "Joint Sports Head",
      year: "2nd Year",
    },
    {
      name: "Vaishnavi Chandekar",
      role: "Student Coordinator",
      year: "2nd Year",
    },
    {
      name: "Prathamesh Atram",
      role: "Student Coordinator",
      year: "2nd Year",
    },
    {
      name: "Nikhil Shete",
      role: "Member",
      year: "2nd Year",
    },
  ],

  isf: [
    {
      name: "Himanshu Kukde",
      role: "Member",
      year: "3rd Year",
      image: "/members/himanshu.png",
    },
    {
      name: "Rohit Gawande",
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
      name: "Himanshu Tekchande",
      role: "Member",
      year: "3rd Year",
    },
    {
      name: "Samiksha Thakare",
      role: "Member",
      year: "3rd Year",
    },
    {
      name: "Varun Pinal",
      role: "Member",
      year: "2nd Year",
    },
    {
      name: "Nikhil Shete",
      role: "Member",
      year: "2nd Year",
    },
    {
      name: "Samruddha Indurkar",
      role: "Member",
      year: "2nd Year",
    },
  ],

  mentors: [
    {
      name: "Chaitanya Wankhede",
      role: "Mentor",
      year: "4th Year",
    },
    {
      name: "Avnish Mankar",
      role: "Mentor",
      year: "4th Year",
    },
    {
      name: "Soumya Rawane",
      role: "Mentor",
      year: "4th Year",
    },
    {
      name: "Rushit Satode",
      role: "Mentor",
      year: "4th Year",
    },
  ],
}


// =====================================================
// FACULTY DATA
// =====================================================

const hod = {
  name: "Dr. Abhay Kasetwar",
  designation: "Professor & HoD",
  joiningDate: "27/10/2014",
  qualification: "Ph.D (Digital Technology)",
  experience: "12+ Years",
  area: "Signal Processing, VLSI",
  association: "Regular",
  email: "hodetc@sbjit.edu.in",

  // Add HOD photo later:
  // image: "/faculty/abhay-kasetwar.png",
}


const faculty = [
  {
    name: "Dr. Rahul Pethe",
    designation: "Associate Professor",
    joiningDate: "01/03/2023",
    qualification: "Ph.D",
    experience: "20+ Years",
    area:
      "Embedded Systems, IoT, WSN, CCN, Image Processing, Big Data, Web Development",
    association: "Regular",
    email: "rahulpethe@sbjit.edu.in",

    // image: "/faculty/rahul-pethe.png",
  },

  {
    name: "Dr. Mohammad Waseem Khanooni",
    designation: "Assistant Professor",
    joiningDate: "05/11/2014",
    qualification: "Ph.D VLSI",
    experience: "18.6+ Years",
    area: "Digital Design",
    association: "Regular",
    email: "mwkhanooni@sbjit.edu.in",

    // image: "/faculty/mohammad-waseem-khanooni.png",
  },

  {
    name: "Dr. Parag Vinod Puranik",
    designation: "Assistant Professor",
    joiningDate: "13/07/2023",
    qualification: "Ph.D. (Biomedical Signal Processing)",
    experience: "15+ Years",
    area: "Signal Processing, Biomedical Signal Processing",
    association: "Regular",
    email: "paragpuranik@sbjit.edu.in",

    // image: "/faculty/parag-puranik.png",
  },

  {
    name: "Dr. Sagar Pradhan",
    designation: "Assistant Professor",
    joiningDate: "21/05/2018",
    qualification: "Ph.D (Pursuing), M.Tech (ETC)",
    experience: "8.6+ Years",
    area:
      "Wireless Sensor Networks, Internet of Things, Electromagnetic, Antenna and Wave Propagation",
    association: "Regular",
    email: "sagarpaddhan@sbjit.edu.in",

    // image: "/faculty/sagar-pradhan.png",
  },

  {
    name: "Prof. Vivek Deshmukh",
    designation: "Assistant Professor",
    joiningDate: "11/06/2009",
    qualification: "M.Tech (Electronics)",
    experience: "15.6+ Years",
    area: "System Programming, OS, Computer Networks",
    association: "Regular",
    email: "vivekdeshmukh@sbjit.edu.in",

    // image: "/faculty/vivek-deshmukh.png",
  },

  {
    name: "Prof. Mohammed Akram",
    designation: "Assistant Professor",
    joiningDate: "01/10/2012",
    qualification: "M.Tech, Ph.D (Pursuing)",
    experience: "10.6+ Years",
    area: "RF and Microwave",
    association: "Regular",
    email: "waseemakram@sbjit.edu.in",

    // image: "/faculty/mohammed-akram.png",
  },

  {
    name: "Prof. Shailesh M. Sakhare",
    designation: "Assistant Professor",
    joiningDate: "20/09/2022",
    qualification: "M.Tech. (Electronics), Ph.D (Pursuing)",
    experience: "8+ Years",
    area: "RF and Microwave",
    association: "Regular",
    email: "shaileshsakhare@sbjit.edu.in",

    // image: "/faculty/shailesh-sakhare.png",
  },

  {
    name: "Prof. Ayushi Jaiswal",
    designation: "Assistant Professor",
    joiningDate: "30/06/2017",
    qualification: "M.E (Embedded System & Computing), Ph.D (Pursuing)",
    experience: "9.6+ Years",
    area: "Embedded System, IoT",
    association: "Regular",
    email: "ayushijaiswal@sbjit.edu.in",

    // image: "/faculty/ayushi-jaiswal.png",
  },

  {
    name: "Ms. Vijetalaxmi A Hegde",
    designation: "Assistant Professor",
    joiningDate: "10/08/2022",
    qualification: "M.Tech, Ph.D (Pursuing)",
    experience: "10+ Years",
    area: "Digital Design",
    association: "Regular",
    email: "laxmi.vijeta@sbjit.edu.in",

    // image: "/faculty/vijetalaxmi-hegde.png",
  },

  {
    name: "Ms. Chaitali Darode",
    designation: "Assistant Professor",
    joiningDate: "08/08/2022",
    qualification: "M.Tech, Ph.D (Pursuing)",
    experience: "8+ Years",
    area:
      "C, C++, Python, SQL, HTML, Microprocessor, Microcontroller, Digital Circuit",
    association: "Regular",
    email: "chaitalidarode@sbjit.edu.in",

    // image: "/faculty/chaitali-darode.png",
  },

  {
    name: "Prof. Irfan Javed",
    designation: "Assistant Professor",
    joiningDate: "28/08/2023",
    qualification: "M.Tech",
    experience: "11+ Years",
    area: "Electronic and Telecommunication",
    association: "Regular",
    email: "irfanjaved@sbjit.edu.in",

    // image: "/faculty/irfan-javed.png",
  },
]


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
      className="
        group relative overflow-hidden
        rounded-3xl
        border border-slate-800
        bg-slate-900
        opacity-0
        animate-[teamCardIn_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]
        transition-all duration-500
        hover:-translate-y-3
        hover:border-blue-500/50
        hover:shadow-2xl
        hover:shadow-blue-500/20
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >

      {/* Card Glow */}

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
          h-80
          w-full
          overflow-hidden
          bg-gradient-to-br
          from-slate-800
          via-slate-900
          to-slate-950
        "
      >

        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-56
            w-56
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-500/10
            transition-all
            duration-1000
            group-hover:h-72
            group-hover:w-72
            group-hover:border-blue-500/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-44
            w-44
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/10
            transition-all
            duration-1000
            group-hover:h-56
            group-hover:w-56
            group-hover:border-cyan-400/30
          "
        />

        {/* Photo / Initials */}

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
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              relative
              z-10
              flex
              h-full
              w-full
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                h-40
                w-40
                items-center
                justify-center
                rounded-full
                border
                border-blue-500/30
                bg-blue-500/10
                text-5xl
                font-bold
                text-blue-400
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:border-blue-400
                group-hover:bg-blue-500/20
              "
            >
              {initials}
            </div>
          </div>
        )}

        {/* Dark Gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-gradient-to-t
            from-slate-950
            via-slate-950/10
            to-transparent
          "
        />

        {/* Shine */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-30
            -translate-x-full
            skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-full
          "
        />

      </div>

      {/* Information */}

      <div className="relative z-40 p-6">

        <h3
          className="
            text-xl
            font-bold
            text-white
            transition-all
            duration-300
            group-hover:translate-x-1
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
          {member.designation}
        </p>

        <div className="mt-5 space-y-3 text-sm">

          <div>
            <p className="text-slate-500">
              Qualification
            </p>

            <p className="mt-1 text-slate-300">
              {member.qualification}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Experience
            </p>

            <p className="mt-1 text-slate-300">
              {member.experience}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Area of Interest
            </p>

            <p className="mt-1 leading-6 text-slate-300">
              {member.area}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Joining Date
            </p>

            <p className="mt-1 text-slate-300">
              {member.joiningDate}
            </p>
          </div>

        </div>

        <a
          href={`mailto:${member.email}`}
          className="
            mt-6
            block
            truncate
            border-t
            border-slate-800
            pt-4
            text-sm
            text-blue-400
            transition-colors
            hover:text-cyan-400
          "
        >
          {member.email}
        </a>

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
// HOD CARD
// =====================================================

function HODCard({ member }) {
  const initials = getInitials(member.name)

  return (
    <div
      className="
        group
        relative
        mx-auto
        max-w-5xl
        overflow-hidden
        rounded-[2rem]
        border
        border-blue-500/20
        bg-slate-900/90
        shadow-2xl
        shadow-blue-500/10
        transition-all
        duration-700
        hover:-translate-y-2
        hover:border-blue-500/50
        hover:shadow-blue-500/20
      "
    >

      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-blue-600/10
          blur-3xl
          transition-all
          duration-1000
          group-hover:scale-150
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 grid md:grid-cols-[380px_1fr]">

        {/* HOD PHOTO */}

        <div
          className="
            relative
            h-[420px]
            overflow-hidden
            bg-gradient-to-br
            from-slate-800
            via-slate-900
            to-slate-950
            md:h-full
          "
        >

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-64
              w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-blue-500/20
              transition-all
              duration-1000
              group-hover:h-80
              group-hover:w-80
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
                h-full
                w-full
                items-center
                justify-center
              "
            >
              <div
                className="
                  flex
                  h-48
                  w-48
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-500/30
                  bg-blue-500/10
                  text-6xl
                  font-bold
                  text-blue-400
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              >
                {initials}
              </div>
            </div>
          )}

          <div
            className="
              absolute
              inset-0
              z-20
              bg-gradient-to-t
              from-slate-950
              via-transparent
              to-transparent
            "
          />

        </div>

        {/* HOD DETAILS */}

        <div className="relative p-8 md:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Head of Department
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {member.name}
          </h3>

          <p className="mt-2 text-lg font-semibold text-cyan-400">
            {member.designation}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Joining Date
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {member.joiningDate}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Experience
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {member.experience}
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Qualification
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {member.qualification}
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Area of Interest
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                {member.area}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Association
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {member.association}
              </p>
            </div>

          </div>

          <a
            href={`mailto:${member.email}`}
            className="
              mt-8
              inline-flex
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-blue-400
              transition-all
              duration-300
              hover:border-blue-500/50
              hover:bg-blue-500/20
              hover:text-cyan-400
            "
          >
            {member.email}
          </a>

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
        team-card
        group relative overflow-hidden
        rounded-3xl
        border border-slate-800
        bg-slate-900
        opacity-0
        animate-[teamCardIn_0.9s_cubic-bezier(0.22,1,0.36,1)_forwards]
        transition-all duration-500
        hover:-translate-y-4
        hover:scale-[1.02]
        hover:border-blue-500/60
        hover:shadow-2xl
        hover:shadow-blue-500/20
      "
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >

      {/* Card Glow */}

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
          group-hover:scale-150
          group-hover:bg-blue-500/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-40
          w-40
          rounded-full
          bg-cyan-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-cyan-500/10
        "
      />

      {/* PHOTO */}

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
            duration-1000
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
            duration-1000
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
              group-hover:rotate-1
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
              animate-[avatarPulse_3s_ease-in-out_infinite]
              transition-all
              duration-700
              group-hover:scale-125
              group-hover:rotate-6
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
            opacity-50
            transition-all
            duration-500
            group-hover:opacity-80
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-30
            -translate-x-full
            skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-full
          "
        />

      </div>

      {/* INFORMATION */}

      <div className="relative z-40 p-6">

        <h3
          className="
            text-xl
            font-bold
            text-white
            transition-all
            duration-300
            group-hover:translate-x-1
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
// TEAM GROUP
// =====================================================

function TeamGroup({ title, description, members }) {
  return (
    <div className="mt-24">

      <div
        className="
          group
          mb-10
          opacity-0
          animate-[teamHeading_0.9s_cubic-bezier(0.22,1,0.36,1)_forwards]
        "
      >

        <div className="flex items-center gap-4">

          <div
            className="
              h-px
              w-10
              bg-blue-500
              transition-all
              duration-500
              group-hover:w-20
            "
          />

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-400
              transition-colors
              duration-300
              group-hover:text-cyan-400
            "
          >
            {title}
          </p>

        </div>

        <p
          className="
            mt-3
            max-w-2xl
            text-slate-400
            transition-colors
            duration-300
            group-hover:text-slate-300
          "
        >
          {description}
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

        {members.map((member, index) => (
          <MemberCard
            key={`${title}-${member.name}-${member.role}`}
            member={member}
            index={index}
          />
        ))}

      </div>

    </div>
  )
}


// =====================================================
// TEAM SECTION
// =====================================================

function Team() {
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

      {/* Background Glow 1 */}

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

      {/* Background Glow 2 */}

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

      {/* Background Glow 3 */}

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

      {/* Floating Particles */}

      <div className="pointer-events-none absolute left-[8%] top-[20%] h-1.5 w-1.5 rounded-full bg-blue-400 animate-[teamParticle_5s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute left-[18%] top-[55%] h-1 w-1 rounded-full bg-cyan-400 animate-[teamParticle_7s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute right-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-500 animate-[teamParticle_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute right-[20%] bottom-[20%] h-1 w-1 rounded-full bg-cyan-400 animate-[teamParticle_8s_ease-in-out_infinite]" />


      {/* CONTENT */}

      <div className="relative mx-auto max-w-7xl">

        {/* MAIN HEADING */}

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
            Meet the faculty, students and mentors who
            contribute to the ETC community through FEETA,
            ISF and other departmental initiatives.
          </p>

        </div>


        {/* =================================================
            FACULTY DETAILS
        ================================================= */}

        <div className="mt-20">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Department Faculty
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Faculty <span className="text-blue-500">Details</span>
            </h3>

            <p className="mt-4 text-slate-400">
              Meet the faculty members guiding and supporting
              the Electronics & Telecommunication department.
            </p>

          </div>


          {/* HOD */}

          <HODCard member={hod} />


          {/* Faculty */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {faculty.map((member, index) => (
              <FacultyCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}

          </div>

        </div>


        {/* =================================================
            OFFICE BEARERS
        ================================================= */}

        <TeamGroup
          title="Office Bearers"
          description="The leadership team responsible for coordinating the departmental forum and its activities."
          members={teams.officeBearers}
        />


        {/* =================================================
            FEETA
        ================================================= */}

        <TeamGroup
          title="FEETA / Clubs"
          description="Members involved in FEETA and departmental club activities."
          members={teams.feeta}
        />


        {/* =================================================
            ISF
        ================================================= */}

        <TeamGroup
          title="ISF — Technical Committee"
          description="The technical committee responsible for technical activities, learning, innovation and engineering initiatives."
          members={teams.isf}
        />


        {/* =================================================
            MENTORS
        ================================================= */}

        <TeamGroup
          title="Mentors"
          description="Senior students who provide guidance and support to the committee."
          members={teams.mentors}
        />

      </div>

    </section>
  )
}

export default Team