<?php
    $conn = mysqli_connect('localhost', 'root', '', 'database');

    if(mysqli_connect_error()){
        echo "<script> alert('Connection error'); </script>";
        exit();
    }


?>

<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST['submitUnsub'])){ //When the unsub button is clicked
            $email = $_POST['email']; //Getting user email
            $name = $_POST['name']; //Getting user name
            if(filter_var($email, FILTER_VALIDATE_EMAIL){ //ensuring valid email
                echo "Valid Email";
                $sql = "INSERT INTO user (name, email) VALUES ('$name', '$email')";
                mysqli_query($conn, $sql); 
            } else{
                echo "Invalid Email";
            }
    }

    echo "<script> alert('You have successfully unsubscribed'); </script>";
    exit();

?>