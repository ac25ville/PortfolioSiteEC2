<?php
    function factorial($a){
        if($a==0){
            return 1;
        }else{
            return factorial($a-1)*$a;
        }
    }
    $temp = factorial($_GET['factorial_value']);
    echo $temp;
?>