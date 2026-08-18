function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center justify-center
        overflow-hidden bg-slate-950 px-6 pt-20
      "
    >

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[650px] w-[650px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-blue-600/10 blur-[140px]
          animate-[pulseGlow_5s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute -left-40 top-20
          h-[450px] w-[450px]
          rounded-full bg-cyan-500/10 blur-[120px]
          animate-[blobMove_10s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-10
          h-[500px] w-[500px]
          rounded-full bg-blue-600/10 blur-[120px]
          animate-[blobMoveReverse_12s_ease-in-out_infinite]
        "
      />


      {/* =====================================================
          MOVING PCB GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.035]
        "
      >
        <div
          className="
            h-full w-full
            animate-[gridMove_20s_linear_infinite]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>


      {/* =====================================================
          PCB CIRCUIT TRACE - LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          left-[5%] top-[30%]
          opacity-30
        "
      >
        <div
          className="
            h-px w-32 bg-cyan-400
            animate-[circuitPulse_3s_ease-in-out_infinite]
          "
        />

        <div className="ml-20 h-16 w-px bg-cyan-400" />

        <div className="ml-20 h-px w-24 bg-cyan-400" />

        <div
          className="
            ml-44 -mt-2 h-2 w-2
            rounded-full bg-cyan-400
            animate-pulse
          "
        />
      </div>


      {/* =====================================================
          PCB CIRCUIT TRACE - RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          right-[5%] top-[42%]
          opacity-30
        "
      >
        <div className="h-px w-28 bg-blue-400" />

        <div className="ml-28 h-20 w-px bg-blue-400" />

        <div className="ml-28 h-px w-20 bg-blue-400" />

        <div
          className="
            ml-48 -mt-2 h-2 w-2
            rounded-full bg-blue-400
            animate-pulse
          "
        />
      </div>


      {/* =====================================================
          FLOATING IC
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          left-[8%] top-[17%]
          h-16 w-20
          rounded-lg
          border border-cyan-400/20
          bg-slate-900/70
          shadow-lg shadow-cyan-500/10
          animate-[componentFloat1_7s_ease-in-out_infinite]
        "
      >

        <div className="absolute inset-x-3 top-3 h-2 rounded bg-cyan-400/30" />

        <div className="absolute inset-x-3 top-7 h-2 rounded bg-blue-400/20" />

        <div className="absolute inset-x-3 top-11 h-1 rounded bg-cyan-400/20" />

        <span className="absolute -left-2 top-2 h-2 w-2 rounded-full bg-cyan-400/50" />

        <span className="absolute -left-2 top-8 h-2 w-2 rounded-full bg-cyan-400/50" />

        <span className="absolute -right-2 top-2 h-2 w-2 rounded-full bg-cyan-400/50" />

        <span className="absolute -right-2 top-8 h-2 w-2 rounded-full bg-cyan-400/50" />

      </div>


      {/* =====================================================
          RESISTOR
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          right-[10%] top-[18%]
          flex items-center
          opacity-50
          animate-[componentFloat2_8s_ease-in-out_infinite]
        "
      >

        <div className="h-px w-8 bg-slate-500" />

        <div
          className="
            relative h-5 w-16
            rounded-md
            border border-slate-500/40
            bg-slate-800
          "
        >

          <span className="absolute left-3 top-0 h-full w-1 bg-blue-400/50" />

          <span className="absolute left-6 top-0 h-full w-1 bg-cyan-400/50" />

          <span className="absolute left-9 top-0 h-full w-1 bg-blue-400/40" />

          <span className="absolute left-12 top-0 h-full w-1 bg-cyan-400/30" />

        </div>

        <div className="h-px w-8 bg-slate-500" />

      </div>


      {/* =====================================================
          DIODE
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          right-[18%] bottom-[28%]
          flex items-center
          opacity-50
          animate-[componentFloat3_7s_ease-in-out_infinite]
        "
      >

        <div className="h-px w-6 bg-slate-500" />

        <div
          className="
            relative h-5 w-12
            rounded-sm
            border border-slate-500
            bg-slate-800
          "
        >

          <div
            className="
              absolute left-5 top-0
              h-full w-1
              bg-cyan-400/60
            "
          />

          <div
            className="
              absolute left-1/2 top-1/2
              h-2 w-2
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-cyan-400/40
              animate-pulse
            "
          />

        </div>

        <div className="h-px w-6 bg-slate-500" />

      </div>


      {/* =====================================================
          CAPACITOR
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          bottom-[24%] left-[7%]
          flex items-end
          opacity-40
          animate-[componentFloat3_9s_ease-in-out_infinite]
        "
      >

        <div className="h-10 w-1 bg-cyan-400/50" />

        <div
          className="
            mx-1 h-14 w-3
            rounded
            border border-cyan-400/20
            bg-slate-700
          "
        />

        <div className="h-10 w-1 bg-cyan-400/50" />

      </div>


      {/* =====================================================
          SMALL PCB
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          bottom-[18%] right-[7%]
          h-20 w-28
          rounded-xl
          border border-emerald-400/20
          bg-emerald-950/20
          opacity-50
          animate-[componentFloat4_10s_ease-in-out_infinite]
        "
      >

        <div
          className="
            absolute left-4 top-4
            h-6 w-8
            rounded
            border border-emerald-400/20
            bg-slate-800
          "
        />

        <div
          className="
            absolute right-3 top-3
            h-2 w-2
            rounded-full
            bg-emerald-400
            animate-pulse
          "
        />

        <div
          className="
            absolute left-3 bottom-4
            h-px w-16
            bg-emerald-400/30
          "
        />

        <div
          className="
            absolute left-5 bottom-7
            h-px w-12
            bg-emerald-400/20
          "
        />

      </div>


      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          left-[18%] top-[35%]
          h-1.5 w-1.5
          rounded-full bg-blue-400
          animate-[particle1_6s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute
          left-[25%] bottom-[25%]
          h-2 w-2
          rounded-full bg-cyan-400
          animate-[particle2_8s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute
          right-[18%] top-[35%]
          h-1.5 w-1.5
          rounded-full bg-blue-500
          animate-[particle3_7s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute
          right-[28%] bottom-[25%]
          h-2 w-2
          rounded-full bg-cyan-400
          animate-[particle4_9s_ease-in-out_infinite]
        "
      />


      {/* =====================================================
          DRONE FLIGHT PATH
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]
          overflow-hidden
        "
      >

        {/* Drone */}

        <div
          className="
            absolute
            left-[-140px]
            top-[32%]
            scale-[0.65]
            sm:scale-[0.72]
            md:scale-[0.78]
            animate-[droneCrossScreen_14s_ease-in-out_infinite]
          "
        >

          {/* =================================================
              DRONE GLOW
          ================================================= */}

          <div
            className="
              absolute left-1/2 top-1/2
              h-28 w-28
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />


          {/* =================================================
              DRONE BODY
          ================================================= */}

          <div
            className="
              relative
              h-12 w-20
              rounded-xl
              border border-slate-500/70
              bg-gradient-to-br
              from-slate-700
              via-slate-800
              to-slate-950
              shadow-xl
              shadow-cyan-500/10
            "
          >

            {/* Top electronics */}

            <div
              className="
                absolute
                left-1/2 top-1
                h-7 w-10
                -translate-x-1/2
                rounded-lg
                border border-cyan-400/20
                bg-slate-900
              "
            >

              {/* Flight controller */}

              <div
                className="
                  absolute
                  left-1/2 top-1/2
                  h-4 w-6
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-sm
                  border border-cyan-400/30
                  bg-slate-950
                "
              />

              {/* LED 1 */}

              <div
                className="
                  absolute left-1 top-1
                  h-1.5 w-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-md shadow-cyan-400
                  animate-pulse
                "
              />

              {/* LED 2 */}

              <div
                className="
                  absolute right-1 top-1
                  h-1.5 w-1.5
                  rounded-full
                  bg-blue-400
                  animate-pulse
                "
              />

            </div>


            {/* =================================================
                SHORT ARMS
            ================================================= */}

            {/* Front Left */}

            <div
              className="
                absolute
                left-2 top-1/2
                h-1 w-8
                -translate-y-1/2
                origin-right
                -rotate-[28deg]
                rounded-full
                bg-slate-500
              "
            />

            {/* Front Right */}

            <div
              className="
                absolute
                right-2 top-1/2
                h-1 w-8
                -translate-y-1/2
                origin-left
                rotate-[28deg]
                rounded-full
                bg-slate-500
              "
            />

            {/* Rear Left */}

            <div
              className="
                absolute
                left-2 top-1/2
                h-1 w-8
                -translate-y-1/2
                origin-right
                rotate-[28deg]
                rounded-full
                bg-slate-500
              "
            />

            {/* Rear Right */}

            <div
              className="
                absolute
                right-2 top-1/2
                h-1 w-8
                -translate-y-1/2
                origin-left
                -rotate-[28deg]
                rounded-full
                bg-slate-500
              "
            />


            {/* =================================================
                MOTOR - FRONT LEFT
            ================================================= */}

            <div
              className="
                absolute
                -left-1 -top-4
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border border-slate-500
                bg-slate-950
              "
            >

              <div
                className="
                  absolute
                  h-px w-9
                  bg-cyan-400/70
                  animate-[propeller_0.18s_linear_infinite]
                "
              />

              <div className="h-2 w-2 rounded-full bg-cyan-400" />

            </div>


            {/* =================================================
                MOTOR - FRONT RIGHT
            ================================================= */}

            <div
              className="
                absolute
                -right-1 -top-4
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border border-slate-500
                bg-slate-950
              "
            >

              <div
                className="
                  absolute
                  h-px w-9
                  bg-blue-400/70
                  animate-[propeller_0.18s_linear_infinite]
                "
              />

              <div className="h-2 w-2 rounded-full bg-blue-400" />

            </div>


            {/* =================================================
                MOTOR - REAR LEFT
            ================================================= */}

            <div
              className="
                absolute
                -left-1 -bottom-4
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border border-slate-500
                bg-slate-950
              "
            >

              <div
                className="
                  absolute
                  h-px w-9
                  bg-cyan-400/70
                  animate-[propeller_0.18s_linear_infinite]
                "
              />

              <div className="h-2 w-2 rounded-full bg-cyan-400" />

            </div>


            {/* =================================================
                MOTOR - REAR RIGHT
            ================================================= */}

            <div
              className="
                absolute
                -right-1 -bottom-4
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border border-slate-500
                bg-slate-950
              "
            >

              <div
                className="
                  absolute
                  h-px w-9
                  bg-blue-400/70
                  animate-[propeller_0.18s_linear_infinite]
                "
              />

              <div className="h-2 w-2 rounded-full bg-blue-400" />

            </div>


            {/* =================================================
                FRONT CAMERA / SENSOR
            ================================================= */}

            <div
              className="
                absolute
                -right-2 top-1/2
                flex h-6 w-4
                -translate-y-1/2
                items-center justify-center
                rounded-r-md
                border border-slate-500
                bg-slate-800
              "
            >

              <div
                className="
                  h-2.5 w-2.5
                  rounded-full
                  bg-cyan-300
                  shadow-lg shadow-cyan-400
                  animate-pulse
                "
              />

            </div>


            {/* =================================================
                BATTERY
            ================================================= */}

            <div
              className="
                absolute
                left-3 bottom-2
                h-2.5 w-7
                rounded-sm
                border border-red-400/20
                bg-slate-950
              "
            >

              <div
                className="
                  absolute
                  left-1 top-1
                  h-0.5 w-4
                  rounded
                  bg-red-400/50
                "
              />

            </div>


            {/* =================================================
                REAR LED
            ================================================= */}

            <div
              className="
                absolute
                left-1 top-2
                h-1.5 w-2
                rounded-full
                bg-red-500
                shadow-md shadow-red-500/40
                animate-pulse
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          DECORATIVE ORBITS
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[440px] w-[440px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-blue-500/5
          animate-[orbit_18s_linear_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[540px] w-[540px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-cyan-500/5
          animate-[orbitReverse_25s_linear_infinite]
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative z-20 mx-auto
          flex max-w-5xl flex-col
          items-center text-center
        "
      >

        {/* =================================================
            THREE LOGOS
        ================================================= */}

        <div
          className="
            flex items-center justify-center
            gap-5 sm:gap-8 md:gap-12
            opacity-0
            animate-[heroLogo_1.2s_ease-out_forwards]
          "
        >

          {/* FEETA */}

          <div
            className="
              group relative
              animate-[logoFloat_5s_ease-in-out_infinite]
            "
          >

            <div
              className="
                absolute -inset-4
                rounded-2xl
                bg-blue-500/10
                blur-2xl
                transition-all duration-500
                group-hover:bg-blue-500/20
              "
            />

            <div
              className="
                relative flex h-24 w-24
                items-center justify-center
                rounded-2xl
                border border-blue-500/20
                bg-slate-900/80
                p-3
                shadow-xl
                backdrop-blur-xl
                transition-all duration-500
                group-hover:-translate-y-2
                group-hover:border-blue-500/50
                group-hover:shadow-blue-500/20
              "
            >

              <img
                src="/feetalogo.png"
                alt="FEETA"
                className="
                  h-full w-full
                  object-contain
                  transition duration-500
                  group-hover:scale-110
                "
              />

            </div>

          </div>


          {/* FORUM */}

          <div
            className="
              group relative
              animate-[logoFloat_5s_ease-in-out_0.5s_infinite]
            "
          >

            <div
              className="
                absolute -inset-6
                rounded-[2rem]
                bg-blue-500/20
                blur-3xl
                transition-all duration-700
                group-hover:bg-cyan-400/30
              "
            />

            <div
              className="
                relative flex h-40 w-40
                items-center justify-center
                rounded-[2rem]
                border border-slate-700
                bg-slate-900/90
                p-5
                shadow-2xl
                shadow-blue-500/10
                backdrop-blur-xl
                transition-all duration-500
                group-hover:-translate-y-3
                group-hover:border-blue-500/60
                group-hover:shadow-blue-500/30
              "
            >

              <div
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent via-white/10 to-transparent
                  animate-[scan_4s_ease-in-out_infinite]
                "
              />

              <img
                src="/forumlogo.png"
                alt="FEETA × ISF Forum"
                className="
                  relative h-[125px] w-[125px]
                  object-contain
                  transition duration-700
                  group-hover:scale-105
                "
              />

            </div>

          </div>


          {/* ISF */}

          <div
            className="
              group relative
              animate-[logoFloat_5s_ease-in-out_1s_infinite]
            "
          >

            <div
              className="
                absolute -inset-4
                rounded-2xl
                bg-cyan-500/10
                blur-2xl
                transition-all duration-500
                group-hover:bg-cyan-500/20
              "
            />

            <div
              className="
                relative flex h-24 w-24
                items-center justify-center
                rounded-2xl
                border border-cyan-500/20
                bg-slate-900/80
                p-3
                shadow-xl
                backdrop-blur-xl
                transition-all duration-500
                group-hover:-translate-y-2
                group-hover:border-cyan-500/50
                group-hover:shadow-cyan-500/20
              "
            >

              <img
                src="/ISFlogo.png"
                alt="ISF"
                className="
                  h-full w-full
                  object-contain
                  transition duration-500
                  group-hover:scale-110
                "
              />

            </div>

          </div>

        </div>


        {/* =================================================
            LABEL
        ================================================== */}

        <div
          className="
            mt-10
            opacity-0
            animate-[fadeUp_1s_ease-out_0.3s_forwards]
          "
        >

          <p
            className="
              text-sm font-semibold uppercase
              tracking-[0.4em]
              text-blue-400
            "
          >
            Electronics & Telecommunication
          </p>

        </div>


        {/* =================================================
            TITLE
        ================================================== */}

        <h1
          className="
            mt-5 text-4xl font-black
            tracking-tight text-white
            opacity-0
            animate-[fadeUp_1s_ease-out_0.5s_forwards]
            sm:text-5xl md:text-6xl
          "
        >

          FEETA

          <span
            className="
              mx-3 inline-block
              text-blue-500
              animate-[pulseText_3s_ease-in-out_infinite]
            "
          >
            ×
          </span>

          ISF

        </h1>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            mx-auto mt-6 max-w-2xl
            text-base leading-8
            text-slate-400
            opacity-0
            animate-[fadeUp_1s_ease-out_0.7s_forwards]
            sm:text-lg
          "
        >
          The student community of the ETC department —
          connecting students, encouraging innovation,
          technical learning and collaboration.
        </p>


        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className="
            mt-9 flex flex-wrap
            justify-center gap-4
            opacity-0
            animate-[fadeUp_1s_ease-out_0.9s_forwards]
          "
        >

          <a
            href="#about"
            className="
              group relative overflow-hidden
              rounded-full
              bg-blue-600
              px-7 py-3
              text-sm font-semibold
              text-white
              shadow-lg shadow-blue-600/20
              transition duration-300
              hover:-translate-y-1
              hover:bg-blue-500
              hover:shadow-xl
              hover:shadow-blue-500/40
            "
          >

            <span
              className="
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative">

              Explore Community

              <span
                className="
                  ml-2 inline-block
                  transition duration-300
                  group-hover:translate-x-2
                "
              >
                →
              </span>

            </span>

          </a>


          <a
            href="#team"
            className="
              group rounded-full
              border border-slate-700
              bg-slate-900/60
              px-7 py-3
              text-sm font-semibold
              text-slate-300
              backdrop-blur
              transition duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:text-white
            "
          >

            Meet the Team

            <span
              className="
                ml-2 inline-block
                transition duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>

          </a>

        </div>


        {/* =================================================
            BADGES
        ================================================== */}

        <div
          className="
            mt-12 flex flex-wrap
            justify-center gap-3
            opacity-0
            animate-[fadeUp_1s_ease-out_1.1s_forwards]
          "
        >

          <span
            className="
              group rounded-full
              border border-blue-500/20
              bg-blue-500/10
              px-4 py-2
              text-xs font-semibold
              text-blue-400
              transition duration-300
              hover:scale-110
              hover:border-blue-500/50
              hover:bg-blue-500/20
            "
          >

            <span
              className="
                mr-2 inline-block
                h-1.5 w-1.5
                rounded-full
                bg-blue-400
                animate-pulse
              "
            />

            FEETA — Student Forum

          </span>


          <span
            className="
              group rounded-full
              border border-cyan-500/20
              bg-cyan-500/10
              px-4 py-2
              text-xs font-semibold
              text-cyan-400
              transition duration-300
              hover:scale-110
              hover:border-cyan-500/50
              hover:bg-cyan-500/20
            "
          >

            <span
              className="
                mr-2 inline-block
                h-1.5 w-1.5
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            ISF — Technical Committee

          </span>

        </div>


        {/* =================================================
            SCROLL
        ================================================== */}

        <a
          href="#about"
          className="
            mt-14 flex flex-col
            items-center gap-2
            text-slate-600
            transition duration-300
            hover:text-blue-400
          "
        >

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.4em]
            "
          >
            Scroll
          </span>

          <div
            className="
              relative flex h-10 w-6
              justify-center
              rounded-full
              border border-slate-700
              p-1
            "
          >

            <div
              className="
                h-2 w-1
                rounded-full
                bg-blue-500
                animate-[scrollDot_2s_ease-in-out_infinite]
              "
            />

          </div>

        </a>

      </div>

    </section>
  )
}

export default Hero