<?php
// Start the session
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include your database connection file
    include 'connection.php';

    // Sanitize and escape the input data
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $number = mysqli_real_escape_string($conn, $_POST['number']);
    $address = mysqli_real_escape_string($conn, $_POST['address']);
    $area = mysqli_real_escape_string($conn, $_POST['area']);
    $landmark = mysqli_real_escape_string($conn, $_POST['landmark']);
    $pincode = mysqli_real_escape_string($conn, $_POST['pincode']);

    // Assuming the username is stored in the session and you want to update the data for this user
    $username = $_SESSION['username'];

    // Prepare an SQL statement to update the data
    $sql = "UPDATE users SET name = ?, number = ?, address = ?, area = ?, landmark = ?, pincode = ? WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $name, $number, $address, $area, $landmark, $pincode, $username);

    // Execute the statement
    if ($stmt->execute()) {
        echo "User data updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the statement and the database connection
    $stmt->close();
    $conn->close();
} else {
    // Redirect to the form if the request method is not POST
    header('Location: demo.html');
    exit;
}
?>
