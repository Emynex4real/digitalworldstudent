import { Link } from 'react-router-dom'
import aboutSpring from '../assets/images/About-Spring.png'
function CTASectionContact () {
    const scrollToTop = () => {
        scrollTo({top: 0, behavior: "smooth"})
    }
    return (
        <div className="launch contactCTA">
            <div className="launch-content">
                <div className="launch-angle">
                    <img src="/images/Group 1321314833.png" alt="" />
                </div>
                
                <div className="launch-spring">
                    <img src={aboutSpring} alt="" />
                </div>

                <h1>Learn <span className="changeBlack">Profitable Skills</span> Build a Better Future.</h1>
                <p>From Data Analysis to digital marketing, gain hands-on knowledge that turns your passion into income — online or offline.</p>
                <Link to={"/courses"} ><button onClick={()=>{scrollToTop()}}>Explore Courses Now</button></Link>
            </div>
        </div>
    )
};

export default CTASectionContact;