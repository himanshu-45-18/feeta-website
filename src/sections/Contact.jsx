function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-900
        px-6
        py-24
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-96
          w-96
          rounded-full
          bg-blue-600/10
          blur-3xl
          animate-[contactOrb_8s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-96
          w-96
          rounded-full
          bg-cyan-500/10
          blur-3xl
          animate-[contactOrb2_10s_ease-in-out_infinite]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
            opacity-0
            animate-[fadeUp_0.9s_ease-out_forwards]
          "
        >
          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-400
            "
          >
            Get In Touch
          </p>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
            "
          >
            Connect with
            <span className="text-blue-500"> Us</span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-400
            "
          >
            Have a question, collaboration proposal or want
            to connect with the ETC community?
            We'd love to hear from you.
          </p>
        </div>

        {/* =====================================================
            CONTACT CARDS
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* =================================================
              EMAIL
          ================================================== */}

          <a
            href="mailto:hodetc@sbjit.edu.in"
            className="
              group
              rounded-3xl
              border
              border-slate-800
              bg-slate-950
              p-7
              text-center
              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.2s_forwards]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-blue-500/60
              hover:bg-slate-900
              hover:shadow-2xl
              hover:shadow-blue-500/10
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-500/10
                text-2xl
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
                group-hover:bg-blue-500/20
              "
            >
              ✉️
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Email
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              hodetc@sbjit.edu.in
            </p>
          </a>


          {/* =================================================
              INSTAGRAM
          ================================================== */}

          <a
            href="https://www.instagram.com/sbjainofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-3xl
              border
              border-slate-800
              bg-slate-950
              p-7
              text-center
              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.35s_forwards]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-pink-500/50
              hover:bg-slate-900
              hover:shadow-2xl
              hover:shadow-pink-500/10
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-pink-500/10
                text-2xl
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              📸
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Instagram
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Follow our latest updates
            </p>
          </a>


          {/* =================================================
              LINKEDIN
          ================================================== */}

          <a
            href="https://in.linkedin.com/school/officialsbjain/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-3xl
              border
              border-slate-800
              bg-slate-950
              p-7
              text-center
              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.5s_forwards]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-blue-500/60
              hover:bg-slate-900
              hover:shadow-2xl
              hover:shadow-blue-500/10
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-500/10
                text-2xl
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              💼
            </div>

            <h3 className="mt-5 text-xl font-bold">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Connect with us professionally
            </p>
          </a>


          {/* =================================================
              COLLEGE
          ================================================== */}

          <div
            className="
              group
              rounded-3xl
              border
              border-slate-800
              bg-slate-950
              p-7
              text-center
              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.65s_forwards]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-500/50
              hover:bg-slate-900
              hover:shadow-2xl
              hover:shadow-cyan-500/10
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-cyan-500/10
                text-2xl
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              📍
            </div>

            <h3 className="mt-5 text-xl font-bold">
              ETC Department
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              S. B. Jain Institute of Technology,
              Management & Research
            </p>
          </div>

        </div>


        {/* =====================================================
            COLLEGE DETAILS + MAP
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {/* =================================================
              COLLEGE INFORMATION
          ================================================== */}

          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-950
              p-8
              opacity-0
              animate-[fadeUp_0.9s_ease-out_0.8s_forwards]
            "
          >

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              Visit Us
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              S. B. Jain Institute of Technology,
              Management & Research
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Electronics & Telecommunication Engineering
              Department
            </p>


            {/* ADDRESS */}

            <div className="mt-7 flex gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-xl
                "
              >
                📍
              </div>

              <div>
                <p className="font-semibold">
                  Address
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Yerla Village, Kalmeshwar Road,
                  Nagpur, Maharashtra, India
                </p>
              </div>

            </div>


            {/* EMAIL */}

            <div className="mt-6 flex gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-xl
                "
              >
                ✉️
              </div>

              <div>
                <p className="font-semibold">
                  Department Email
                </p>

                <a
                  href="mailto:hodetc@sbjit.edu.in"
                  className="
                    mt-1
                    block
                    text-sm
                    text-slate-400
                    transition-colors
                    hover:text-blue-400
                  "
                >
                  hodetc@sbjit.edu.in
                </a>
              </div>

            </div>


            {/* SOCIAL LINKS */}

            <div className="mt-6 flex gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-xl
                "
              >
                🔗
              </div>

              <div>

                <p className="font-semibold">
                  Follow Us
                </p>

                <div className="mt-2 flex gap-4 text-sm">

                  <a
                    href="https://www.instagram.com/sbjainofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-slate-400
                      transition-colors
                      hover:text-pink-400
                    "
                  >
                    Instagram
                  </a>

                  <a
                    href="https://in.linkedin.com/school/officialsbjain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-slate-400
                      transition-colors
                      hover:text-blue-400
                    "
                  >
                    LinkedIn
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              GOOGLE MAP
          ================================================== */}

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-950
              opacity-0
              animate-[fadeUp_0.9s_ease-out_0.95s_forwards]
              transition-all
              duration-500
              hover:border-blue-500/40
              hover:shadow-2xl
              hover:shadow-blue-500/10
            "
          >

            <iframe
              title="S. B. Jain Institute of Technology, Management & Research"
              src="https://www.google.com/maps?q=S.%20B.%20Jain%20Institute%20of%20Technology%20Management%20and%20Research%20Nagpur&output=embed"
              className="
                h-full
                min-h-[380px]
                w-full
                border-0
              "
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact