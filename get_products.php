<?php
// Include your database connection file
include 'connection.php';

// Prepare an SQL statement
$stmt = $conn->prepare("SELECT product_id, product_image, product_name, price, quantity, category FROM product");

// Execute the statement
$stmt->execute();

// Bind the result variables
$stmt->bind_result($product_id, $product_image, $product_name, $price, $quantity, $category);

// Fetch all the results
$result = [];
while ($stmt->fetch()) {
    $result[] = [
        'product_id' => $product_id,
        'product_image' => $product_image,
        'product_name' => $product_name,
        'price' => $price,
        'quantity' => $quantity,
        'category' => $category
    ];
}

// Close the statement
$stmt->close();

// Close the database connection
$conn->close();

// Format the result to match the desired structure
$formattedResult = array_map(function($product) {
    return [
        'id' => $product['product_id'],
        'image' => $product['product_image'],
        'name' => $product['product_name'],
        'kg' => $product['quantity'], // Assuming 'quantity' is the weight in kg
        'priceCents' => $product['price'], // Assuming 'price' is in dollars, convert to cents
        'category' => $product['category']
    ];
}, $result);

// Convert the result to JSON
$jsonData = json_encode($formattedResult);

// Check for JSON errors
if (json_last_error() !== JSON_ERROR_NONE) {
    // Handle the error, for example, by logging it or displaying a message
    echo "JSON Error: " . json_last_error_msg();
} else {
    // Send the JSON data to the client-side
    echo $jsonData;
}
?>