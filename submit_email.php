<?php
header('Content-Type: application/json');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get the email from the POST request
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if (!$email) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

try {
    // Check if SQLite3 is available
    if (!class_exists('SQLite3')) {
        throw new Exception('SQLite3 extension is not installed');
    }

    // Use absolute path for database file
    $dbFile = __DIR__ . '/subscriptions.db';
    
    // Check if database file exists and is writable
    if (!file_exists($dbFile)) {
        // Try to create the database file
        if (!touch($dbFile)) {
            throw new Exception('Cannot create database file. Check permissions. Path: ' . $dbFile);
        }
        chmod($dbFile, 0666); // Make it readable and writable
    }

    if (!is_writable($dbFile)) {
        throw new Exception('Database file is not writable. Check permissions. Path: ' . $dbFile);
    }

    // Log the current user and file permissions
    error_log('Current user: ' . get_current_user());
    error_log('Database file permissions: ' . substr(sprintf('%o', fileperms($dbFile)), -4));
    error_log('Database file owner: ' . posix_getpwuid(fileowner($dbFile))['name']);

    // Connect to SQLite database
    $db = new SQLite3($dbFile);
    
    // Create table if it doesn't exist
    $db->exec('CREATE TABLE IF NOT EXISTS subscriptions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )');
    
    // Prepare the insert statement
    $stmt = $db->prepare('INSERT INTO subscriptions (email) VALUES (:email)');
    $stmt->bindValue(':email', $email, SQLITE3_TEXT);
    
    // Execute the statement
    $result = $stmt->execute();
    
    if ($result) {
        echo json_encode(['success' => true, 'message' => 'Thank you for subscribing!']);
    } else {
        throw new Exception('Failed to insert data: ' . $db->lastErrorMsg());
    }
    
    // Close the database connection
    $db->close();
} catch (Exception $e) {
    error_log('Subscription error: ' . $e->getMessage());
    echo json_encode([
        'success' => false, 
        'message' => 'Database error occurred. Please try again later.',
        'debug' => $e->getMessage()
    ]);
}
?> 