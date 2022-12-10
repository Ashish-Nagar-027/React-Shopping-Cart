import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='Logo'>Logo</div>
      <div className='nav-links'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header