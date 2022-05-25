import { FunctionComponent } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    height: 100vh;
    background: ${({theme}) => theme.primary};
`

const Project: FunctionComponent = () => {
    return (
        <Container>
            Project
        </Container>
    )
}

export default Project
