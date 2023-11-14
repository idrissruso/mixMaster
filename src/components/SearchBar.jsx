import { Form } from 'react-router-dom'
import Button from './Button'

function SearchBar() {
  return (
    <div className="flex justify-center">
      <Form
        className="bg-white rounded-md drop-shadow-md flex p-9 w-[30rem]"
        action="/"
        method="Post"
      >
        <input
          type="text"
          className="w-[30rem] bg-slate-100 border-2 border-slate-200"
          name="search"
        />

        <Button r={true}>Search</Button>
      </Form>
    </div>
  )
}

export async function action() {
  const formData = new FormData(document.querySelector('form'))
  const search = formData.get('search')
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  )
  const data = await response.json()
  return data
}

export default SearchBar
