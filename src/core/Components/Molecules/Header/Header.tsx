import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link to={'/home'}>
          <h1>Weather on the world</h1>
        </Link>
      </div>
      <div>
        <nav>
          <ul>
            <Link to={'/search-weather'}>Search by city</Link>
            <Link to={'About-us'}>About</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
