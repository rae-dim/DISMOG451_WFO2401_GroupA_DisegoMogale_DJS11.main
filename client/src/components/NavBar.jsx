import React from "react"
import { useTheme } from "styled-components"
import { MenuRounded, LoginRounded } from "@mui/icons-material"

export default function NavBar() {
    const theme = useTheme()

    return (
        <div className="flex justify-between w-full py-4 px-10 items-center gap-8"
			style={{ color: theme.text_primary, backgroundColor: theme.bg }}>
			<div key="menu-icon" className="">
                <MenuRounded />
            </div>
            <div key="login-button" className="flex items-center gap-2 hover:">
                <LoginRounded />
                <span className="text-sm">Login</span>
            </div>
		</div>
    )
}