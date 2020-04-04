<?php
//@refrences https://www.javatpoint.com/php-reverse-string [ strrev(); ]
    function reverseString($s)
    {
        return strrev($s);
    }
    echo "The reverse of ".$_GET['string_to_reverse']." is ". reverseString($_GET['string_to_reverse']);
?>