import Icon from '../../components/Icon/Icon';
import './DashboardMockup.css';

const REGIONS = [
  { name: 'Southeast', score: 91 },
  { name: 'Midwest', score: 84 },
  { name: 'Northeast', score: 88 },
  { name: 'West', score: 76 },
];

export default function DashboardMockup() {
  return (
    <div className="ms-dash">
      <p className="badge">Illustrative interface</p>
      <div className="ms-dash__grid">
        <div className="ms-dash__card ms-dash__card--score card">
          <p className="ms-dash__card-title">Overall Score</p>
          <p className="ms-dash__big-number">88.4</p>
          <p className="ms-dash__trend"><Icon name="growth" size={14} /> +2.1 vs last period</p>
        </div>

        <div className="ms-dash__card card">
          <p className="ms-dash__card-title">Region Comparison</p>
          {REGIONS.map((r) => (
            <div className="ms-dash__bar-row" key={r.name}>
              <span>{r.name}</span>
              <div className="ms-dash__bar-track"><div className="ms-dash__bar-fill" style={{ width: `${r.score}%` }} /></div>
              <span className="ms-dash__bar-value">{r.score}</span>
            </div>
          ))}
        </div>

        <div className="ms-dash__card card">
          <p className="ms-dash__card-title">Volume &amp; Completion</p>
          <div className="ms-dash__stat-row"><span>Shops completed</span><strong>[DATA REQUIRED]</strong></div>
          <div className="ms-dash__stat-row"><span>Completion rate</span><strong>[DATA REQUIRED]</strong></div>
          <div className="ms-dash__stat-row"><span>Avg. turnaround</span><strong>[DATA REQUIRED]</strong></div>
        </div>

        <div className="ms-dash__card card">
          <p className="ms-dash__card-title">Low-Score Exceptions</p>
          <div className="ms-dash__exception">Location #114 — Greeting <span>62</span></div>
          <div className="ms-dash__exception">Location #087 — Wait Time <span>58</span></div>
          <div className="ms-dash__exception">Location #203 — Cleanliness <span>65</span></div>
        </div>

        <div className="ms-dash__card ms-dash__card--wide card">
          <p className="ms-dash__card-title"><Icon name="ai" size={16} /> AI Observation Panel <span className="badge ms-dash__decision-tag">Decision support</span></p>
          <p className="body-sm text-muted">
            Location #087 has trended below program average on "Wait Time" for 3 consecutive cycles — consider a targeted follow-up review. This is a suggested observation for your team to evaluate, not an automated action.
          </p>
        </div>
      </div>
    </div>
  );
}
