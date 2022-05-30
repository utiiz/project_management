import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
    position: absolute;
    top: 37.5px;
    width: 125px;
    height: 125px;
`

const Circle = styled.circle`
    width: 115px;
    height: 115px;
    fill: transparent;
    stroke: ${({theme}) => theme.secondaryTextColor};
    stroke-width: 2px;
    stroke-dasharray: 5 34;
    stroke-linecap: round;
`

const DashedCircle: FunctionComponent = () => {
    return (
        <Svg viewBox="0 0 220 220">
            <Circle cx="110" cy="110" r="100" />
        </Svg>
    )
}

export default DashedCircle
