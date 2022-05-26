import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Timeline from './Timeline/Timeline'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colorRed};
    align-items: center;
    justify-content: flex-end;
    max-width: calc(100vw - 300px);
`

const Body: FunctionComponent = () => {
    return (
        <Container>
            <Timeline />
        </Container>
    )
}

export default Body
