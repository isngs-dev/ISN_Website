<?php
// Contact page "Send Message" form.
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require __DIR__ . '/_lib/email.php';

$body = json_decode(file_get_contents('php://input'), true) ?: [];
$name = trim((string)($body['name'] ?? ''));
$email = trim((string)($body['email'] ?? ''));

if ($name === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Name and email are required']);
    exit;
}

$adminEmail = isn_env('ADMIN_NOTIFY_EMAIL', 'paid@isngs.com');
$summary = isn_format_lead_summary($body);
$firstName = explode(' ', $name)[0];

try {
    isn_send_email($adminEmail, "New contact form submission from $name", $summary);
    isn_send_email(
        $email,
        'Thanks for reaching out to iSN Business Solutions',
        "Hi $firstName,\n\nThanks for reaching out — we received your message and will follow up shortly.\n\nHere's a copy of what you sent us:\n\n$summary\n\n— iSN Business Solutions"
    );
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    error_log('contact form email failed: ' . $e->getMessage());
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send email']);
}
