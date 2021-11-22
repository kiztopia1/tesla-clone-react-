import React from 'react'
import styled from 'styled-components'
import './Section.css'
function Section({name, img, text}) {
    return (
        <Wrap className='wrap'>
            <img  className='hero' src={`/images/${img}`} alt='model-s' />
            <Text>
                <h1>{name}</h1>
                <p>{text}</p>
            </Text>
            <BtnCont>
                <ButtonGroup>
                    <Btn>Customer Order</Btn>
                    <BtnWt>Existing Inventory</BtnWt>
                </ButtonGroup>
                <DownArrow  >
                    <img src="/images/down-arrow.svg" alt="^" className='down'/>
                </DownArrow>
            </BtnCont>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height:100%;
    width:100%; ;
    display:flex;
    flex-direction:column;
    justify-content: space-between;

`

const Text = styled.div`
    position:relative;
    top:100px;
`
const ButtonGroup = styled.div`
    display:flex;
    width:100%;

    justify-content:center;
    align-items:center;
    @media( max-width: 768px) {
        flex-direction:column;
    }
`
const Btn = styled.div`
    border-radius: 20px;
    margin:10px;
    background:#606165;
    padding:10px;
    color:white;
    width:250px;
    opacity:0.8;
`
const BtnWt = styled(Btn)`
    background:white;
    color: #606165;
`

const DownArrow = styled.div`
   width:100%;

`
const BtnCont = styled.div`
    padding:20px;
`