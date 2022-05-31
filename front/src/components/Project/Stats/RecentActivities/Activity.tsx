import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import { FunctionComponent, useMemo } from 'react'
import styled from 'styled-components'
import { ActivityInterface } from './RecentActivities'

const Container = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    gap: 15px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid ${({theme}) => theme.borderColor};

    &:last-child {
        border: none;
        margin: 0;
    }
`

const Image = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    background-color: red;
    background-image: url('https://img.freepik.com/free-vector/people-avatar-bundle-set-user-portraits-circles-different-human-face-icons-male-female_212216-492.jpg?w=900');
    background-position: 130.25px 97px;
    background-size: 225px 108.25px;
`

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`

const NameAndDate = styled.div`
    flex: 1;
    display: flex;
    gap: 10px;
    min-width: 0;
`

const Name = styled.div`
    flex-shrink: 0;
    font-weight: bold;
    color: ${({theme}) => theme.textColor};
`

const Date = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({theme}) => theme.tertiaryTextColor};
`

const ActivityText = styled.div`
    color: ${({theme}) => theme.tertiaryTextColor};
`

const TaskName = styled.span`
    font-weight: bold;
    color: ${({theme}) => theme.secondaryTextColor};
`

interface Props {
    activity: ActivityInterface
    now: Date
}

const Activity: FunctionComponent<Props> = ({activity, now}) => {

    const formatShort = (str: string): string => {
        return str
            .replace(/hour/g, 'hr')
            .replace(/minute[s]?/g, 'min')
            .replace(/about/g, '')
    }
    
    return (
        <Container>
            <Image />
            <TextContainer>
                <NameAndDate>
                    <Name>{activity.username}</Name>
                    <Date>{formatShort(formatDistanceToNow(activity.date, { addSuffix: true }))}</Date>
                </NameAndDate>
                <ActivityText>
                    Completed the <TaskName>{activity.task_name}</TaskName> task
                </ActivityText>
            </TextContainer>
        </Container>
    )
}

export default Activity
