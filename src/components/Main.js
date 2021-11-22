import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Main() {
    return (
        <Container>
            <Section 
            name="model S"
            img="model-x.jpg"
            text="Order Online for Touchless Delivery"
            />
            <Section 
            name="Model S"
            img="model-s.jpg"
            text="Order Online for Touchless Delivery"
            />
            <Section 
            name="Model Y"
            img="model-y.jpg"
            text="Order Online for Touchless Delivery"
            />
            <Section 
            name="Solar Panel"
            img="solar-panel.jpg"
            text="Order Online for Touchless Delivery"
            />
            <Section 
            name="Solar Roof"
            img="solar-roof.jpg"
            text="Solar Roof Costs Less Than a New Roof"
            />
        </Container>
    )
}

export default Main

const Container = styled.div`
    height:100vh;
    
`
