import React from 'react'
import "../Css/Nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>

<div className='nav'>

<div className='innerNav'>


<Link to="/">Home</Link>
<Link to="/about">About</Link>

</div>
</div>








    </div>
  )
}

export default Nav