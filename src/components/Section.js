import React from 'react'
import styled from 'styled-components'
import './Section.css'
function Section() {
    return (
        <Wrap className='wrap'>
            <img  className='hero' src='/images/model-s.avif' alt='model-s' />
            <Text>
                <h1>Model X</h1>
                <p>Order Online for Touchless Delivery</p>
            </Text>
            <ButtonGroup>
                <Btn>Customer Order</Btn>
                <BtnWt>Existing Inventory</BtnWt>
            </ButtonGroup>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height:100%;
    width:100%; ;

`

const Text = styled.div`
    padding-top:70px;
`
const ButtonGroup = styled.div`
    display:flex;
    width:100%;
    position:absolute;
    bottom:40px;
    justify-content:center;
    align-items:center;
`
const Btn = styled.div`
    border-radius: 20px;
    margin:20px;
    background:#606165;
    padding:10px;
    color:white;
    width:250px;
`
const BtnWt = styled(Btn)`
    background:white;
    color: #606165;
`