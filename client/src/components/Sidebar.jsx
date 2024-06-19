import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {HomeRounded, CloseRounded} from "@mui/icons-material"
/* import "./index.css" */

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text_primary};
   /* @media (max-width: 1100px) {
    position: fixed;
    z-index: 100;
    width: 100%;
    max-width: 250px;
    left: ${({ setMenuOpen}) => (setMenuOpen? '0' : '-250px')};
    transition: left 0.3s ease-in-out; */
`
const Logo = styled.div`
    color: ${({theme}) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: bold;
    font-size: 24px;
    margin: 16px 0px;
`
const CloseIcon = styled.div`

`

const Elements = styled.div`

`
const Navigation = styled.div`

`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
const Flex2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export default function Sidebar() {
    return (
        <Menu>
            <Flex>
                <Logo>PODTASTIC</Logo>
                <CloseIcon>
                    <CloseRounded />
                </CloseIcon>
            </Flex>
            <Elements>
                <Flex2>
                    <HomeRounded />
                    <Navigation>Listen Now</Navigation>
                </Flex2>
            </Elements>
        </Menu>
    )
}