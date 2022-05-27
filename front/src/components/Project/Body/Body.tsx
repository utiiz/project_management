import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Header from './Header/Header'
import Timeline from './Timeline/Timeline'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    max-width: calc(100vw - 300px);
`

const Body: FunctionComponent = () => {
    return (
        <Container>
            <Header />
            <Timeline />
        </Container>
    )
}

export default Body
