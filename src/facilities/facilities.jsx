import React from 'react'
import { Facilities,  Navbar } from './facilitesStyle'
import FotterStyle from '../fotter/fotter'
import Logo from '../assets/gymPhoto.png'
import Logo2 from '../assets/poolsidebarImg.png'
import Logo3 from '../assets/spaImg.png'
import Logo4 from '../assets/swimmingPoolImage.png'
import Logo5 from '../assets/restaurantImg.png'
import Logo6 from '../assets/laundaryImg.png'


import { NavLink } from 'react-router-dom'

const FacilitiesStyle = () => {
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
                        <NavLink to="/home">
                           <div style={{cursor: 'pointer'}}>Home</div>
                        </NavLink>
                        <NavLink to="/facilities">
                           <div  style={{cursor: 'pointer'}}>Facilities</div>
                        </NavLink>
                        <div>Rooms</div>
                        <div>Contact-us</div>
                    </div>
                </div>
                <div className='WelcomeDiv'>
                    <h2>WELCOME TO</h2>
                    <h1 className='Navbarh1'>LUXURY</h1>
                    <h3>HOTELS</h3>
                    <p>
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                </div>
                <button className='bookButton'>
                    <svg style={{ marginRight: '7px', marginLeft: '25px' }} xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                        <path d="M12.8333 0H15.1667V2.33333H12.8333V0Z" fill="white" />
                        <path d="M19.8333 0H22.1667V2.33333H19.8333V0Z" fill="white" />
                        <path d="M5.83333 0H8.16666V2.33333H5.83333V0Z" fill="white" />
                        <path d="M26.8333 2.33331H22.1667V5.83331H19.8333V2.33331H15.1667V5.83331H12.8333V2.33331H8.16667V5.83331H5.83333V2.33331H1.16667C0.857247 2.33331 0.560501 2.45623 0.341709 2.67502C0.122916 2.89381 0 3.19056 0 3.49998L0 24.5C0 24.8094 0.122916 25.1061 0.341709 25.3249C0.560501 25.5437 0.857247 25.6666 1.16667 25.6666H26.8333C27.1427 25.6666 27.4395 25.5437 27.6583 25.3249C27.8771 25.1061 28 24.8094 28 24.5V3.49998C28 3.19056 27.8771 2.89381 27.6583 2.67502C27.4395 2.45623 27.1427 2.33331 26.8333 2.33331ZM21.4887 17.2827L19.8333 16.1V21C19.8333 21.3094 19.7104 21.6061 19.4916 21.8249C19.2728 22.0437 18.9761 22.1666 18.6667 22.1666H15.75V17.5C15.75 17.1906 15.6271 16.8938 15.4083 16.675C15.1895 16.4562 14.8927 16.3333 14.5833 16.3333H13.4167C13.1072 16.3333 12.8105 16.4562 12.5917 16.675C12.3729 16.8938 12.25 17.1906 12.25 17.5V22.1666H9.33333C9.02391 22.1666 8.72717 22.0437 8.50837 21.8249C8.28958 21.6061 8.16667 21.3094 8.16667 21V16.1L6.51146 17.2827L5.15521 15.3839L13.3219 9.5506C13.5206 9.4113 13.7573 9.33657 14 9.33657C14.2427 9.33657 14.4794 9.4113 14.6781 9.5506L22.8448 15.3839L21.4887 17.2827Z" fill="white" />
                    </svg><h5>BOOK NOW</h5>
                </button>
                <p className='ScrollP'>
                    Scroll
                </p>
                <button className='buttonScroll'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                        <path d="M30.662 61C23.6269 60.9939 16.8101 58.5566 11.366 54.1008C5.92184 49.6451 2.18493 43.4447 0.78804 36.5497C-0.608846 29.6547 0.420145 22.4888 3.70077 16.2655C6.98139 10.0421 12.312 5.14381 18.79 2.40002C26.218 -0.616 34.5347 -0.58696 41.9415 2.48086C49.3483 5.54868 55.2499 11.4087 58.37 18.7936C61.49 26.1786 61.5778 34.4949 58.6144 41.944C55.6509 49.3932 49.8744 55.3765 42.534 58.6C38.7784 60.1907 34.7405 61.007 30.662 61ZM18.439 20.755L13.422 25.655L30.262 42.1L47.103 25.65L42.086 20.75L30.262 32.3L18.439 20.755Z" fill="white" />
                    </svg>
                </button>
            </Navbar>
            <Facilities>
                <h1 className='title'>FACILITIES</h1>
                <div className='FacilitiesTextDiv'>
                    <p className='FacilitiesText'>
                        We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
                        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                        and our modern luxury resort facilities will help you enjoy the best of all.
                    </p>
                </div>
                <div className='GymImageDiv'>
                    <img className='GymImage'src={Logo} alt="" />
                    <div className='GymText'>THE GYM</div>
                </div>
                <div className='GymImageDiv2'>
                    <img className='GymImage2'src={Logo2} alt="" />
                    <div className='GymText2'>POOLSIDE BAR</div>
                </div>

                <div className='GymImageDiv3'>
                    <img className='GymImage3'src={Logo3} alt="" />
                    <div className='GymText3'>THE SPA</div>
                </div>
                <div className='GymImageDiv4'>
                    <img className='GymImage4'src={Logo4} alt="" />
                    <div className='GymText4'>THE SPA</div>
                </div>
                <div className='GymImageDiv5'>
                    <img className='GymImage5'src={Logo5} alt="" />
                    <div className='GymText5'>THE SPA</div>
                </div>
                <div className='GymImageDiv6'>
                    <img className='GymImage6'src={Logo6} alt="" />
                    <div className='GymText6'>THE SPA</div>
                </div>
                <div className='TestimonialsDiv'>
                 <h1 className='TestimonialsH1' >Testimonials</h1>
                 <h6>"Calm, Serene, Retro – What a way to relax and enjoy"</h6>
                 <p> Mr. and Mrs. Baxter, UK</p>
                </div>
                <div className='TestimonialsButtonDiv'>
                  <button className='TestimonialsButton'>&lt;</button>
                  <button className='TestimonialsButton'>&gt;</button>
                </div>
                <FotterStyle/>
            </Facilities>
        </div>
    )
}

export default FacilitiesStyle