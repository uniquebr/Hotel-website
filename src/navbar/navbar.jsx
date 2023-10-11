import React from 'react'
import { Navbar } from './navbarStyle'
import { NavLink } from 'react-router-dom'

const NavbarRoute = () => {
    return (
        <div>
            <Navbar>
                <div className='navbarTop'>
                    <div className='navbarLeft'>
                        <div className='navbarImageDiv'>
                            <h1 className='navbarLeftRectangle'>LUXURY</h1>
                            <h5 className='navbarLeftRectangle'>HOTELS</h5>
                        </div>
                    </div>
                    <div className='navbarRight'>
                        <NavLink to="/homeStyle">
                            <div style={{ cursor: 'pointer' }}>Home</div>
                        </NavLink>
                        <NavLink to="/facilitiesStyle">
                            <div style={{ cursor: 'pointer' }}>Facilities</div>
                        </NavLink>
                        <NavLink to="/RooomsStyle">
                            <div style={{ cursor: 'pointer' }}>Rooms</div>
                        </NavLink>
                        <NavLink to="/ContactStyle">
                            <div style={{ cursor: 'pointer' }}>Contact-us</div>
                        </NavLink>
                    </div>
                </div>
            </Navbar>

        </div>
    )
}

export default NavbarRoute
