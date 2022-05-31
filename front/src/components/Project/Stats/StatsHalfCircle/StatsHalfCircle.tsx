import { FunctionComponent } from 'react'
import styled from 'styled-components'
import DashedCircle from './DashedCircle/DashedCircle'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

interface Props {
    percent: number
}

const StatsHalfCircle: FunctionComponent<Props> = ({percent}) => {
    return (
        <Container>
            <StatsCircle>
                <HalfCircle>
                    <Circle percent={percent} />
                    <SeparatorCircle percent={percent} />
                    <DashedCircle />
                </HalfCircle>
                <Indicator>
                    <Arrow percent={percent} />
                </Indicator>
                <Numbers>
                    <Number>{`${percent}%`}</Number>
                    <Number>{`${100 - percent}%`}</Number>
                </Numbers>
            </StatsCircle>
        </Container>
    )
}

export default StatsHalfCircle
