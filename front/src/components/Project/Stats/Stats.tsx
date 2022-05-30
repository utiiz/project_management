import { FunctionComponent } from 'react'
import { MdOutlineKeyboardArrowRight, MdInfoOutline } from 'react-icons/md'
import styled from 'styled-components'
import DashedCircle from '../../DashedCircle/DashedCircle'

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

const StatsCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 200px;
    height: 117.5px;
    margin-bottom: 35px;
`

const Circle = styled.div<{percent: number}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    transform: rotate(${({percent}) => `${45 + percent * 1.8}deg`});
    border-radius: 50%;
    border: 30px solid ${({theme}) => theme.colorRed};
    border-bottom-color: ${({theme}) => theme.colorGreen};
    border-right-color: ${({theme}) => theme.colorGreen};
`

const SeparatorCircle = styled.div<{percent: number}>`
    display: ${({percent}) => percent === 0 || percent === 100 ? 'none' : 'block'};
    position: absolute;
    top: calc(100% - 7.5px);
    left: 50%;
    width: 100px;
    height: 8px;
    background: ${({theme}) => theme.primary};
    transform-origin: left center;
    transform: rotate(${({percent}) => `${180 - percent * -1.8}deg`});
`

const HalfCircle = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100px;
`

const Indicator = styled.div`
    position: absolute;
    bottom: 0;
    width: 35px;
    height: 35px;
    background: ${({theme}) => theme.secondaryTextColor};
    border: 10px solid ${({theme}) => theme.colorDarkerGray};
    box-shadow: rgba(0,0,0,0.15) -2.5px 5px 5px;
    border-radius: 50%;
    transform-style: preserve-3d;
`

const Arrow = styled.div<{percent: number}>`
    position: absolute;
    top: calc(100% - 12.5px);
    left: 50%;
    width: 40px;
    height: 7.5px;
    border-radius: 10px;
    background: ${({theme}) => theme.secondaryTextColor};
    transform-origin: left center;
    transform: translateZ(-10px) rotate(${({percent}) => `${180 - percent * -1.8}deg`});

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 5px;
        width: 100%;
        height: 100%;
        transform: skewY(6deg);
        transform-origin: right center;
        background-color: ${({theme}) => theme.secondaryTextColor};
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 5px;
        width: 100%;
        height: 100%;
        transform: skewY(-6deg);
        transform-origin: right center;
        background-color: ${({theme}) => theme.secondaryTextColor};
    }
`

const Numbers = styled.div`
    position: absolute;
    bottom: -15px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.secondaryTextColor};
`

const Number = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
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
                <StatsCircle>
                    <HalfCircle>
                        <Circle percent={63} />
                        <SeparatorCircle percent={63} />
                        <DashedCircle />
                    </HalfCircle>
                    <Indicator>
                        <Arrow percent={63}/>
                    </Indicator>
                    <Numbers>
                    <Number>63%</Number>
                    <Number>37%</Number>
                    </Numbers>
                </StatsCircle>
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
