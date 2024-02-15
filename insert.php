<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include('index.php');
$searchTerm = isset($_GET['title']) ? $_GET['title'] : '';
$apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=' . $searchTerm . '&appid=b19ed9149425e4f0e16a5ad5dd696fb1';

$api_data = file_get_contents($apiURL);
$api_data = json_decode($api_data, true);

$value1 = round($api_data['main']['temp']);
$value2 = $api_data['main']['humidity'];
$value3 = $api_data['wind']['speed'];
$value4 = $api_data['main']['pressure'];
$value5 = $api_data['name'];
$value6 = $api_data['timezone'];
$value8 = $api_data['weather'][0]['main']; // fix index here

$timestamp = time() + $value6;
$date = new DateTime();
$date->setTimestamp($timestamp);
$date->setTimezone(new DateTimeZone('UTC'));
$day = $date->format('D');

$sqlCreateTable = "CREATE TABLE IF NOT EXISTS weatherdb (
    id int(11) AUTO_INCREMENT PRIMARY KEY,
    images text, 
    temp text, 
    pressure text, 
    humidity text, 
    windspeed text, 
    name text, 
    timezone text, 
    day text
)";

// Try to execute the create table query
try {
    if (mysqli_query($conn, $sqlCreateTable) === FALSE) {
        throw new Exception("Table create failed: " . mysqli_error($conn));
    }
    echo 'Table created successfully';
    
    $sql = "INSERT INTO weatherdb (temp, humidity, windspeed, pressure, name, timezone, images, day ) VALUES ('$value1', '$value2', '$value3', '$value4', '$value5', '$value6', '$value8', '$day')";

    if ($conn->query($sql) === TRUE) {
        echo 'Data Inserted';
    } else {
        echo 'Insertion failed: ' . $conn->error;
    }
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}
?>
