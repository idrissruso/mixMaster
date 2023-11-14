import Button from './Button'
import { Link } from 'react-router-dom'

function Cart({ drink }) {
  const { Name, ImageURL, Info, Glass } = drink

  return (
    <div className="rounded-md bg-white  pb-5 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-500">
      <img
        src={ImageURL}
        alt={Name}
        className="w-full h-[14rem] object-cover rounded-t-md"
      />
      <div className="px-5 pt-3">
        <h1 className="text-2xl font-semibold mb-3">{Name}</h1>
        <h2 className="text-2xl tracking-wider">{Glass}</h2>
        <h2 className="text-lg mb-3 text-stone-500">{Info}</h2>
        <Link to={`/coctail/123`}>
          <Button type={'btn'}>Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
