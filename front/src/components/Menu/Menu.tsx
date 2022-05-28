import { FunctionComponent } from 'react'
import Header from './Header/Header'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 300px;
    height: 100vh;
    background: ${({theme}) => theme.primary};
    border-right: 1px solid ${({theme}: {theme: {borderColor: string}}) => theme.borderColor};
`

const Menu: FunctionComponent = () => {
    return (
        <Container>
            <Header />
        </Container>
    )
}

export default Menu
