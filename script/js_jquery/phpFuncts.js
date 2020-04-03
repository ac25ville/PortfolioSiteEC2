$(function(){
                var selectedValue;
                //end of global vars
                var changeFormTitle = function(){
                    $("#function_name").html(selectedValue.html()+ " Function");
                };
                //end of commonly used functions
            $("#form_submit").click(function(){
                selectedValue = $("#function_select option:selected");
                if(selectedValue.val() === "greeting"){//when php comes around need to change action and method to fit each requriement, using .attr();
                    changeFormTitle();
                    $("#function_form").html("<label for='firstName'>First Name:</label> <input type='text' id='firstName' name='firstName'><br><label for='lastName'>Last Name:</label> <input type='text' id='lastName' name='lastName'><br><input type='submit'><br><input type='reset'>");
                    $("#function_form")
                    .attr("method", "POST");
                    $("#function_form")
                    .attr("action", "../../php/phpFunctsPage/greeting.php");
                    //add another attr() to chain the change for the action
                }else if(selectedValue.val() === "factorial"){
                    changeFormTitle();
                    $("#function_form").html("<label for='factorial_value'>Integer: </label><br><input type = 'text' id='factorial_value' name='factorial_value'><br><input type='submit'><br><input type='reset'>");
                    $("#function_form").attr("method", "GET");
                }else if(selectedValue.val() === "reverse_string"){
                    changeFormTitle();
                    $("#function_form").html("<label for='string_to_reverse'>String to Reverse:</label><br><input type='text' id='string_to_reverse' name='string_to_reverse'><br><input type='submit'><br><input type='reset'>");
                    $("#function_form").attr("method", "GET");
                }else if(selectedValue.val() === "sum_of_squares"){
                    changeFormTitle();
                    $("#function_form").html("<label for='larger_int'>Larger Integer</label> <input type='text' id='larger_int' name='larger_int'><br><label for='smaller_int'>Smaller Integer</label><input type='text' id='smaller_int' name='smaller_int'><br><input type='submit'><br><input type='reset'>");
                    $("#function_form").attr("method", "GET");
                }else{
                    $("#function_name").html(selectedValue.html() + " to Display");
                    $("#function_form").html(null);
                }
            });     
        });