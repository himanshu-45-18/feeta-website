function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-900"
    >

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              About Us
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Building a stronger
              <span className="text-blue-600">
                {" "}ETC community.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-lg leading-8 text-slate-600">
              FEETA and ISF contribute to the growth of
              Electronics & Telecommunication students through
              technical activities, student initiatives,
              innovation, collaboration and meaningful
              experiences.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              While ISF focuses on technical activities and
              opportunities, FEETA works on its own initiatives
              to support and connect the student community.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About