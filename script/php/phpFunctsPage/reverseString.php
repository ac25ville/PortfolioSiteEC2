<?php
    function reverseString($s){
        
    }

    $temp = $_GET['string_to_reverse'];
    $temp .= "\0";
    echo $temp;
    echo reverseString($_GET['string_to_reverse']);
?>