function Input({ name }) {
  return (
    <div>
      <label htmlFor="name" className="text-sm text-slate-500">
        {name}
      </label>
      <input
        type="text"
        className="w-full  bg-slate-100 border-2 border-slate-200 "
        id={name}
      />
    </div>
  )
}

export default Input
