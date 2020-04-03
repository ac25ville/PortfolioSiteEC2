<?php
    echo gettype($_GET['factorial_value']);
    function factorial($a){
        if(!is_int($a)){
            return "Enter an Integer Value";
        }else if($a==0){
            return 1;
        }else{
            return factorial($a--)*$a;
        }
    }

    echo factorial($_GET['factorial_value']);
?>