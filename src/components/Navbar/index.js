// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return isDarkTheme ? (
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
            className="website-icon"
          />
          <ul>
            <Link to="/">
              <li>
                <h1>Home</h1>
              </li>
            </Link>

            <Link to="/about">
              <li>
                <h1>About</h1>
              </li>
            </Link>
          </ul>
          <button type="button" data-testid="theme" onClick={toggleTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              className="light-theme"
            />
          </button>
        </nav>
      ) : (
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="website-icon"
          />
          <div>
            <Link to="/">
              <h1>Home</h1>
            </Link>
            <Link to="/about">About</Link>
          </div>
          <button type="button" data-testid="theme" onClick={toggleTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="light-theme"
            />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
            alt="theme"
            className="light-theme"
          />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
