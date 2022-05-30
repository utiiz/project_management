import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { BiHomeAlt, BiMessageSquare } from 'react-icons/bi'
import { BsLightningCharge, BsPeople, BsCalendar } from 'react-icons/bs'
import { MdOutlineFolderOpen, MdCheckCircleOutline } from 'react-icons/md'
import MenuItem from './MenuItem/MenuItem'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 300px;
    border-right: 1px solid ${({theme}: {theme: {borderColor: string}}) => theme.borderColor};
    padding: 27.5px;
`

const Divider = styled.div`
    flex: 0 0 1px;
    margin: 32px 17.5px;
    background: ${({theme}) => theme.borderColor};
`

const Body: FunctionComponent = () => {
    return (
        <Container>
            <MenuItem icon={<FaRegCheckCircle />} title="My Tasks" count={4}/>
            <MenuItem icon={<BsLightningCharge />} title="Activities" count={17}/>
            <Divider />
            <MenuItem title="Menu" isHeader/>
            <MenuItem icon={<BiHomeAlt />} title="Overview"/>
            <MenuItem icon={<MdOutlineFolderOpen />} title="Projects" isActive/>
            <MenuItem icon={<BiMessageSquare />} title="Messages" count={3}/>
            <MenuItem icon={<BsPeople />} title="Team Members"/>
            <MenuItem icon={<BiHomeAlt />} title="Calendar"/>
            <MenuItem title="Recent Projects" isHeader/>
            <MenuItem icon={<FiBox />} title="Way Finder"/>
            <MenuItem icon={<FiBox />} title="Internal Project"/>
            <MenuItem icon={<FiBox />} title="Bitly Landing"/>
        </Container>
    )
}

export default Body
