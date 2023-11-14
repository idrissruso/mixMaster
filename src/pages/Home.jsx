import Cart from '../components/Cart'
import SearchBar from '../components/SearchBar'
import { drinks } from '../../data/data'

function Home() {
  return (
    <div>
      <SearchBar />
      <Menu />
    </div>
  )
}

function Menu() {
  return (
    <div className="mt-[7rem] grid gap-7 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      {drinks.map((drink) => (
        <Cart drink={drink} key={drink.Name} />
      ))}
    </div>
  )
}

export default Home
