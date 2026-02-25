
import aboutSpring from '../assets/images/About-Spring.png'
function CTASectionBlog () {
    return (
        <div className="launch AboutCTA">
            <div className="launch-content">
                <div className="launch-angle">
                    <img src="/images/Group 1321314833.png" alt="" />
                </div>
                
                <div className="launch-spring">
                    <img src={aboutSpring} alt="" />
                </div>

                <h1>Learn It. <span className="changeBlack">Earn</span> It. Live It.</h1>
                <p>Digital World Tech Academy gives you the tools to master in-demand skills — from learning to business strategy — and start making money confidently.</p>
                <button>Explore Courses Now</button>
            </div>
        </div>
    )
};

export default CTASectionBlog;