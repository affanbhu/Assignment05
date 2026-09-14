// import './Nav.css'

// const Nav = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">

//         {/* Logo */}
//         <div className="logo">
//           <img src="/logo-text.png" alt="Dev Stack" />
//         </div>

//         {/* Navigation */}
//         <div className="nav-links">
//           <a href="#" className="active">Home</a>
//           <a href="#">Technologies</a>
//           <a href="#">Projects</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </div>

//         {/* Buttons */}
//         <div className="nav-buttons">
//           <button className="sign-in">Sign In</button>
//           <button className="sign-up">Sign Up</button>
//         </div>

//       </div>
//     </nav>
//   )
// }

// export default Nav

import { useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <div className="logo">
          <img src="/logo-text.png" alt="Dev Stack" />
        </div>

        {/* Navigation */}
        <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#" className="active">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  )
}

export default Nav
