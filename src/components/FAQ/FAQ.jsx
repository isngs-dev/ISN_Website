import { useState } from 'react';
import Icon from '../Icon/Icon';
import './FAQ.css';

export default function FAQ({ items, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {title && <h2 className="h3 faq__title">{title}</h2>}
      <div className="faq__list">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={item.q}>
              <button
                type="button"
                className="faq__question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {item.q}
                <Icon name="chevron-down" size={18} />
              </button>
              {isOpen && <p className="faq__answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
