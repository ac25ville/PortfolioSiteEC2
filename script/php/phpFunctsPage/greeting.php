<?php
    print_r($_POST);
    function printGreeting(){
        echo "Greetings ".$_POST['firstName']." ".$_POST['lastName'];
    }
    printGreeting();
?>