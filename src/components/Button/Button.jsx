import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

/**
 * Shared button/link component. Renders a <Link> for internal routes ("to"),
 * an <a> for external hrefs, or a <button> for actions (onClick, type).
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // primary | secondary | on-dark | ghost
  size,
  arrow = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, size ? `btn--${size}` : '', className].filter(Boolean).join(' ');
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" size={16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
