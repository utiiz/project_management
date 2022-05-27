import { FunctionComponent } from 'react'
import styled from 'styled-components'
import ImageTextItem from '../../ImageTextItem/ImageTextItem'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 85px;
    border-bottom: 1px solid #e5eaef;
`

const Menu: FunctionComponent = () => {
    return (
        <Container>
            <ImageTextItem primaryText='Horizon View' secondaryText='Product Company' hasCarret={true}/>
        </Container>
    )
}

export default Menu
