
import spark from '../../assets/images/spark.png';
import arrow from '../../assets/images/arrow.png';
import { AccordionCourse } from "./AccordionCourse";



function FAQMAIN({data}) {
  console.log(data)
  return (
    <section className="faq-section">
      <h2 className="faq-title">
        Frequently Asked <span>Questions
          <img src={spark} alt="Spark" className="spark" />
        </span>
      </h2>

      <div className="faq-container">
      <AccordionCourse items={data}/>
      </div>

      <div className="faq-decorations">
        <img src={arrow} alt="Arrow" className="arrow" />
      </div>
    </section>
  );
}

export default FAQMAIN;