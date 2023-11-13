import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white flex justify-around items-center p-4">
      <h1 className="text-5xl text-green-500 font-bold">MixMaster</h1>
      <NavItems />
    </nav>
  )
}

function NavItems() {
  return (
    <ul className="flex gap-x-5">
      <li>
        <NavLink to={'/'} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/about'} exact>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={'/news'} exact>
          NewsLetter
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar
