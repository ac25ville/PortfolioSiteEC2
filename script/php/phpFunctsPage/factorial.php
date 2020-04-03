<?php
    function factorial($a){
        if($a==0){
            return 1;
        }else{
            return factorial($a-1)*$a;
        }
    }
    echo $_GET['factorial_value'];
    $temp = factorial($_GET['factorial_value']);
    echo $temp;
?>