import Icon from '../../components/Icon/Icon';
import './ChatMockup.css';

const TRANSCRIPT = [
  { from: 'bot', text: "Hi, I'm the AI Sales Assistant. What can I help with today?" },
  { from: 'user', text: 'Do you offer financing for roof replacement?' },
  { from: 'bot', text: 'Yes — we can walk through financing options during your inspection. Can I get your ZIP code to check availability?' },
  { from: 'user', text: '30309' },
  { from: 'bot', text: "You're in our service area. Want me to book a free inspection this week?" },
];

export default function ChatMockup() {
  return (
    <div className="chat-mockup">
      <p className="badge">Illustrative interface</p>
      <div className="chat-mockup__window">
        <div className="chat-mockup__header"><Icon name="bot" size={16} /> AI Sales Assistant</div>
        <div className="chat-mockup__body">
          {TRANSCRIPT.map((m, i) => (
            <div key={i} className={`chat-mockup__bubble chat-mockup__bubble--${m.from}`}>{m.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
