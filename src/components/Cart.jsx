import Button from './Button'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className="rounded-md bg-white  pb-5 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500">
      <img
        src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
        alt=""
        className="w-full h-[14rem] object-cover rounded-t-md"
      />
      <div className="px-5 pt-3">
        <h1 className="text-3xl font-bold mb-3">code</h1>
        <h2 className="text-2xl tracking-wider">Coctail Glass</h2>
        <h2 className="text-lg mb-3 text-stone-500">Option Alcohol</h2>
        <Link to={`/coctail/123`}>
          <Button type={'btn'}>Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
