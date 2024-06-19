import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {HomeRounded, CloseRounded} from "@mui/icons-material"


const Menu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({theme}) => theme.bg};
    position: fixed;
`
const Logo = styled.div`

`
const CloseIcon = styled.div`

`

const Elements = styled.div`

`
const Navigation = styled.div`

`
export default function Sidebar() {
    return (
        <Menu>
            <Logo>Podtastic</Logo>
            <CloseIcon>
                <CloseRounded />
            </CloseIcon>
            <Elements>
                <HomeRounded />
                <Navigation>Listen Now</Navigation>
            </Elements>
        </Menu>
    )
}