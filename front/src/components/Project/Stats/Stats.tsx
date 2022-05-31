import { FunctionComponent } from 'react'
import { MdOutlineKeyboardArrowRight, MdInfoOutline } from 'react-icons/md'
import styled from 'styled-components'
import DashedCircle from './StatsHalfCircle/DashedCircle/DashedCircle'
import StatsHalfCircle from './StatsHalfCircle/StatsHalfCircle'

const Container = styled.div`
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: calc(100vh - 85px);
    background: ${({theme}) => theme.primary};
    border-left: 1px solid ${({theme}) => theme.borderColor};
`

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 27.5px 35px;
    background: ${({theme}) => theme.primary};
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
`

const Handle = styled.div`
    position: absolute;
    top: 37.5px;
    left: -17.5px;
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
    return (
        <Container>
            <Handle>
                <MdOutlineKeyboardArrowRight />
            </Handle>
            <StatsContainer>
                <Header>
                    <Title>Project Stats</Title>
                    icon
                </Header>
                <StatsHalfCircle percent={72}/>
                <StatusContainer>
                    <Status isCompleted>Completed<StatusNumber>118</StatusNumber></Status>
                    <Status>In Progress<StatusNumber>47</StatusNumber></Status>
                </StatusContainer>
                <InfoStats>
                    <IconInfo><MdInfoOutline /></IconInfo>
                    <InfoText>You completed <ColoredText>3% more</ColoredText> tasks this week than last week</InfoText>
                </InfoStats>
            </StatsContainer>
        </Container>
    )
}

export default Stats
