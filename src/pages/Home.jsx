import Cart from '../components/Cart'
import SearchBar from '../components/SearchBar'
import { useActionData } from 'react-router-dom'

function Home() {
  const data = useActionData()

  return (
    <div>
      <SearchBar />
      <Menu data={data} />
    </div>
  )
}

function Menu({ data }) {
  return (
    <div className="mt-[7rem] grid gap-7 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      {data
        ? data.drinks.map((drink) => (
            <Cart key={drink.strDrink} drink={drink} />
          ))
        : null}
    </div>
  )
}

export default Home
