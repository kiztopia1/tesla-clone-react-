import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
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
            <img src="/images/menu.png" alt="menu" />
            </Right>
        </Nav>
    )
}

export default Header
const Nav = styled.div`
    position: fixed;
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
    

    img{
        margin-left:20px!important;
    }
    a{
        text-transform:uppercase;
        margin: 0 20px;
    }
`

const Model = styled.div`   
    margin:0px 5px;
    display:flex;
    justify-content: space-between;
    width:40%;

`

const Right = styled.div`   
    margin-right:20px;
    display:flex;
    align-items:center;
`