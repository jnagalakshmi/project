<?php
// db_connection.php should contain your database connection code
include 'connection.php';

function fetchProducts() {
    global $conn;
    $sql = "SELECT * FROM products"; // Adjust the query to fetch the products you want
    $result = $conn->query($sql);

    $products = array();
    if ($result->num_rows >  0) {
        while($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
    }
    return $products;
}

$products = fetchProducts();
?>