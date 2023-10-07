import styled from "styled-components";
import backImg2 from '../assets/backimageFacilities.png'

import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
text-decoration: none;
`

export const Navbar=styled.div`
background-image: url(${backImg2});
background-size: 100% 1080px;
height: 1080px;
flex-shrink: 0;
margin-top:100px;
.navbarTop{
display: flex;

}

.navbarLeft{
flex: 1;
}

.navbarRight{
display: flex;
flex: 1;
justify-content: space-around;
margin-top:59px;
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal; 
padding-right: 70px;
padding-left: 100px;
}
.navbarLeftRectangle{
margin-top:0px;
padding-top:0px;
}
.navbarImageDiv{
width: 216px;
height: 119px;
border-bottom-right-radius: 40px;
border-bottom-left-radius: 40px;
margin-left:213px;
text-align: center;
background-color: #E0B973;
}


.WelcomeDiv{
width: 498.24px;
height: 328px;
flex-shrink: 0;
margin-left: 213.24px;
}
h2{
color: #FFF;
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 0px;
margin-top: 193px;
}
.Navbarh1{
color: #FFF;
font-family: Adobe Garamond Pro;
font-size: 104px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 10.78px;
margin-bottom: 0px;
margin-top: 0px;
}
h3{
color: #FFF;
font-family: Adobe Garamond Pro;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 24px;
margin-bottom: 0px;
margin-top: 0px;
}
p{
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2.5px;
margin-bottom: 0px;
margin-top: 14px;
}
.bookButton{
width: 228px;
height: 78px;
flex-shrink: 0;
background-color: #E0B973;
margin-top:108px;
color: #FFF;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
align-items:center;
margin-left:42.5%;
border-radius: 10px;
border: none;
}
.buttonScroll{
width: 60.595px;
height: 60.841px;
flex-shrink: 0;
margin-top:15px;
background-color:none;
background: none;
border: none;
margin-left:723px;
}
.ScrollP{
margin-top:80px;
color: #FFF;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.25px;
text-align: center;
}
`
export const Facilities=styled.div`

height: 4275px;
.title{
color: #14274A;
text-align: center;
font-family: Adobe Garamond Pro;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 3px;
margin-bottom: 0px;

}
.FacilitiesTextDiv{
width: 940px;
display:flex;
margin-left:290px;
}
.FacilitiesText{
color: #14274A;
text-align: center;
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 15px;
}
.GymImageDiv{
display: flex;
justify-content:center;
margin-top: 42px;
position: relative;
}
.GymImage{
width: 910px;
height: 552px;
flex-shrink: 0;
}
.GymText{
width: 450px;
height: 40px;
flex-shrink: 0;
background: #FFF;
position: absolute;
top: 96.3%;
left: 50%;
transform: translate(-50%, -50%);
color: #14274A;
text-align: center;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.GymImageDiv2{
display: flex;
justify-content:center;
margin-top: 42px;
position: relative;
margin-top:126px;
}
.GymImage2{
width: 910px;
height: 552px;
flex-shrink: 0;
}
.GymText2{
width: 450px;
height: 40px;
flex-shrink: 0;
background: #FFF;
position: absolute;
top: 96.4%;
left: 50%;
transform: translate(-50%, -50%);
color: #14274A;
text-align: center;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.GymImageDiv3{
display: flex;
justify-content:center;
margin-top: 42px;
position: relative;
margin-top:126px;

}
.GymImage3{
width: 910px;
height: 552px;
flex-shrink: 0;
}
.GymText3{
width: 450px;
height: 40px;
flex-shrink: 0;
background: #FFF;
position: absolute;
top: 96.4%;
left: 50%;
transform: translate(-50%, -50%);
color: #14274A;
text-align: center;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.GymImageDiv4{
display: flex;
justify-content:center;
margin-top: 42px;
position: relative;
margin-top:126px;

}
.GymImage4{
width: 910px;
height: 552px;
flex-shrink: 0;
}
.GymText4{
width: 450px;
height: 40px;
flex-shrink: 0;
background: #FFF;
position: absolute;
top: 96.4%;
left: 50%;
transform: translate(-50%, -50%);
color: #14274A;
text-align: center;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.GymImageDiv5{
display: flex;
justify-content:center;
margin-top: 42px;
position: relative;
margin-top:126px;

}
.GymImage5{
width: 910px;
height: 552px;
flex-shrink: 0;
}
.GymText5{
width: 450px;
height: 40px;
flex-shrink: 0;
background: #FFF;
position: absolute;
top: 96.4%;
left: 50%;
transform: translate(-50%, -50%);
color: #14274A;
text-align: center;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.GymImageDiv6{
display: flex;
justify-content:center;
margin-top: 42px;
position: relative;
margin-top:126px;

}
.GymImage6{
width: 910px;
height: 552px;
flex-shrink: 0;
}
.GymText6{
width: 450px;
height: 40px;
flex-shrink: 0;
background: #FFF;
position: absolute;
top: 96.4%;
left: 50%;
transform: translate(-50%, -50%);
color: #14274A;
text-align: center;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.TestimonialsDiv{
display:flex;
flex-direction:column;
align-items: center;
text-align: center;
}
.TestimonialsH1{
color: #14274A;
font-family: Adobe Garamond Pro;
font-size: 40px;
font-style: normal;
font-weight: 800;
line-height: normal;
margin-top: 115px;
}
h6{
color: #14274A;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 26px;
margin-bottom: 0px;
}
p{
color: #14274A;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 19px;
}
.TestimonialsButtonDiv{
display: flex;
justify-content: center;
gap: 20px;
}
.TestimonialsButton{
width: 40px;
height: 40px;
flex-shrink: 0;
background-color:#E0B973;
color:#FFFFFF;
border: none;
border-radius: 5px;
}
`