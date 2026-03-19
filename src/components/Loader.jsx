import { useEffect, useState } from "react"

function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0)
    const [exit, setExit] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)

                    // trigger exit animation
                    setExit(true)

                    // wait animation before removing loader
                    setTimeout(() => onFinish(), 800)

                    return 100
                }
                return prev + 1
            })
        }, 18)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={`loader ${exit ? "fade-out" : ""}`}>

            {/* 3D BACKGROUND */}
            <div className="loader-bg">
                <span className="blob b1"></span>
                <span className="blob b2"></span>
                <span className="blob b3"></span>
            </div>

            {/* CONTENT */}
            <div className="loader-content">
                <h1 className="loader-title">John Rev Dela Rosa</h1>

                <div className="loader-bar">
                    <div
                        className="loader-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="loader-percent">{progress}%</p>
            </div>
        </div>
    )
}

export default Loader