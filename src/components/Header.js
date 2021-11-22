import React, {useState} from 'react'
import styled from 'styled-components'

function Header() {
    let [navStatus, setnavStatus] = useState(false)
    return (
        <Nav >
            <img src="/images/logo.svg" alt="tesla" />
            <Model>
                <a href="/model">model x</a>
                <a href="/model">model x</a>
                <a href="/model">model x</a>
                <a href="/model">model x</a>
            </Model>
            <Right>
            <a href="/signIn">SHOP</a>
            <a href="/signIn">Tesla account</a>
            <img src="/images/menu.png" alt="menu" onClick={() => {setnavStatus(!navStatus)} }/>
            </Right>
            <Slide nav={navStatus}>
            <img src="/images/menu.png" alt="menu" onClick={() => {setnavStatus(!navStatus)} }/>
            
            <a href='/home'>Existing Inventory</a>
            <a href='/home'>Used Inventory</a>
            <a href='/home'>Trade-in</a>
            <a href='/home'>Roadster</a>
            <a href='/home'>login</a>
            <a href='/home'>Sign in </a>
            <a href='/home'>Existing Inventory</a>
            </Slide >
        </Nav>
    )
}

export default Header
const Nav = styled.div`

    display: flex;
    justify-content: space-between;
    width:96%;
    margin:0 2%;
    align-items:center;
    padding:20px 0;
    top:0;
    left:0;
    font-weight:600;
    font-size:200px
    z-index:111;
    cursor:pointer;
    img{
        margin-left:20px!important;
    }
    a{
        text-transform:uppercase;
        margin: 0 20px;
        cursor:pointer
    }
`

const Model = styled.div`   
    margin:0px 5px;
    display:flex;
    justify-content: space-between;
    width:40%;

    @media (max-width: 768px){
        display:none
    }

`

const Right = styled.div`   
    margin-right:20px;
    display:flex;
    align-items:center;
`
const Slide = styled.div`
    background:white;
    color:black;
    font-weight:600;
    width:400px;
    position:absolute;
    height:100vh;
    z-index:111;
    top:0;
    right:-24px;
    display:flex;
    flex-direction:column;
    text-align:left;
    padding-top:50px;
    transform: ${ prop => prop.nav ? 'translateX(0px)' : 'translateX(600px)'};

    a{
        width:85%;
        border-bottom:1px solid black;
        font-size:1.4rem;
        text-decoration:none;
        padding: 20px 
    }
`
