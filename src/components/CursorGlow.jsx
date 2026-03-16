import { useEffect } from "react"

function CursorGlow() {

    useEffect(() => {

        const glow = document.querySelector(".cursor-glow")

        document.addEventListener("mousemove", (e) => {

            glow.style.left = e.pageX + "px"
            glow.style.top = e.pageY + "px"

        })

    }, [])

    return <div className="cursor-glow"></div>

}

export default CursorGlow