import { FunctionComponent } from 'react'
import Header from './Header/Header'
import styled from 'styled-components'
import Body from './Body/Body'
import Stats from './Stats/Stats'

export const Container = styled.div`
    flex: 1;
    height: 100vh;
    background: ${({theme}) => theme.primary};
`

const Main = styled.div`
    position: relative;
`

const Project: FunctionComponent = () => {
    return (
        <Container>
            <Header />
            <Main>
                <Body />
                <Stats />
            </Main>
        </Container>
    )
}

export default Project
