import React from "react"
import { useTheme } from "styled-components"

export default function NavBar() {
    const theme = useTheme()
    return (
        <div className={`flex justify-between w-full py-4 px-10 items-center gap-7`}
			style={{ color: theme.text_primary, backgroundColor: theme.bg }}>
			NavBar
		</div>
    )
}