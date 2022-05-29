import { FunctionComponent } from 'react'
import { MdOutlineKeyboard, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import styled from 'styled-components'

const Container = styled.div<Pick<Props, 'hasCarret'>>`
    display: flex;
    flex: ${props => props.hasCarret ? '0 0 100%' : '0 0 225px'};
    align-items: center;
    height: 85px;
`

const Logo = styled.div<Pick<Props, 'roundedImage'>>`
    flex: 0 0 45px;
    height: 45px;
    margin-right: 15px;
    background-color: ${({theme}) => theme.logoBackground};
    border-radius: ${props => props.roundedImage ? '50px' : '10px'};
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

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${({theme}) => theme.tertiaryTextColor};
`

interface Props {
    roundedImage?: boolean
    hasCarret?: boolean
    primaryText: string
    secondaryText: string
}

const ImageTextItem: FunctionComponent<Props> = (props) => {
    return (
        <Container hasCarret={props.hasCarret}>
            <Logo roundedImage={props.roundedImage}/>
            <Column>
                <Bold>{props.primaryText}</Bold>
                <SecondaryText>{props.secondaryText}</SecondaryText> 
            </Column>
            {props.hasCarret && <Icon><MdOutlineKeyboardArrowDown/></Icon>}
        </Container>
    )
}

export default ImageTextItem

