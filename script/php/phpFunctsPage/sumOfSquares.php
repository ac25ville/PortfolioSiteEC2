<?php
    function sumOfSquares($a, $b){ //for the sake of documentation anyone might read, 'a' MUST be greater than 'b' (i.e. a>b) for this function to continue and work, otherwise an error message will be displayed
        if($a>$b){
            $temp=0;
            
            for($i = $b; $i<=$a; $i++){
                $temp+= $i*$i;//make sure to use the dollar signs EVERYTIME you use a variable smh :/
            }
                return "The sum of squares between ".$_GET['smaller_int']." and ".$_GET['larger_int']." is ".$temp;
        }else if($a==$b){
            return "The sum of squares of these two numbers is 0";}else{return "Please make sure the Larger Integer box is a *larger integer* than the smaller integer";}}
    echo sumOfSquares($_GET['larger_int'], $_GET['smaller_int']);
?>