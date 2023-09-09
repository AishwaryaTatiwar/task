import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Team from './Team';
import Alumni from './Alumni';
import Contact from './Contact';
import nav from './Navbar.css';
import img from './Images/gdsclogo.png';

const Navbar = () => {
  return (
    <Router>
<div className='shadow'>
<nav>
<ul>
<Link><img src={img} className='logo'></img></Link>
<div >
<p className='para'>GDSC RCOEM</p>
</div>
<Link to="/Contact"className='pages'>Contact</Link> &nbsp;&nbsp;
<Link to="/Alumni"className='pages'>Alumni</Link> &nbsp;&nbsp;
<Link to="/Team"className='pages'>Team</Link> &nbsp;&nbsp;
<Link to="/Events"className='pages'>Events</Link> &nbsp;&nbsp;
<Link to="/" className='pages'>Home</Link> &nbsp;&nbsp;


</ul>
 </nav>

<Routes>
<Route exact path="/" element={<Home/>}></Route>
<Route exact path="/Events" element={<Events/>}></Route>
<Route exact path="/Team" element={<Team/>}></Route>
<Route exact path="/Alumni" element={<Alumni/>}></Route>
<Route exact path="/Contact" element={<Contact/>}></Route>
</Routes></div>
</Router>
  )
}

export default Navbar
