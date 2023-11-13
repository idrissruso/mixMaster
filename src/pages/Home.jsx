import Cart from '../components/Cart'
import SearchBar from '../components/SearchBar'

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
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
  )
}

export default Home
