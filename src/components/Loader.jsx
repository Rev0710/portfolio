import { useEffect, useState } from "react"

function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => onFinish(), 500)
                    return 100
                }
                return prev + 1
            })
        }, 20)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loader">

            {/* 3D BACKGROUND BLOBS */}
            <div className="loader-bg">
                <span className="blob b1"></span>
                <span className="blob b2"></span>
                <span className="blob b3"></span>
            </div>

            {/* CONTENT */}
            <div className="loader-content">
                <h1 className="loader-title">Portfolio</h1>

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