import { FunctionComponent } from 'react'
import styled from 'styled-components'
import ImageTextItem from '../../ImageTextItem/ImageTextItem'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0 20px;
    width: 100%;
    height: 185px;
    border-bottom: 1px solid #e5eaef;
`

const Tree = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 15px;
    color: ${({theme}) => theme.tertiaryTextColor};
`

const Info = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 35px;
    font-weight: bold;
    color: ${({theme}) => theme.textColor};
`

const Tabs = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 1;
    `

const Tab = styled.div<{isActive: boolean}>`
    display: flex;
    margin-right: 35px;
    padding-bottom: 15px;
    color: ${({isActive, theme}: {isActive: boolean, theme: {tertiaryTextColor: string, textColor: string}}) => isActive ? theme.textColor : theme.tertiaryTextColor};
    border-bottom: ${({isActive, theme}: {isActive: boolean, theme: {colorBlue: string}}) => isActive ? `2px solid ${theme.colorBlue}` : 'none'};
    font-weight: ${({isActive}: {isActive: boolean}) => isActive ? 'bold' : 'normal'};
`

const Bold = styled.div`
    color: ${({theme}) => theme.textColor};
    font-weight: bold;
    font-size: 16px;
`

const SecondaryText = styled.div`
    color: ${({theme}) => theme.tertiaryTextColor};
    font-size: 12px;
`

const Menu: FunctionComponent = () => {
    return (
        <Container>
            <Tree>Projects / Way Finder / Board</Tree>
            <Info>Way Finder</Info>
            <Tabs>
                <Tab>Overview</Tab>
                <Tab>Boards</Tab>
                <Tab isActive>Timeline</Tab>
                <Tab>Activities</Tab>
                <Tab>Files</Tab>
            </Tabs>
        </Container>
    )
}

export default Menu
