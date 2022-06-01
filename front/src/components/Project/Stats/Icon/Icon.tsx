import { FunctionComponent } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5px;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: ${({theme}) => theme.primary};
    border-radius: 35px;
    border: 1px solid ${({theme}) => theme.borderColor};
    font-size: 20px;
    color: ${({theme}) => theme.tertiaryTextColor};
`

const TopBar = styled.div`
    width: 12px;
    height: 3px;
    background: ${({theme}) => theme.tertiaryTextColor};
    border-radius: 5px;
`

const BottomBar = styled.div`
    width: 7px;
    height: 3px;
    background: ${({theme}) => theme.tertiaryTextColor};
    border-radius: 5px;
`

const Icon: FunctionComponent = () => {
    return (
        <Container>
            <TopBar />
            <BottomBar />
        </Container>
    )
}

export default Icon

