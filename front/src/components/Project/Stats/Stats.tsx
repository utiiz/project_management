import { FunctionComponent, useState } from 'react'
import { MdOutlineKeyboardArrowRight, MdInfoOutline } from 'react-icons/md'
import styled from 'styled-components'
import Icon from './Icon/Icon'
import RecentActivities from './RecentActivities/RecentActivities'
import DashedCircle from './StatsHalfCircle/DashedCircle/DashedCircle'
import StatsHalfCircle from './StatsHalfCircle/StatsHalfCircle'

const Container = styled.div<{isOpen: boolean}>`
    z-index: 10;
    position: absolute;
    top: 0;
    right: ${({isOpen}) => isOpen ? '0' : '-350px'};
    display: flex;
    flex-direction: column;
    width: 350px;
    height: calc(100vh - 85px);
    background: ${({theme}) => theme.primary};
    border-left: 1px solid ${({theme}) => theme.borderColor};
    transition: all 0.2s linear;
`

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 27.5px 35px;
    background: ${({theme}) => theme.primary};
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
`

const Handle = styled.div<{isOpen: boolean}>`
    position: absolute;
    top: 37.5px;
    left: ${({isOpen}) => isOpen ? '-17.5px' : '-47.5px'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: ${({theme}) => theme.primary};
    border-radius: 35px;
    border: 1px solid ${({theme}) => theme.borderColor};
    font-size: 20px;
    color: ${({theme}) => theme.tertiaryTextColor};
    transform: rotate(${({isOpen}) => isOpen ? '0' : '180deg'});
    transition: all 0.2s linear;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55px;
    margin-bottom: 20px;
`

const Title = styled.div`
    font-size: 22px;
    color: ${({theme}) => theme.colorText};
    font-weight: bold;
`

const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`

const Status = styled.div<{isCompleted?: boolean}>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.tertiaryTextColor};

    &:before {
        content: '';
        width: 7.5px;
        height: 7.5px;
        border-radius: 7.5px;
        margin-right: 10px;
        background-color: ${({theme, isCompleted}) => isCompleted ? theme.colorGreen : theme.colorRed};
    }
`

const StatusNumber = styled.div`
    flex: 1 1 100%;
    padding-left: 42.5px;
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.textColor};
`

const InfoStats = styled.div`
    display: flex;
    gap: 15px;
    color: ${({theme}) => theme.secondaryTextColor};
    margin: 35px 0 15px;
    padding: 0 15px;
`

const InfoText = styled.span``

const ColoredText = styled.span`
    font-weight: bold;
    color: ${({theme}) => theme.colorGreen};
`

const IconInfo = styled.div`
    color: ${({theme}) => theme.tertiaryTextColor};
    font-size: 25px;
`

const Stats: FunctionComponent = () => {
    const [open, setOpen] = useState<boolean>(false)
    const onClick = () => {
        setOpen(!open)
    }
    return (
        <Container isOpen={open}>
            <Handle onClick={onClick} isOpen={open}>
                <MdOutlineKeyboardArrowRight />
            </Handle>
            <StatsContainer>
                <Header>
                    <Title>Project Stats</Title>
                    <Icon />
                </Header>
                <StatsHalfCircle percent={43.5}/>
                <StatusContainer>
                    <Status isCompleted>Completed<StatusNumber>118</StatusNumber></Status>
                    <Status>In Progress<StatusNumber>47</StatusNumber></Status>
                </StatusContainer>
                <InfoStats>
                    <IconInfo><MdInfoOutline /></IconInfo>
                    <InfoText>You completed <ColoredText>3% more</ColoredText> tasks this week than last week</InfoText>
                </InfoStats>
            </StatsContainer>
            <RecentActivities />
        </Container>
    )
}

export default Stats
