import './FunnelDashboard.css';

const STAGES = [
  { label: 'Ad Spend', width: 100 },
  { label: 'Landing Page Visits', width: 82 },
  { label: 'AI Conversations', width: 64 },
  { label: 'Qualified Homeowners', width: 46 },
  { label: 'Inspections Scheduled', width: 34 },
  { label: 'Inspections Completed', width: 27 },
  { label: 'Jobs Won', width: 18 },
];

export default function FunnelDashboard() {
  return (
    <div className="funnel-dash card">
      <div className="funnel-dash__header">
        <p className="badge">Product illustration</p>
        <p className="body-sm text-muted">Downstream results matter more than vanity metrics.</p>
      </div>
      <div className="funnel-dash__bars">
        {STAGES.map((s) => (
          <div className="funnel-dash__row" key={s.label}>
            <span className="funnel-dash__row-label">{s.label}</span>
            <div className="funnel-dash__row-track">
              <div className="funnel-dash__row-fill" style={{ width: `${s.width}%` }} />
            </div>
            <span className="funnel-dash__row-value">[DATA REQUIRED]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
