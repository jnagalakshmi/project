<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>
    <link rel="stylesheet" href="login1.css">
</head>
<body>
    <div class="main">
        <div class="container">
            <div class="heading">Sign In</div>
            <form class="form" action="login.php" method="post">
            <input
                placeholder="E-mail"
                id="username"
                name="username"
                type="username"
                class="input"
                required=""
            />
            <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                class="input"
                required=""
            />
            <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
            <input value="Sign In" type="submit" class="login-button" />
            </form>
            <span class="agreement"><a href="regis1.html">Don't have an account</a></span>
        </div>
    </div> 
</body>
</html>

<?php
// Enable error reporting
ini_set('display_errors',  1);
ini_set('display_startup_errors',  1);
error_reporting(E_ALL);

session_start(); // Start the session

// Database connection parameters
$server = "agroserver.mysql.database.azure.com";
$userid ="bhumi";
$Password = "Agriculture1234";
$myDB = "bhumi";
$con = mysqli_connect($server,$userid,$Password,$myDB);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


   
if($_SERVER["REQUEST_METHOD"] == "POST") {
   // username and password sent from form 
   
   $username = mysqli_real_escape_string($conn,$_POST['username']);
   $password = mysqli_real_escape_string($conn,$_POST['password']); 
   


   $sql = "SELECT * FROM users WHERE username = '$username' and password = '$password'";
   $result = mysqli_query($conn,$sql);
   $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
   $count = mysqli_num_rows($result);
   if($count == 1) {
      // echo"Welcome";
      $_SESSION['username']=$username;
      header("Location: ../project/Home Page.php");
   }else {
      echo "Your Login Name or Password is invalid";
   }
}
?>

