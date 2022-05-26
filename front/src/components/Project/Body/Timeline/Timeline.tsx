import { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { add, sub, startOfMonth, endOfMonth, isBefore, isSameDay, isWeekend } from 'date-fns'
import { isSameMonth } from 'date-fns/esm'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    overflow-x: scroll;
`

const Month = styled.div`
    display: flex;
    flex: 0 0 calc(30 * 75px);
    background-color: ${({theme}) => theme.colorBlue};
`

const Day = styled.div<{isWeekEnd: boolean}>`
    flex: 0 0 75px;
    background: ${props => props.isWeekEnd ? `repeating-linear-gradient(
        -45deg,
        #E5EAEF,
        #E5EAEF 1px,
        #F3F4F7 1px,
        #F3F4F7 13px
    )` : '#F4F6F9'};
    border-right: 1px solid #E5EAEF;
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

    useEffect(() => {
        const now = new Date()
        const monthBefore = startOfMonth(sub(now, {months: 1}))
        const monthAfter = endOfMonth(add(now, {months: 1}))
        let range: Date[][] = dateRange(monthBefore, monthAfter)
        console.log(range)
        setRange(range)
    }, [])

    return (
        <Container>
            {
                range.map(month => (
                    <Month>
                        {
                            month.map(day => (
                                <Day isWeekEnd={isWeekend(day)}>

                                </Day>
                            ))
                        }
                    </Month>
                ))
            }
        </Container>
    )
}

export default Body
