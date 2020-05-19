import React from 'react';
import {NavLink} from 'react-router-dom';

function AuthenticatedHeader(){
	var username =sessionStorage.getItem("username")
    return(
        <div class="header">
     <div class="heading_1">BLOGS</div>
		<ul class="menu">
			<li><NavLink className="nav-links" activeClassName="current-page" to='/home'>Home</NavLink> </li>
			<li> <NavLink className="nav-links"  activeClassName="current-page" to='/logout'>Logout</NavLink></li>
            <li> <NavLink className="nav-links"  activeClassName="current-page" to='/add'>Add Blog</NavLink></li>
			<li> <NavLink className="nav-links"  activeClassName="current-page" to='/myblogs'>My Blogs</NavLink></li>
			{console.log(username)}
            <li> Welcome {username} !!</li>		
		</ul>
	</div>
    );
}

export default AuthenticatedHeader;