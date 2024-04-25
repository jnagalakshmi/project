<?php
// Enable error reporting
ini_set('display_errors',  1);
ini_set('display_startup_errors',  1);
error_reporting(E_ALL);
 
// Include connection.php
include 'connection.php';
 
// Check if the form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get username and password from the form
    $username = mysqli_real_escape_string($conn,$_POST['username']);
    $password = mysqli_real_escape_string($conn,$_POST['password']);
 
    // Query to check if the username and password exist in the database
    $sql = "SELECT * FROM users WHERE username = '$username' and password = '$password'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    $count = mysqli_num_rows($result);
 
    // If user exists, set session and redirect to home page
    if($count == 1) {
        $_SESSION['username']=$username;
        header("Location: ../home/site/wwwroot/Home Page.php");
     //echo "login successful";
     
        exit(); // It's good practice to exit after redirection to prevent further execution
    } else {
        echo "Your Login Name or Password is invalid";
    }
}
?>
 

