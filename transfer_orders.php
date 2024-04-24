<?php
// Include your database connection file
include 'connection.php';

// Retrieve the orders from localStorage
$orders = json_decode($_POST['orders'], true);

// Loop through each order and insert it into the database
foreach ($orders as $order) {
    $id = $order['id'];
    $name = $order['name'];
    $image = $order['image'];
    $quantity = $order['quantity'];

    // Prepare an SQL statement
    $stmt = $conn->prepare("INSERT INTO orders (id, name, image, quantity) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("sssi", $id, $name, $image, $quantity);

    // Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>