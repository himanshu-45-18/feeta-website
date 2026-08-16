function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        {/* =========================================
            BRAND
        ========================================== */}

        <div>
          <p className="text-lg font-bold">
            FEETA <span className="text-blue-500">× ISF</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            ETC Student Community
          </p>
        </div>


        {/* =========================================
            COLLEGE
        ========================================== */}

        <div className="text-center text-sm text-slate-500 md:text-right">

          <p>
            S. B. Jain Institute of Technology,
          </p>

          <p>
            Management & Research
          </p>

        </div>

      </div>


      {/* =========================================
          COPYRIGHT
      ========================================== */}

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center">

        <p className="text-xs text-slate-600">
          © 2026 FEETA × ISF. All rights reserved.
        </p>


        {/* =========================================
            DEVELOPER CREDIT
        ========================================== */}

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-700 transition-colors duration-300 hover:text-slate-500">
          Crafted by{" "}
          <span className="font-semibold text-slate-600 transition-colors duration-300 hover:text-blue-400">
            Himanshu Kukde
          </span>
        </p>

      </div>

    </footer>
  )
}

export default Footer