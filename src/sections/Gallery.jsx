import { useState } from "react"

const photos = [
  {
    image: "/gallery/event1.jpg",
    title: "Technical Workshop",
    category: "Workshop",
  },
  {
    image: "/gallery/event2.jpg",
    title: "ETC Forum Activity",
    category: "Activity",
  },
  {
    image: "/gallery/event3.jpg",
    title: "Technical Event",
    category: "Event",
  },
  {
    image: "/gallery/event4.jpg",
    title: "Forum Members",
    category: "Team",
  },
]

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section
      id="gallery"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Memories
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            ETC Forum
            <span className="text-blue-600"> Gallery</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore moments, activities and memories from
            the ETC Department Forum.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {photos.map((photo, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <img
                src={photo.image}
                alt={photo.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16">

                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {photo.category}
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  {photo.title}
                </h3>

              </div>

            </button>
          ))}

        </div>

      </div>

      {/* Image Preview */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >

          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">
                {selectedPhoto.title}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                {selectedPhoto.category}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-900 shadow-lg transition hover:bg-red-500 hover:text-white"
              aria-label="Close image"
            >
              ×
            </button>

          </div>

        </div>
      )}

    </section>
  )
}

export default Gallery