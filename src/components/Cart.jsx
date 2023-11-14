import Button from './Button'
import { Link } from 'react-router-dom'

function Cart({ drink }) {
  const { strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink

  return (
    <div className="rounded-md bg-white  pb-5 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500">
      <img
        src={strDrinkThumb}
        alt={strDrink}
        className="w-full h-[14rem] object-cover rounded-t-md"
      />
      <div className="px-5 pt-3">
        <h1 className="text-2xl font-semibold mb-3">{strDrink}</h1>
        <h2 className="text-2xl tracking-wider">{strGlass}</h2>
        <h2 className="text-lg mb-3 text-stone-500">{strAlcoholic}</h2>
        <Link to={`/coctail/${strDrink}`}>
          <Button type={'btn'}>Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
