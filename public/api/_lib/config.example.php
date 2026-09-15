<?php
// Copy this file to config.php (same folder) and fill in real values.
// config.php is gitignored — never commit real SendGrid credentials.
//
// Only needed if your host has no way to set process environment
// variables (getenv() is checked first — see env.php).
return [
    'SENDGRID_API_KEY' => '',
    'SENDGRID_FROM_EMAIL' => '',
    'ADMIN_NOTIFY_EMAIL' => 'paid@isngs.com',
];
