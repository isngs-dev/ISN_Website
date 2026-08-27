import './Metrics.css';

export default function Metrics({ metrics }) {
  return (
    <div className="metrics">
      {metrics.map((m) => (
        <div className="metrics__item" key={m.label}>
          <p className="metrics__value">{m.value}</p>
          <p className="metrics__label">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
