import Matrix from "../components/Matrix"
import "../styles/landing.css"

import { NavLink } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Matrix/>
            <div className="above">
                <div className="shadow"></div>
                <div className="top">
                    <div className="heading">
                        ASCIINATOR
                    </div>
                    <div className="subheading">
                        Experience the magic of AI-powered ASCII art!
                    </div>

                    <NavLink className="landingpgbutton" to="/app">Get started!</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Landing