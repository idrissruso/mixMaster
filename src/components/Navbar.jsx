function Navbar() {
  return (
    <nav>
      <h1>MixMaster</h1>
      <NavItems />
    </nav>
  )
}

function NavItems() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>NewsLetter</li>
    </ul>
  )
}

export default Navbar
