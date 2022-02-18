<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="styles_2.css">
    
</head>

<body>
    <?php echo "<h1>Welcome " . $_SESSION['username'] . "</h1>"; ?>
    <a href="logout.php" class= "logout" >Logout</a>
    <br>
   <a href="https://hate-offens-lang-detector.herokuapp.com/"  class="buttontag" target="_blank" ><button>Check if your opinion can be hurtful to others before posting</button></a>
    
</body>
</html>