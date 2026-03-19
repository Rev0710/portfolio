import { useEffect, useRef } from "react"

function CursorGlow() {
    const glowRef = useRef(null)

    useEffect(() => {
        const moveGlow = (x, y) => {
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${x}px, ${y}px)`
            }
        }

        const handleMouseMove = (e) => {
            moveGlow(e.clientX, e.clientY)
        }

        const handleTouchMove = (e) => {
            const touch = e.touches[0]
            moveGlow(touch.clientX, touch.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("touchmove", handleTouchMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("touchmove", handleTouchMove)
        }
    }, [])

    return <div ref={glowRef} className="cursor-glow"></div>
}

export default CursorGlow