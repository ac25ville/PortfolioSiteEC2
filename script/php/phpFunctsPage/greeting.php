<?php
    function printGreeting(){
        echo "Greetings ".$_POST['firstName']." ".$_POST['lastName'];
    }
    printGreeting();
?>