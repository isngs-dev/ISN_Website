// Lightweight, dependency-free line-icon set (24x24, stroke-based).
// Add new icons by extending PATHS below.

const PATHS = {
  roof: 'M3 12 12 4l9 8M5 11v8a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-8',
  network: 'M12 3v4M6 21v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M4 21h4v-4H4v4Zm12 0h4v-4h-4v4ZM9 3h6v4H9V3Z',
  growth: 'M4 19h16M7 16V9m5 7V5m5 11v-6',
  'map-pin': 'M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  workflow: 'M4 6h5v5H4V6Zm11 0h5v5h-5V6ZM4 15h5v5H4v-5Zm11 4h5M9 8.5h6M6.5 11v3.5M17.5 11v3.5',
  ai: 'M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z',
  attract: 'M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-4v4l3 2',
  convert: 'M4 5h16v4H4V5Zm2 8h12M6 17h8',
  engage: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z',
  qualify: 'm9 12 2 2 4-4M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
  schedule: 'M8 3v3m8-3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm3 8h2m4 0h2',
  sync: 'M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6M4 4v4h4m8 12v-4h4',
  optimize: 'M4 19h16M6 16l3-4 3 2 4-6 3 4',
  chat: 'M4 5h16v10H8l-4 4V5Z',
  pipeline: 'M4 6h5v4H4V6Zm11 0h5v4h-5V6ZM4 14h5v4H4v-4Zm11 0h5v4h-5v-4ZM9 8h6M9 16h6M6.5 10v4M17.5 10v4',
  map: 'M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Zm0 0v14m6-12v14',
  dashboard: 'M4 4h7v7H4V4Zm9 0h7v4h-7V4Zm0 7h7v9h-7v-9ZM4 14h7v6H4v-6Z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  'chevron-down': 'M6 9l6 6 6-6',
  check: 'M5 13l4 4L19 7',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.2L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.2-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.5 2Z',
  mail: 'M4 5h16v14H4V5Zm0 0 8 7 8-7',
  pin: 'M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z',
  send: 'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z',
  bot: 'M12 3v3M8 21h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm1-7h.01M15 14h.01',
  calendar: 'M8 3v3m8-3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
  shield: 'M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z',
  users: 'M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 9v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  megaphone: 'M3 11v2a1 1 0 0 0 1 1h2l5 4V6l-5 4H4a1 1 0 0 0-1 1Zm14-4a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14',
  edit: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z',
  bar: 'M4 20V10m6 10V4m6 16v-7m6 7V8',
};

export default function Icon({ name, size = 24, className, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d={d} />
    </svg>
  );
}
