import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";

export const HeroSection = () => {
    return (
        <>
        <main className="hero-section main">
                <div className="left-section">
                    <div className="text-field">
                        <h1 className="heading-one">
                            Explore The World, One Country at a Time
                        </h1>
                        <p className="paragraph">
                            Discover history, culture, and beauty of every country to find the details.
                        </p>
                        <button className="home-main-button">
                            Start Exploring <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <div className="hero-img">
                    <img
                        src="/images/globe 1.jpg"
                        alt="globe img"
                        className="globe-img"
                    />
                </div>
                {/* Animated Airplane */}
                <FaPlane className="airplane" />
            </main>
        </>
    )
}