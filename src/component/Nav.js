import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='nav-container'>
      <form className='Nav' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='search'>Search Post</label>
          <input
            id='search'
            type='text'
            placeholder='Search Post'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      </form>
      <div className='nav-menu'>
        <span className='menu'><Link to='/'>Home</Link></span>
        <span className='menu'><Link to='/post'>Post</Link></span>
        <span className='menu'><Link to='/about'>About</Link></span>
      </div>
    </nav>
  )
}

export default Nav