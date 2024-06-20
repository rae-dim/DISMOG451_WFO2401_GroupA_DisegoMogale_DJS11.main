import React from "react"
import { useTheme } from "styled-components"
import { MenuRounded} from "@mui/icons-material"

export default function NavBar({setMenuOpen, menuOpen }) {

    const theme = useTheme()

    return (
        <div className="flex justify-between w-full py-4 px-10 items-center gap-8 cursor-pointer md:hidden"
			style={{ color: theme.text_primary, backgroundColor: theme.bg }}>
			<button key="menu-icon" className="" onClick={() => setMenuOpen(!menuOpen) }>
                <MenuRounded />
            </button>
		</div>
    )
}