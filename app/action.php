<?php
    // if($_POST["submit"]) {
        $to="dashasalmiiarova@gmail.com"; //Enter your mail address
        $subject="Contact from Website"; //Subject 
        $name=$_POST["first_name"];
        $tel=$_POST["tel"];
        $mailBody="Name: $name\n\nMessage: $tel";
        mail($to, $subject, $mailBody);
        echo "Your message has been sent";
        // sleep(1);
        // header("Location:http://youtube.com"); // Set here redirect page or destination page
    // }
?>