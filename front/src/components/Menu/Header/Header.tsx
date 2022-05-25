import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 300px;
    height: 85px;
    border-bottom: 1px solid #e5eaef;
`

const Logo = styled.div`
    flex: 0 0 45px;
    height: 45px;
    margin-right: 15px;
    background-color: ${({theme}) => theme.logoBackground};
    border-radius: 10px;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5px;
    width: 300px;
    height: 85px;
`

const Bold = styled.div`
    color: ${({theme}) => theme.textColor};
    font-weight: bold;
    font-size: 16px;
`

const SecondaryText = styled.div`
    color: ${({theme}) => theme.tertiaryTextColor};
    font-size: 12px;
`

const Menu: FunctionComponent = () => {
    return (
        <Container>
            <Logo />
            <Row>
                <Bold>Horizon View</Bold>
                <SecondaryText>Product Company</SecondaryText> 
            </Row>
            v
        </Container>
    )
}

export default Menu
