<?php
    function factorial($a){
        if(!is_int($a)){
            echo "Enter an Integer Value!";
                return;
        }else if($a==0){
            return 1;
        }else{
            return factorial($a--)*$a;
        }
    }

    echo factorial($_GET['factorial_value']);
?>