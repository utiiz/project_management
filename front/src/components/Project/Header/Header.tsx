import { FunctionComponent } from 'react'
import styled from 'styled-components'
import ImageTextItem from '../../ImageTextItem/ImageTextItem'
import SearchBar from './SearchBar'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
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

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5px;
    width: 100%;
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

const Header: FunctionComponent = () => {
    return (
        <Container>
            <SearchBar /> 
            <ImageTextItem primaryText='Emmanuel Ikechukwu' secondaryText='emmanuel@gmail.com' roundedImage={true}/>
        </Container>
    )
}

export default Header
