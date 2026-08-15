function MemberCard({ member }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Member Photo */}
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Member Information */}
      <div className="p-6 text-center">

        <h3 className="text-xl font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-1 font-medium text-blue-600">
          {member.role}
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {member.year}
        </p>

      </div>
    </div>
  )
}

export default MemberCard