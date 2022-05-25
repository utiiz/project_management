import { FunctionComponent } from 'react'
import Menu from '../components/Menu/Menu'
import Project from '../components/Project/Project'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const ProjectContainer: FunctionComponent = () => {
    return (
        <Container>
            <Menu />
            <Project />
        </Container>
    )
}

export default ProjectContainer
