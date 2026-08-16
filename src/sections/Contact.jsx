function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24 text-white"
    >

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Connect with
            <span className="text-blue-500"> Us</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a question, idea, collaboration proposal or
            want to get involved with the ETC community?
            We'd love to hear from you.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <a
            href="mailto:your-email@example.com"
            className="group rounded-3xl border border-slate-800 bg-slate-950 p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
          >

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
              ✉️
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Email
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Get in touch with the committee
            </p>

          </a>

          <a
            href="#"
            className="group rounded-3xl border border-slate-800 bg-slate-950 p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
          >

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
              📸
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Instagram
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Follow our latest updates
            </p>

          </a>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
              📍
            </div>

            <h3 className="mt-5 text-xl font-bold">
              ETC Department
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              S. B. Jain Institute of Technology,
              Management & Research
            </p>

          </div>

        </div>

        <div className="mt-14 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center sm:p-12">

          <h3 className="text-2xl font-bold sm:text-3xl">
            Have an idea for the community?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Whether it's an event idea, project, collaboration
            or student initiative, share it with us.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-6 inline-block rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Contact Us →
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact