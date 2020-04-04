<?php
//    function reverseString($s){
//        $temp="";
//        for($i = strlen(s)-1; $i<strlen(s); $i++)
//        {
//            temp.=
//        }
//    }
//
//    $temp = $_GET['string_to_reverse'];
//    echo reverseString($temp);
    function reverseString($s)
    {
        return strrev($s);
    }
    echo reverseString($_GET['string_to_reverse']);
?>