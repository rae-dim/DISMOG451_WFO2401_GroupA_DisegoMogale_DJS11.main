import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {HomeRounded, CloseRounded} from "@mui/icons-material"


const Menu = styled.div`

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
            <Logo> </Logo>
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