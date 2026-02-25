import React, { useEffect, useRef } from "react";
import '../../components/courses/steps.css';

const Steps = (props) => {
    const timelineRef = useRef();

    useEffect(() => {
        const containers = document.querySelectorAll(".timeline-container");
        const timeline = document.querySelector(".timeline");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        containers.forEach(container => {
                            container.classList.add('shownew');
                            timeline.classList.add('time');
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => {
            containers.forEach((container) => observer.unobserve(container));
        };
    }, []);

    return (
        <div className="main" ref={timelineRef}>
            <h2 className="Course-part-title">Learn from Industry Leaders in Tech</h2>
            <p className="Course-part-description">
                Our mentors are experienced professionals, passionate about helping
                you build a successful career in
            </p>
            <div className="timeline">
                {props.timeline.map((item, index) => (
                    <div key={item.id || index} className="timeline-container">
                        <div className="white-circle">
                            <img src={"../images/check.png"} alt="" />
                        </div>
                        <div className="text-box">
                            <h2>{item.title}</h2>
                            <small>{item.duration}</small>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
