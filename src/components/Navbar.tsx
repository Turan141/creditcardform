import React from 'react'
import '../App.css'

export const NavbarComp: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper rem2">
        <a href="/" className="brand-logo">
          Card Provider
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">VISA</a>
          </li>
          <li>
            <a href="/">MASTERCARD</a>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  )
}
