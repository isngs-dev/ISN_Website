import { useEffect, useRef, useState } from 'react';
import { useUI } from '../../context/UIContext';
import { OPENING_OPTIONS, FLOWS } from './flows';
import { submitLead } from '../../lib/api';
import { trackAIChatQualified } from '../../lib/analytics';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import './AIChat.css';

const OPENING_MESSAGE = "Hi. I'm iSN's AI Assistant. What are you trying to achieve?";

export default function AIChat() {
  const { chatOpen, openChat, closeChat, openCalendar } = useUI();
  const [messages, setMessages] = useState([{ from: 'bot', text: OPENING_MESSAGE }]);
  const [flowId, setFlowId] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [stage, setStage] = useState('intro'); // intro | qualify | contact | done
  const [textValue, setTextValue] = useState('');
  const [contact, setContact] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, stage]);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') closeChat(); }
    if (chatOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [chatOpen, closeChat]);

  function addMessage(from, text) {
    setMessages((m) => [...m, { from, text }]);
  }

  function chooseOption(option) {
    addMessage('user', option.label);
    const flow = FLOWS[option.id];
    setFlowId(option.id);
    setQuestionIndex(0);
    setStage('qualify');
    setTimeout(() => addMessage('bot', flow.questions[0].q), 300);
  }

  function answerQuestion(answerText) {
    const flow = FLOWS[flowId];
    addMessage('user', answerText);
    const nextIndex = questionIndex + 1;
    if (nextIndex < flow.questions.length) {
      setQuestionIndex(nextIndex);
      setTimeout(() => addMessage('bot', flow.questions[nextIndex].q), 300);
    } else {
      setTimeout(() => {
        addMessage('bot', flow.solution.text);
        addMessage('bot', "What's the best way to reach you so we can follow up?");
        setStage('contact');
      }, 300);
    }
    setTextValue('');
  }

  async function submitContact(e) {
    e.preventDefault();
    if (!contact.name || !contact.email) return;
    setSubmitting(true);
    addMessage('user', `${contact.name} — ${contact.email}`);
    await submitLead({ source: 'ai_chat', industry: FLOWS[flowId]?.industry, ...contact });
    trackAIChatQualified({ industry: FLOWS[flowId]?.industry });
    setSubmitting(false);
    setStage('done');
    setTimeout(() => addMessage('bot', "Thanks — that's on its way to our team. Want to lock in a strategy call now?"), 300);
  }

  function restart() {
    setMessages([{ from: 'bot', text: OPENING_MESSAGE }]);
    setFlowId(null);
    setQuestionIndex(0);
    setStage('intro');
    setContact({ name: '', email: '' });
  }

  const flow = flowId ? FLOWS[flowId] : null;
  const currentQuestion = flow?.questions[questionIndex];

  return (
    <>
      <button
        type="button"
        className="ai-launcher"
        onClick={() => openChat('floating_launcher')}
        aria-label="Talk to iSN AI"
      >
        <Icon name="bot" size={22} />
        <span>Talk to iSN AI</span>
      </button>

      {chatOpen && (
        <div className="ai-chat" role="dialog" aria-label="iSN AI Assistant" aria-modal="true">
          <div className="ai-chat__header">
            <div className="ai-chat__header-title">
              <Icon name="bot" size={18} /> iSN AI Assistant
              <span className="badge">Product illustration</span>
            </div>
            <button type="button" onClick={closeChat} aria-label="Close chat"><Icon name="close" size={18} /></button>
          </div>

          <div className="ai-chat__body" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ai-chat__bubble ai-chat__bubble--${m.from}`}>{m.text}</div>
            ))}

            {stage === 'intro' && (
              <div className="ai-chat__options">
                {OPENING_OPTIONS.map((opt) => (
                  <button key={opt.id} type="button" onClick={() => chooseOption(opt)}>{opt.label}</button>
                ))}
              </div>
            )}

            {stage === 'qualify' && currentQuestion?.options && (
              <div className="ai-chat__options">
                {currentQuestion.options.map((o) => (
                  <button key={o} type="button" onClick={() => answerQuestion(o)}>{o}</button>
                ))}
              </div>
            )}

            {stage === 'contact' && (
              <form className="ai-chat__contact-form" onSubmit={submitContact}>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                />
                <input
                  type="email"
                  placeholder="Business email"
                  required
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                />
                <Button type="submit" variant="primary" size="sm" className="btn--block" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send'}
                </Button>
              </form>
            )}

            {stage === 'done' && (
              <div className="ai-chat__options">
                <button type="button" onClick={() => { closeChat(); openCalendar('ai_chat'); }}>Book a Strategy Call</button>
                {flow && (
                  <a href={flow.solution.to} className="ai-chat__link-btn">{flow.solution.cta}</a>
                )}
                <button type="button" onClick={restart}>Start over</button>
              </div>
            )}
          </div>

          {stage === 'qualify' && !currentQuestion?.options && (
            <form
              className="ai-chat__input-row"
              onSubmit={(e) => { e.preventDefault(); if (textValue.trim()) answerQuestion(textValue.trim()); }}
            >
              <input
                type="text"
                placeholder={currentQuestion?.placeholder || 'Type your answer…'}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                aria-label="Your answer"
              />
              <button type="submit" aria-label="Send"><Icon name="send" size={16} /></button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
