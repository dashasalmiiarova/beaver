<?php
if($_POST["submit"]) {
    $recipient="dashasalmiiarova@gmail.com"; //Enter your mail address
    $subject="Contact from Website"; //Subject 
    $sender=$_POST["name"];
    $message=$_POST["tel"];
    $mailBody="Name: $sender\nEmail Address: $senderEmail\n\nMessage: $message";
    mail($recipient, $subject, $mailBody);
    sleep(1);
    header("Location:http://youtube.com"); // Set here redirect page or destination page
}
?>