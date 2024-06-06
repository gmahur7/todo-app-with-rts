import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id='navbar'>
        <Link to='/' className='link'>All</Link>
        <Link to='/?todos=active'className='link'>Active</Link>
        <Link to='/?todos=completed'className='link'>Completed</Link>
    </nav>
  )
}

export default NavBar