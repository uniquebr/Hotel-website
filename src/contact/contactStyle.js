import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
text-decoration: none;
color: #FFF;
font-family: Montserrat;
`
export const Navbar=styled.div`
height: 365px;
flex-shrink: 0;
background-color: #14274A;
margin-top:200px;
`
export const Container=styled.div`
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
.navbarH1{
color: #FFF;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align:center;
}
`
export const ContactWrapper=styled.div`
 height: 900px;
 .Title{
 padding-left:15%;
 padding-top:50px;
 }
.TitleP{
color: #14274A;
font-family: Montserrat;
font-size: 23px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 1160px;
}
.TitleH1{
color: #14274A;
font-family: Adobe Garamond Pro;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.ContactInfo{
margin-top:100px;
display: grid;
grid-template-columns: 1fr 1fr;
padding-left:15%;
}
.Datap{
color: #14274A;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.InputP{
color: #14274A;
font-family: Arial;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.Input1{
width: 370px;
height: 40px;
flex-shrink: 0;
}
.Input2{
width: 370px;
height: 152px;
flex-shrink: 0;
}

`
