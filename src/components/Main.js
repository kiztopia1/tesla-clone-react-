import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Main() {
    return (
        <Container>
            <Section name="model x"/>
            <Section name="model s"/>
            <Section name="model y"/>
        </Container>
    )
}

export default Main

const Container = styled.div`
    height:100vh;
    
`
