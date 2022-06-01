import { sub } from 'date-fns'
import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'
import Activity from './Activity'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 27.5px 35px;
    background: ${({theme}) => theme.primary};
    overflow-y: overlay;
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

export interface ActivityInterface {
    username: string
    date: Date
    type: ActivityType
    task_name: string
}

export enum ActivityType {
    completed_task
}

interface Props {
}

const RecentActivities: FunctionComponent<Props> = () => {

    const [activities, setActivities] = useState<ActivityInterface[]>([])

    useEffect(() => {
        const array = [
            {
                username: 'Jacod Jones',
                date: sub(new Date(), {minutes: 3}),
                type: ActivityType.completed_task,
                task_name: 'Create primary button for home page' 
            },
            {
                username: 'Ralph Edwards',
                date: sub(new Date(), {hours: 1}),
                type: ActivityType.completed_task,
                task_name: 'User Onboarding Feedback Documentation' 
            },
            {
                username: 'Theresa Webb',
                date: sub(new Date(), {hours: 4}),
                type: ActivityType.completed_task,
                task_name: 'Review all page loaders' 
            }
        ]
        setActivities(array)
    }, [])

    return (
        <Container>
            <Header>
                <Title>Recent Activities</Title>
            <Icon />
            </Header>
            {
                activities.map(activity => (
                    <Activity activity={activity} now={new Date()} />
                ))
            }
        </Container>
    )
}

export default RecentActivities
