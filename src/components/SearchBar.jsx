function SearchBar() {
  return (
    <form className="bg-white rounded-md drop-shadow-md flex p-9">
      <input
        type="text"
        className=" w-[30rem] bg-slate-100 border-2 border-slate-200"
      />
      <button
        type="submit"
        className="bg-green-500 px-3 py-1 text-white rounded-r-md"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
