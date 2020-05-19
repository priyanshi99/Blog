import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <div class="header">
     <div class="heading_1">BLOGS </div>
		<ul class="menu">
			<li><NavLink className="nav-links" activeClassName="current-page" to='/home'>Home</NavLink> </li>
			<li> <NavLink className="nav-links"  activeClassName="current-page" to='/login'>Login</NavLink></li>
		</ul>
	</div>
    );
}

export default Header;