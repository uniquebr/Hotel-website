import backImg from '../assets/homeBackground.png'
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const NavLink = styled(Link)`
text-decoration: none;
`

export const Navbar=styled.div`
background-image: url(${backImg});
background-size: 100% 1080px;
height: 1080px;
flex-shrink: 0;

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
export const Home=styled.div`
height:1600px;
.homeTitle{
color: #14274A;
font-family: Montserrat;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
margin-top:83px;
}

.homeh1{
padding-top: 50px;
color: #14274A;
font-family: Adobe Garamond Pro;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.homeInfo{
display: flex;
margin-top: 93px;
}

.homeText{
display: flex;
flex-direction: column;
flex:1;
margin-left: 151px;
padding-left:48px;
position: relative;
}
.HomeTextP{
color: #14274A;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 160% */
width: 390px;
height: 40px;
margin-top:0px;
}

.homeText::before {
  content: '';
  position: absolute;
  top: 17%; 
  left: 0;
  width: 2px; 
  height: 65%;
  background-color: black;
}
.homeImage{
flex:1;
margin-right: 199px;
}
.imageSize{
width: 603px;
height: 443px;
flex-shrink: 0;
}


.button1{
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1px;
width: 186px;
height: 43px;
flex-shrink: 0;
background-color: #E0B973;
border-radius: 7px;
border: none;
margin-top: 130px;
}
.imageSize2{
width: 603px;
height: 330px;
flex-shrink: 0;
padding-top:20px
}
.homeInfo2{
display: flex;
margin-top: 93px;
}

.homeText2{
display: flex;
flex-direction: column;
flex:1;
margin-left: 151px;
padding-left:48px;
position: relative;
}
.HomeTextP2{
color: #14274A;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 160% */
width: 390px;
height: 40px;
margin-top:0px;
}

.homeText2::before {
content: '';
position: absolute;
top: 9%; 
left: 0;
width: 2px; 
height: 90%;
background-color: black;
}
.homeImage2{
flex:1;
margin-right: 199px;
}

.home2h1{
padding-top: 5px;
color: #14274A;
font-family: Adobe Garamond Pro;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.button2{
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1px;
width: 186px;
height: 43px;
flex-shrink: 0;
background-color: #E0B973;
border-radius: 7px;
border: none;
margin-top: 165px;
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