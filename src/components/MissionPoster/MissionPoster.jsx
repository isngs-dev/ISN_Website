import Icon from '../Icon/Icon';
import logo from '../../assets/brand/isn-logo.png';
import { SOCIAL_LINKS } from '../../data/social';
import './MissionPoster.css';

const DART_SRC = '/images/arrow.png';
const POSTER_SOCIALS = ['twitter', 'facebook', 'instagram', 'linkedin'];

/**
 * Recreation of the "Your Vision Becomes Our Shared Mission" poster as real
 * HTML — same layout/colors as the original design, but with the isngs.com
 * line swapped for clickable social links. The dart/target photo is kept as
 * an image (a photographic render can't be faithfully redrawn); everything
 * else is live text.
 */
export default function MissionPoster() {
  const socials = SOCIAL_LINKS.filter((s) => POSTER_SOCIALS.includes(s.name));

  return (
    <div className="mission-poster">
      <div className="mission-poster__dart">
        <img src={DART_SRC} alt="" aria-hidden="true" />
      </div>

      <img src={logo} alt="iSN" className="mission-poster__logo" />

      <h2 className="mission-poster__headline">
        Your<br />Vision<br />Becomes<br />Our Shared
      </h2>

      <p className="mission-poster__badge">Mission</p>

      <div className="mission-poster__social">
        {socials.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            <Icon name={s.name} size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}
