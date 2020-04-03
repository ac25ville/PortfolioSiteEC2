<?php
    function factorial($a){
        if(gettype($a)!="integer"){
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