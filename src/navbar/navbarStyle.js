import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
text-decoration: none;
`

export const Navbar=styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
.navbarTop{
display: flex;

}

.navbarLeft{
flex: 1;
}

.navbarRight{
display: flex;
flex: 1;
justify-content: space-between;
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
margin-left:32%;
text-align: center;
background-color: #E0B973;
}
`