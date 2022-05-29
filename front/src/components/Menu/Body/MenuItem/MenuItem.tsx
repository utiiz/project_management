import { FunctionComponent, ReactElement } from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

export const Container = styled.div<Pick<Props, 'isActive'>>`
    display: flex;
    gap: 15px;
    flex: 0 0 55px;
    align-items: center;
    padding: 7.5px 20px;
    border-radius: 10px;
    background-color: ${({theme, isActive}) => isActive ? theme.colorGray : 'none'};
`

const Icon = styled.div<Pick<Props, 'isActive'>>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${({theme, isActive}) => isActive ? theme.colorText : theme.tertiaryTextColor};
`

const Text = styled.div<Pick<Props, 'isHeader' | 'isActive'>>`
    flex: 1;
    font-weight: ${({isHeader, isActive}) => isActive || isHeader ? 'bold' : 'normal'};
    text-transform: ${({isHeader}) => isHeader ? 'uppercase': 'none'}; 
    color: ${({theme, isHeader, isActive}) => isHeader ? theme.tertiaryTextColor : isActive ? theme.colorText : theme.secondaryTextColor};
`

const Count = styled.div<{isImportant?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 30px;
    height: 30px;
    font-size: 0.85rem;
    border-radius: 7.5px;
    color: ${({theme}) => theme.primary};
    background-color: ${({theme, isImportant}) => isImportant ? theme.colorRed : theme.colorBlue};
`

interface Props {
    title: string
    icon?: ReactElement<IconType>
    isActive?: boolean
    isHeader?: boolean
    count?: number
}

const MenuItem: FunctionComponent<Props> = (props) => {
    return (
        <Container isActive={props.isActive}>
            { props.icon && <Icon isActive={props.isActive}>{ props.icon }</Icon> }
            <Text isActive={props.isActive} isHeader={props.isHeader}>{ props.title }</Text> 
            { props.count && <Count isImportant={props.count >= 10}>{props.count}</Count> }
        </Container>
    )
}

export default MenuItem
