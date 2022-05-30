import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const Container = styled.div`
    display: flex;
    flex: 1;
    gap: 15px;
    align-items: center;
    padding: 0 20px;
    height: 85px;
`
const Bold = styled.div`
    color: ${({theme}) => theme.tertiaryTextColor};
    font-size: 16px;
`

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${({theme}) => theme.tertiaryTextColor};
`

const SearchBar: FunctionComponent = () => {
    return (
        <Container>
            <Icon><FiSearch/></Icon>
            <Bold>What are you looking for ?</Bold>
        </Container>
    )
}

export default SearchBar
