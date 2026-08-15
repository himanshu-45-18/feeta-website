function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Connect With
            <span className="text-blue-600"> ETC Forum</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have a question, suggestion or want to participate
            in our activities? Get in touch with the ETC Forum.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition group-hover:bg-blue-600">
              📧
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Email
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              your-email@example.com
            </p>
          </a>

          {/* Location */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
              📍
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Location
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              ETC Department
            </p>
          </div>

          {/* Social Media */}
          <a
            href="#"
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition group-hover:bg-blue-600">
              📱
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Social Media
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Follow our updates
            </p>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact