import { useEffect } from 'react';
import Icon from '../Icon/Icon';
import '../CalendarModal/CalendarModal.css';
import './ArticleModal.css';

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    if (article) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal article-modal" role="dialog" aria-modal="true" aria-label={article.title} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close"><Icon name="close" size={18} /></button>
        <div className="article-modal__scroll">
          <p className="badge">{article.category}</p>
          <h2 className="article-modal__title">{article.title}</h2>
          <div className="article-modal__body">
            {article.body.map((block, i) => {
              if (block.type === 'h3') return <h3 key={i} className="h4">{block.text}</h3>;
              if (block.type === 'ul') return <ul key={i}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
