function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 pt-20"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Large moving blue glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px] animate-[pulseGlow_5s_ease-in-out_infinite]" />

      {/* Cyan moving glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-[blobMove_10s_ease-in-out_infinite]" />

      {/* Blue moving glow */}
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[100px] animate-[blobMoveReverse_12s_ease-in-out_infinite]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full animate-[gridMove_20s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute left-[10%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-400 animate-[particle1_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute left-[20%] top-[65%] h-2 w-2 rounded-full bg-cyan-400 animate-[particle2_8s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-500 animate-[particle3_7s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute right-[25%] bottom-[25%] h-2 w-2 rounded-full bg-cyan-400 animate-[particle4_9s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute left-[35%] top-[15%] h-1 w-1 rounded-full bg-white/60 animate-ping" />

      <div className="pointer-events-none absolute right-[35%] bottom-[20%] h-1 w-1 rounded-full bg-white/60 animate-ping" />

      {/* =====================================================
          DECORATIVE ORBITS
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/5 animate-[orbit_18s_linear_infinite]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/5 animate-[orbitReverse_25s_linear_infinite]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">

        {/* =================================================
            THREE SEPARATE LOGOS
        ================================================== */}

        <div className="flex w-full flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12">

          {/* =================================================
              FEETA LOGO — LEFT
          ================================================== */}

          <div className="group relative opacity-0 animate-[fadeUp_1s_ease-out_0.1s_forwards]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl transition duration-700 group-hover:bg-blue-400/40" />

            {/* Rotating ring */}
            <div className="absolute -inset-3 rounded-[2rem] border border-blue-500/10 animate-[spinSlow_15s_linear_infinite]" />

            {/* FEETA Card */}
            <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-blue-500/10 backdrop-blur-xl transition duration-500 group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-blue-500/50 group-hover:shadow-blue-500/30 sm:h-40 sm:w-40 md:h-44 md:w-44">

              {/* Shine */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />

              <img
                src="/feetalogo.png"
                alt="FEETA Logo"
                className="relative z-10 h-28 w-28 object-contain transition duration-700 group-hover:scale-110 sm:h-32 sm:w-32 md:h-36 md:w-36"
              />

            </div>

            {/* Label */}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              FEETA
            </p>

          </div>


          {/* =================================================
              FORUM LOGO — CENTER / EXTRA LARGE
          ================================================== */}

          <div className="group relative opacity-0 animate-[fadeUp_1s_ease-out_0.3s_forwards]">

            {/* Large glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-500/20 blur-3xl transition duration-700 group-hover:bg-cyan-400/40" />

            {/* Large rotating outer ring */}
            <div className="absolute -inset-5 rounded-[3rem] border border-cyan-500/10 animate-[spinSlowReverse_14s_linear_infinite]" />

            {/* Second ring */}
            <div className="absolute -inset-3 rounded-[2.5rem] border border-blue-500/10 animate-[spinSlow_18s_linear_infinite]" />

            {/* BIG FORUM CARD */}
            <div className="relative flex h-48 w-80 items-center justify-center overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/90 px-8 py-6 shadow-2xl shadow-cyan-500/15 backdrop-blur-xl transition duration-500 group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/40 sm:h-56 sm:w-[360px] sm:px-10 md:h-64 md:w-[440px] md:px-12">

              {/* Inner glow */}
              <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-cyan-500/5" />

              {/* Scanning light */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[scan_4s_ease-in-out_infinite]" />

              {/* Forum Logo */}
              <img
                src="/forumlogo.png"
                alt="FEETA × ISF Forum Logo"
                className="relative z-10 h-auto w-[180px] max-w-full object-contain transition duration-700 group-hover:scale-105 sm:w-[210px] md:w-[250px]"
              />

            </div>

            {/* Label */}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              ETC FORUM
            </p>

          </div>


          {/* =================================================
              ISF LOGO — RIGHT
          ================================================== */}

          <div className="group relative opacity-0 animate-[fadeUp_1s_ease-out_0.5s_forwards]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl transition duration-700 group-hover:bg-cyan-400/40" />

            {/* Rotating ring */}
            <div className="absolute -inset-3 rounded-[2rem] border border-cyan-500/10 animate-[spinSlow_15s_linear_infinite]" />

            {/* ISF Card */}
            <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition duration-500 group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/30 sm:h-40 sm:w-40 md:h-44 md:w-44">

              {/* Shine */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />

              <img
                src="/ISFlogo.png"
                alt="ISF Logo"
                className="relative z-10 h-28 w-28 object-contain transition duration-700 group-hover:scale-110 sm:h-32 sm:w-32 md:h-36 md:w-36"
              />

            </div>

            {/* Label */}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              ISF
            </p>

          </div>

        </div>


        {/* =================================================
            LABEL
        ================================================== */}

        <div className="mt-12 opacity-0 animate-[fadeUp_1s_ease-out_0.7s_forwards]">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-400">
            Electronics & Telecommunication
          </p>

        </div>


        {/* =================================================
            TITLE
        ================================================== */}

        <h1 className="mt-5 text-4xl font-black tracking-tight text-white opacity-0 animate-[fadeUp_1s_ease-out_0.9s_forwards] sm:text-5xl md:text-6xl">

          FEETA

          <span className="mx-3 inline-block text-blue-500 animate-[pulseText_3s_ease-in-out_infinite]">
            ×
          </span>

          ISF

        </h1>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 opacity-0 animate-[fadeUp_1s_ease-out_1.1s_forwards] sm:text-lg">

          The student community of the ETC department —
          connecting students, encouraging innovation,
          technical learning and collaboration.

        </p>


        {/* =================================================
            BUTTONS
        ================================================== */}

        <div className="mt-9 flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeUp_1s_ease-out_1.3s_forwards]">

          {/* Explore Community */}
          <a
            href="#about"
            className="group relative overflow-hidden rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40"
          >

            {/* Button shine */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

            <span className="relative">
              Explore Community

              <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </span>

          </a>


          {/* Meet Team */}
          <a
            href="#team"
            className="group rounded-full border border-slate-700 bg-slate-900/60 px-7 py-3 text-sm font-semibold text-slate-300 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-white"
          >

            Meet the Team

            <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-2">
              →
            </span>

          </a>

        </div>


        {/* =================================================
            COMMITTEE BADGES
        ================================================== */}

        <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-0 animate-[fadeUp_1s_ease-out_1.5s_forwards]">

          {/* FEETA Badge */}
          <span className="group rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-400 transition duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-blue-500/20">

            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />

            FEETA — Student Forum

          </span>


          {/* ISF Badge */}
          <span className="group rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-400 transition duration-300 hover:scale-110 hover:border-cyan-500/50 hover:bg-cyan-500/20">

            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />

            ISF — Technical Committee

          </span>

        </div>


        {/* =================================================
            SCROLL
        ================================================== */}

        <a
          href="#about"
          className="mt-14 flex flex-col items-center gap-2 text-slate-600 transition duration-300 hover:text-blue-400"
        >

          <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">
            Scroll
          </span>

          <div className="relative flex h-10 w-6 justify-center rounded-full border border-slate-700 p-1">

            <div className="h-2 w-1 rounded-full bg-blue-500 animate-[scrollDot_2s_ease-in-out_infinite]" />

          </div>

        </a>

      </div>

    </section>
  )
}

export default Hero