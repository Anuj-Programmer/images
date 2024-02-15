<?php
// Database connection details
$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "weather";

// SQL query to create the database if it doesn't exist
$sqlCreateDatabase = "CREATE DATABASE IF NOT EXISTS $dbName";

try {
    // Establish a connection to the MySQL server
    $conn = mysqli_connect($serverName, $userName, $password);

    // Check if the connection was successful
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Create the database if it doesn't exist
    if (mysqli_query($conn, $sqlCreateDatabase) === FALSE) {
        die("Database create failed: " . mysqli_error($conn));
    }

    // Select the created or existing database
    if (!mysqli_select_db($conn, $dbName)) {
         die("Could not select database: " . mysqli_error($conn));
    }

    // Additional code can be added here for further database operations

} catch (Exception $e) {
    // Catch and display any exceptions that may occur
    echo 'Error: ' . $e->getMessage();
} 
?>
