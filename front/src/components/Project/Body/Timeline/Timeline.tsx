import { FunctionComponent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { add, sub, startOfMonth, endOfMonth, isBefore, isSameDay, isWeekend, format, isToday, getHours, getMinutes } from 'date-fns'
import { isSameMonth } from 'date-fns/esm'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    overflow-x: scroll;
`

const Month = styled.div<{numberOfDay: number}>`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(${props => props.numberOfDay} * 75px);
    background-color: #F6F7F9;
    border-right: 1px solid #E5EAEF;
    box-sizing: content-box;
`

const MonthHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    flex: 0 0 90px;
    background-color: ${({theme}) => theme.primary};
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
`

const MonthName = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #676D7C;
    font-weight: bold;
    padding: 0 25px;
`

const Sticky = styled.div`
    position: sticky;
    left: 25px;
`

const MonthBody = styled.div`
    display: flex;
    flex: 1;
`

const DayHeader = styled.div<{isToday: boolean}>`
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 75px;
    height: 40px;
    color: ${props => props.isToday ? props.theme.colorBlue : '#676D7C'};
    font-weight: bold;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        border-right: 1px solid #E5EAEF;
        margin-bottom: 4px;
    }

    &:last-child::after {
        border: none;
    }
`

const DayName = styled.span<{isToday: boolean}>`
    color: ${({isToday, theme}: {isToday: boolean, theme: {colorBlue: string}}) => isToday ? theme.colorBlue : '#A0A6B1'};
    margin-right: 0.5rem;
`

const DayBody = styled.div<{isWeekEnd: boolean}>`
    flex: 1 1 75px;
    margin: 5px 0 0;
    background: ${props => props.isWeekEnd ? `repeating-linear-gradient(
        -60deg,
        #E5EAEF,
        #E5EAEF 1.5px,
        #F3F4F7 1.5px,
        #F3F4F7 16.2px
    )` : '#F6F7F9'};
    border-right: 1px solid #E5EAEF;

    &:last-child {
        border: none;
    }
`

const NowLine = styled.div<{position: number}>`
    z-index: 5;
    position: absolute;
    bottom: 0;
    left: calc(${({position}: {position: number}) => position} * 75px);
    width: 2px;
    height: calc(100% - 50px);
    background-color: ${({theme}: {theme: {colorBlue: string}}) => theme.colorBlue};

    &:after {
        position: absolute;
        top: -5px;
        left: -5px;
        content: '';
        display : inline-block;
        height : 0;
        width : 0;
        border-top : 10px solid ${({theme}: {theme: {colorBlue: string}}) => theme.colorBlue};
        border-right : 6px solid transparent;
        border-left : 6px solid transparent;
    }
`

function dateRange(startDate: Date, endDate: Date, steps = 1) {
    let range: Date[][] = []
    let currentDate = new Date(startDate)

    while (currentDate <= new Date(endDate)) {
        if (isSameDay(currentDate, startDate) || !isSameMonth(currentDate, range[range.length - 1][range[range.length - 1].length - 1])) {
            range = [...range, []]
        }
        range[range.length - 1] = [...range[range.length - 1], new Date(currentDate)]
        currentDate.setUTCDate(currentDate.getUTCDate() + steps)
    }

    return range
}

const Body: FunctionComponent = () => {
    const [range, setRange] = useState<Date[][]>([])
    const [nowLinePosition, setNowLinePosition] = useState<number>(0)

    useEffect(() => {
        const now = new Date()
        const monthBefore = startOfMonth(sub(now, {months: 1}))
        const monthAfter = endOfMonth(add(now, {months: 1}))
        let range: Date[][] = dateRange(monthBefore, monthAfter)
        setRange(range)
        setNowLinePosition(range.flat().findIndex((date) => isSameDay(date, new Date())) + getHours(new Date()) / 24 + getMinutes(new Date()) / 1440)
        
        const interval = setInterval(() => {
            setNowLinePosition(range.flat().findIndex((date) => isSameDay(date, new Date())) + getHours(new Date()) / 24 + getMinutes(new Date()) / 1440)
        }, 600000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Container>
            <NowLine position={nowLinePosition}/>
            {
                range.map(month => (
                    <Month numberOfDay={month.length}>
                        <MonthHeader>
                            <MonthName><Sticky>{ format(month[0], 'MMM').toUpperCase() }</Sticky></MonthName>
                            {
                                month.map(day => (
                                    <DayHeader isToday={isToday(day)}>
                                        <DayName isToday={isToday(day)}>{ format(day, 'EEEEE') }</DayName>
                                        { format(day, 'd') }
                                    </DayHeader>
                                ))
                            }
                        </MonthHeader>
                        <MonthBody>
                            {
                                month.map(day => (
                                    <DayBody isWeekEnd={isWeekend(day)} />
                                ))
                            }
                        </MonthBody>
                    </Month>
                ))
            }
        </Container>
    )
}

export default Body
