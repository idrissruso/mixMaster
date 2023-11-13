import Button from './Button'

function SearchBar() {
  return (
    <div className="flex justify-center">
      <form className="bg-white rounded-md drop-shadow-md flex p-9 w-[30rem]">
        <input
          type="text"
          className=" w-[30rem] bg-slate-100 border-2 border-slate-200"
        />

        <Button r={true}>Search</Button>
      </form>
    </div>
  )
}

export default SearchBar
