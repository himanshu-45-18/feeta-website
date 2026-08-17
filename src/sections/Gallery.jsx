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


// =====================================================
// GALLERY CARD
// =====================================================

function GalleryCard({ item, index }) {
  return (
    <div
      className="
        gallery-card
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        opacity-0
        animate-[galleryCardReveal_0.9s_cubic-bezier(0.22,1,0.36,1)_forwards]
        transition-all
        duration-500
        hover:-translate-y-4
        hover:border-blue-300
        hover:shadow-2xl
        hover:shadow-blue-500/20
      "
      style={{
        animationDelay: `${index * 180}ms`,
      }}
    >

      {/* Card Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          z-0
          h-40
          w-40
          rounded-full
          bg-blue-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-blue-500/20
        "
      />


      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative
          h-64
          overflow-hidden
          bg-slate-900
        "
      >

        {/* Background */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-600
            via-slate-900
            to-cyan-900
            opacity-20
            transition-all
            duration-700
            group-hover:opacity-40
          "
        />


        {/* Image */}

        <img
          src={item.image}
          alt={item.title}
          className="
            relative
            z-10
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            ease-out
            group-hover:scale-110
          "
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />


        {/* Photo fallback */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-blue-600/20
            via-slate-900
            to-cyan-900/30
          "
        >

          <div className="text-center">

            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-blue-400/30
                bg-blue-500/10
                text-3xl
                animate-[galleryCamera_3s_ease-in-out_infinite]
              "
            >
              📸
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-white
                opacity-70
              "
            >
              Photo Coming Soon
            </p>

          </div>

        </div>


        {/* Dark overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-gradient-to-t
            from-slate-950/80
            via-transparent
            to-transparent
            opacity-60
            transition-all
            duration-500
            group-hover:opacity-90
          "
        />


        {/* =================================================
            MOVING SHINE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-30
            w-1/3
            -translate-x-[200%]
            skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-[500%]
          "
        />


        {/* =================================================
            CATEGORY BADGE
        ================================================= */}

        <div
          className="
            absolute
            left-5
            top-5
            z-40
            rounded-full
            border
            border-white/20
            bg-slate-950/60
            px-4
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-white
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:bg-blue-600/80
          "
        >
          {item.category}
        </div>


        {/* Corner Light */}

        <div
          className="
            absolute
            right-5
            top-5
            z-40
            h-2
            w-2
            rounded-full
            bg-cyan-400
            opacity-0
            shadow-lg
            shadow-cyan-400
            transition-all
            duration-500
            group-hover:scale-150
            group-hover:opacity-100
          "
        />

      </div>


      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div className="relative z-40 p-6">

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-blue-600
            transition-all
            duration-300
            group-hover:translate-x-1
          "
        >
          {item.category}
        </p>


        <h3
          className="
            mt-2
            text-xl
            font-bold
            text-slate-900
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:text-blue-600
          "
        >
          {item.title}
        </h3>


        {/* Animated bottom line */}

        <div className="mt-5 h-px w-full bg-slate-200">

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
// ACHIEVEMENT CARD
// =====================================================

function AchievementCard({ achievement, index }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-slate-50
        p-7
        opacity-0
        animate-[achievementReveal_0.9s_cubic-bezier(0.22,1,0.36,1)_forwards]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-blue-300
        hover:bg-white
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
      style={{
        animationDelay: `${index * 180}ms`,
      }}
    >

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-blue-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-blue-500/10
        "
      />


      {/* Number */}

      <span
        className="
          relative
          text-5xl
          font-black
          text-blue-100
          transition-all
          duration-500
          group-hover:text-blue-200
          group-hover:scale-110
        "
      >
        {achievement.number}
      </span>


      {/* Title */}

      <h4
        className="
          relative
          mt-5
          text-xl
          font-bold
          text-slate-900
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:text-blue-600
        "
      >
        {achievement.title}
      </h4>


      {/* Description */}

      <p
        className="
          relative
          mt-3
          leading-7
          text-slate-600
        "
      >
        {achievement.description}
      </p>


      {/* Animated line */}

      <div className="relative mt-6 h-1 w-12 overflow-hidden rounded-full bg-slate-200">

        <div
          className="
            h-full
            w-0
            rounded-full
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
  )
}


// =====================================================
// GALLERY
// =====================================================

function Gallery() {
  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-24
        text-slate-900
      "
    >

      {/* =================================================
          BACKGROUND ORBS
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
          animate-[galleryOrb_9s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-96
          w-96
          rounded-full
          bg-cyan-400/10
          blur-3xl
          animate-[galleryOrb2_11s_ease-in-out_infinite]
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
          bg-blue-400/5
          blur-3xl
          animate-[galleryOrb3_13s_ease-in-out_infinite]
        "
      />


      {/* =================================================
          CONTENT
      ================================================= */}

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
              text-blue-600
              opacity-0
              animate-[galleryFadeUp_0.8s_ease-out_forwards]
            "
          >
            Moments & Achievements
          </p>


          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              opacity-0
              animate-[galleryFadeUp_0.8s_ease-out_0.15s_forwards]
              sm:text-5xl
            "
          >
            Our
            <span className="text-blue-600"> Journey</span>
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
              opacity-0
              animate-[galleryFadeUp_0.8s_ease-out_0.3s_forwards]
            "
          >
            A collection of moments, activities, projects and
            achievements from the ETC student community.
          </p>

        </div>


        {/* =================================================
            GALLERY
        ================================================= */}

        <div
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}

        </div>


        {/* =================================================
            ACHIEVEMENTS
        ================================================= */}

        <div className="mt-28">


          {/* Achievement heading */}

          <div className="text-center">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-blue-600
                opacity-0
                animate-[galleryFadeUp_0.8s_ease-out_forwards]
              "
            >
              Achievements
            </p>


            <h3
              className="
                mt-3
                text-3xl
                font-bold
                opacity-0
                animate-[galleryFadeUp_0.8s_ease-out_0.2s_forwards]
                sm:text-4xl
              "
            >
              Celebrating Student Success
            </h3>

          </div>


          {/* Achievement cards */}

          <div
            className="
              mt-12
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.number}
                achievement={achievement}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Gallery