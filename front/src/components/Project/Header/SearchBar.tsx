import { FunctionComponent } from 'react'
import styled from 'styled-components'
import ImageTextItem from '../../ImageTextItem/ImageTextItem'

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0 20px;
    height: 85px;
    border-bottom: 1px solid #e5eaef;
`
const Bold = styled.div`
    color: ${({theme}) => theme.tertiaryTextColor};
    font-size: 16px;
`

const SearchBar: FunctionComponent = () => {
    return (
        <Container>
            <Bold>What are you looking for ?</Bold>
        </Container>
    )
}

export default SearchBar
