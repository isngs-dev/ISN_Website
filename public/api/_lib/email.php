<?php
// Thin wrapper around SendGrid's v3 Mail Send API (plain cURL — no
// Composer/SDK needed for a single call).
require_once __DIR__ . '/env.php';

function isn_format_lead_summary(array $body): string
{
    $get = function (string $key) use ($body) {
        $value = trim((string)($body[$key] ?? ''));
        return $value !== '' ? $value : '—';
    };

    return implode("\n", [
        'Name: ' . $get('name'),
        'Company: ' . $get('company'),
        'Email: ' . $get('email'),
        'Phone: ' . $get('phone'),
        'Service: ' . $get('service'),
        'Message: ' . $get('message'),
    ]);
}

function isn_send_email(string $to, string $subject, string $text): void
{
    $apiKey = isn_env('SENDGRID_API_KEY');
    $fromEmail = isn_env('SENDGRID_FROM_EMAIL');
    if ($apiKey === '' || $fromEmail === '') {
        throw new Exception('SendGrid is not configured (SENDGRID_API_KEY / SENDGRID_FROM_EMAIL missing)');
    }

    $payload = json_encode([
        'personalizations' => [['to' => [['email' => $to]]]],
        'from' => ['email' => $fromEmail, 'name' => 'iSN Business Solutions'],
        'subject' => $subject,
        'content' => [['type' => 'text/plain', 'value' => $text]],
    ]);

    $ch = curl_init('https://api.sendgrid.com/v3/mail/send');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $apiKey,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => $payload,
    ]);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError !== '') {
        throw new Exception("SendGrid request failed: $curlError");
    }
    if ($status < 200 || $status >= 300) {
        throw new Exception("SendGrid error $status: $response");
    }
}
