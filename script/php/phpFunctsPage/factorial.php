<?php
    function factorial($a){
        if($a==0){
            return 1;
        }else{
            return factorial($a-1)*$a;
        }
    }
    echo "The factorial of: ".$_GET['factorial_value']." is ".factorial($_GET['factorial_value']);
?>