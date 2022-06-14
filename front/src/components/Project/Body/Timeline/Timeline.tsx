import { FunctionComponent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { add, sub, startOfMonth, endOfMonth, isBefore, isSameDay, isWeekend, format, isToday, getHours, getMinutes } from 'date-fns'
import { isSameMonth } from 'date-fns/esm'
import { Issue } from '../../../../types/Issue'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 750px;
    overflow-x: scroll;
`

const Month = styled.div<{numberOfDay: number}>`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(${({numberOfDay}: {numberOfDay: number}) => numberOfDay} * 75px);
    background-color: ${({theme}: {theme: {colorGray: string}}) => theme.colorGray};
    border-right: 1px solid ${({theme}: {theme: {borderColor: string}}) => theme.borderColor};
    box-sizing: content-box;
`

const MonthHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    flex: 0 0 90px;
    background-color: ${({theme}: {theme: {primary: string}}) => theme.primary};
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
    color: ${({isToday, theme}: {isToday: boolean, theme: {colorBlue: string}}) => isToday ? theme.colorBlue : '#676D7C'};
    font-weight: bold;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        border-right: 1px solid ${({theme}: {theme: {borderColor: string}}) => theme.borderColor};
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
    background: ${({isWeekEnd, theme}: {isWeekEnd: boolean, theme: {borderColor: string, colorGray: string, colorDarkGray: string}}) => isWeekEnd ? `repeating-linear-gradient(
        -60deg,
        ${theme.borderColor},
        ${theme.borderColor} 1.5px,
        ${theme.colorDarkGray} 1.5px,
        ${theme.colorDarkGray} 16.2px
    )` : theme.colorGray};
    border-right: 1px solid ${({theme}: {theme: {borderColor: string}}) => theme.borderColor};
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

const IssueContainer = styled.div<{start: number, end: number, topPosition: number}>`
    position: absolute;
    top: calc(${({topPosition}: {topPosition: number}) => topPosition} * 50px + 95px);
    left: calc(${({start}: {start: number}) => start} * 75px + 5px);
    display: flex;
    background-color: white;
    width: calc(${({start, end}: {start: number, end: number}) => end - start} * 75px - 5px);
    height: 45px;
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

const Timeline: FunctionComponent = () => {
    const [range, setRange] = useState<Date[][]>([])
    const [issues, setIssues] = useState<Issue[]>([])
    const [positions, setPositions] = useState<number[][]>([])
    const [nowLinePosition, setNowLinePosition] = useState<number>(0)
    const container = useRef()

    useEffect(() => {
        const now = new Date()
        const monthBefore = sub(now, {months: 1})
        const monthAfter = add(now, {months: 1})
        let range: Date[][] = dateRange(monthBefore, monthAfter)
        setRange(range)
        setNowLinePosition(range.flat().findIndex((date) => isSameDay(date, new Date())) + getHours(new Date()) / 24 + getMinutes(new Date()) / 1440)
        container.current.scrollLeft = 75 * nowLinePosition - container.current.offsetWidth / 2

        const interval = setInterval(() => {
            setNowLinePosition(range.flat().findIndex((date) => isSameDay(date, new Date())) + getHours(new Date()) / 24 + getMinutes(new Date()) / 1440)
        }, 600000)

        const issuesArray: Issue[] = [
            {
                id: 1,
                title: 'Test issue',
                created_at: sub(new Date(), {days: 1}),
                expected_at: add(new Date(), {days: 2}),
                start: range.flat().findIndex(date => isSameDay(date, sub(new Date(), {days: 1}))),
                end: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 2}))),
                topPosition: 0, // 0
            },
            {
                id: 2,
                title: 'Test issue',
                created_at: sub(new Date(), {days: 2}),
                expected_at: add(new Date(), {days: 5}),
                start: range.flat().findIndex(date => isSameDay(date, sub(new Date(), {days: 2}))),
                end: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 5}))),
                topPosition: 0, // 1
            },
            {
                id: 3,
                title: 'Test issue',
                created_at: add(new Date(), {days: 3}),
                expected_at: add(new Date(), {days: 5}),
                start: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 3}))),
                end: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 6}))),
                topPosition: 0, // 0
            },
            {
                id: 4,
                title: 'Test issue',
                created_at: add(new Date(), {days: 3}),
                expected_at: add(new Date(), {days: 5}),
                start: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 3}))),
                end: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 5}))),
                topPosition: 0, // 2
            },
            {
                id: 5,
                title: 'Test issue',
                created_at: add(new Date(), {days: 5}),
                expected_at: add(new Date(), {days: 7}),
                start: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 5}))),
                end: range.flat().findIndex(date => isSameDay(date, add(new Date(), {days: 7}))),
                topPosition: 0, // 3
            },
        ]
        
        // issuesArray.map((issue, index) => {
        //     if (!index) {
        //         return
        //     }
        //     const issueRange = dateRange(issue.created_at, issue.expected_at).flat()
        //     issuesArray.slice(0, index).reverse().map((issue2, index2, arr) => {
        //         issue.topPosition = arr.length
        //         const issue2Range = dateRange(issue2.created_at, issue2.expected_at).flat()
        //         if (!issue2Range.some(date2 => issueRange.some(date => isSameDay(date, date2)))) {
        //             issue.topPosition -= 1
        //         }
        //     })
        // })

        let arrDate: Date[][] = []
        let arrPosition: number[][] = []
        arrDate[0] = []
        arrPosition[0] = []
        issuesArray.map((issue, index) => {
            const issueRange = dateRange(issue.created_at, issue.expected_at).flat()
            for (let i = 0; i < arrDate.length; i++) {
                if (!arrDate[i].some(dateArr => issueRange.some(date => isSameDay(date, dateArr)))) {
                    arrDate[i] = [...arrDate[i], ...issueRange]
                    arrPosition[i] = [...arrPosition[i], index]
                    break
                } else {
                    if (!arrDate[i + 1]) {
                        arrDate[i + 1] = []
                        arrPosition[i + 1] = []
                    }
                }
            }
        })
        console.log(arrDate)
        console.log(arrPosition)

        setIssues(issuesArray)
        setPositions(arrPosition)

        return () => clearInterval(interval)
    }, [nowLinePosition])

    const onScroll = (event) => {
        container.current.scrollLeft += event.deltaY;
    }

    return (
        <Container onWheel={onScroll} ref={container}>
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
            {
                // issues.map(issue => (
                //     <IssueContainer start={issue.start} end={issue.end} topPosition={issue.topPosition}>{ issue.title }</IssueContainer>
                // ))
                positions.map((pos, index) => (
                    pos.map(p => (
                        <IssueContainer start={issues[p].start} end={issues[p].end} topPosition={index}>{ issues[p].title }</IssueContainer>
                    ))
                ))
            }
        </Container>
    )
}

export default Timeline
