// src/components/Accordion.jsx
import { useState } from 'react';
import { AccordionIcon } from '../AccordionIcon';

export function AccordionItem({ title, children, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={onClick}>
        <span className="accordion-title">{title}</span>
        <AccordionIcon isOpen={isOpen} />
      </button>
      <div className="accordion-content">
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export function AccordionCourse({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log(items)

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}