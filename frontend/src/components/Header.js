//import React module
import React from 'react';

// Navbar
function Header() {
    return (
        <div className='navbar-div'>
            <nav className='navbar navbar-expand-lg'>
                <div className='dropdownMenu'>
                    <a class='navbar-brand header-logo' href='#Home'>My Store</a>
                </div>
                <ul class='navbar-nav list-group'>
                    <li className='nav-item'><a href='#Home'>Home</a></li>
                    <li className='nav-item'><a href='#Search'>Search</a></li>
                    <li className='nav-item'><a href='#Favs'>Favourites</a></li>
                </ul>
                </nav>
        </div>
    )
}

export default Header;