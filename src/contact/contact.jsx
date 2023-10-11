import React from 'react'
import { ContactWrapper, Container, } from './contactStyle'
import FotterStyle from '../fotter/fotter'

const ContactStyle = () => {
    return (
        <div>
            <Container>
                <div><h1 className='navbarH1'>CONTACT-US</h1></div>
            </Container>
            <ContactWrapper>
                <div className='Title'>
                    <h1 className='TitleH1'>WE ARE HERE FOR YOU</h1>
                    <p className='TitleP'>
                        At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                        please forward it to our support desk and we will get back to you as soon as possible.
                    </p>
                </div>
                <div className='ContactInfo'>
                    <div>
                        <p className='Datap'>
                            497 Evergreen Rd. Roseville,
                            CA 95673
                        </p>
                        <div className='map'> 
                           <h5>View map <svg xmlns="http://www.w3.org/2000/svg" width="84" height="38" viewBox="0 0 84 38" fill="none">
                               <path d="M82.7678 20.7678C83.7441 19.7915 83.7441 18.2085 82.7678 17.2322L66.8579 1.32233C65.8816 0.34602 64.2986 0.34602 63.3223 1.32233C62.346 2.29864 62.346 3.88155 63.3223 4.85786L77.4645 19L63.3223 33.1421C62.346 34.1184 62.346 35.7014 63.3223 36.6777C64.2986 37.654 65.8816 37.654 66.8579 36.6777L82.7678 20.7678ZM0 21.5H81V16.5H0V21.5Z" fill="#14274A" />
                               </svg>
                           </h5>
                            <p className='Datap'>
                               Phone: +44 345 678 903
                               Email: luxury_hotels@gmail.com
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='InputP'>Name</p>
                        <input className='Input1' type="text" />
                        <p className='InputP'>Email Address</p>
                        <input className='Input1' type="text" />
                        <p className='InputP'>Message</p>
                        <input className='Input2' type="text" />
                    </div>
                </div>
                <FotterStyle/>
            </ContactWrapper>
        </div>
    )
}

export default ContactStyle
