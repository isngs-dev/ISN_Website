import Icon from '../../components/Icon/Icon';
import './RecruitmentPlatform.css';

const CANDIDATES = [
  { name: 'J. Alvarez', distance: '4 mi', match: 92, status: 'Registered' },
  { name: 'M. Chen', distance: '9 mi', match: 87, status: 'Outreach sent' },
  { name: 'R. Patel', distance: '12 mi', match: 81, status: 'Registered' },
  { name: 'K. Johnson', distance: '18 mi', match: 74, status: 'Sourced' },
  { name: 'D. Smith', distance: '22 mi', match: 68, status: 'Outreach sent' },
];

const STATUS_TONE = {
  Registered: 'success',
  'Outreach sent': 'accent',
  Sourced: 'muted',
};

const FUNNEL = [
  { label: 'Sourced', value: 100 },
  { label: 'Outreach Sent', value: 70 },
  { label: 'Registered', value: 42 },
  { label: 'Assigned', value: 28 },
];

export default function RecruitmentPlatform() {
  return (
    <div className="rec-platform">
      <p className="badge">Illustrative interface</p>
      <div className="rec-platform__top">
        <div className="rec-platform__map card">
          <p className="rec-platform__panel-title"><Icon name="map" size={16} /> Coverage Map</p>
          <div className="rec-platform__map-canvas">
            <span className="rec-platform__pin rec-platform__pin--gap" style={{ top: '30%', left: '22%' }} />
            <span className="rec-platform__pin" style={{ top: '48%', left: '55%' }} />
            <span className="rec-platform__pin" style={{ top: '62%', left: '38%' }} />
            <span className="rec-platform__pin rec-platform__pin--gap" style={{ top: '20%', left: '70%' }} />
            <span className="rec-platform__pin" style={{ top: '72%', left: '68%' }} />
          </div>
          <div className="rec-platform__legend">
            <span><i className="dot dot--brand" /> Shopper coverage</span>
            <span><i className="dot dot--gap" /> Coverage gap</span>
          </div>
        </div>

        <div className="rec-platform__candidates card">
          <p className="rec-platform__panel-title"><Icon name="users" size={16} /> Candidate Matches</p>
          <div className="rec-platform__candidate-list">
            {CANDIDATES.map((c) => (
              <div className="rec-platform__candidate" key={c.name}>
                <span className="rec-platform__candidate-name">{c.name}</span>
                <span className="rec-platform__candidate-distance">{c.distance}</span>
                <span className="rec-platform__candidate-match">{c.match}% match</span>
                <span className={`rec-platform__candidate-status rec-platform__candidate-status--${STATUS_TONE[c.status]}`}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rec-platform__funnel card">
        <p className="rec-platform__panel-title"><Icon name="workflow" size={16} /> Recruitment Funnel</p>
        <div className="rec-platform__funnel-bars">
          {FUNNEL.map((f) => (
            <div className="rec-platform__funnel-row" key={f.label}>
              <span>{f.label}</span>
              <div className="rec-platform__funnel-track"><div className="rec-platform__funnel-fill" style={{ width: `${f.value}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
