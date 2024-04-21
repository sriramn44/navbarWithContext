// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-logo"
              />
              <h1>Home</h1>
            </div>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-logo"
              />
              <h1>Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
