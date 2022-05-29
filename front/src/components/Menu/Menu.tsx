import { FunctionComponent } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    background: ${({theme}) => theme.primary};
    border-right: 1px solid ${({theme}: {theme: {borderColor: string}}) => theme.borderColor};
`

const Menu: FunctionComponent = () => {
    return (
        <Container>
            <Header />
            <Body />
        </Container>
    )
}

export default Menu
