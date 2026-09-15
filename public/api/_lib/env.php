<?php
// Reads a config value from the real process environment first (works if
// Qualispace exposes an env-var panel), falling back to config.php (see
// config.example.php) for hosts where that isn't available.
function isn_env(string $key, string $default = ''): string
{
    $value = getenv($key);
    if ($value !== false && $value !== '') {
        return $value;
    }

    static $fileConfig = null;
    if ($fileConfig === null) {
        $file = __DIR__ . '/config.php';
        $fileConfig = is_file($file) ? require $file : [];
    }

    return $fileConfig[$key] ?? $default;
}
