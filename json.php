
<?php
include('index.php');
$searchTerm = isset($_GET['title']) ? $_GET['title']:'';
$sql = "SELECT * FROM weatherdb WHERE name LIKE '%$searchTerm%'";
$result = $conn->query($sql);

if($result->num_rows >0){
    $data = array();
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }

    $conn ->close();

    $json_data = json_encode($data);
    
    header('Content-Type: application/json');

    echo $json_data;
}else{
    echo json_encode([]);
}
?>