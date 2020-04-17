$(function(){
        
        $("#info_result").html("<h5>Loading...</h5>");
        $.get("https://www.mizzouit.com/2830/challenge9/classInfo.php?content=info", function(data){
                $("#info_result").html(data);
            });
        $("#type_result").html("<h5>Loading...</h5>");
        $.get("https://www.mizzouit.com/2830/challenge9/classInfo.php?content=classType", function(data){
           $("#type_result").html(data); 
        });
        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        var printDays = function(i,value){$("#day_choice").append("<li class='days'>"+value+"</li>");};$.each(days, printDays);
        
        $("#office_hour_result").html("Choose a day to view.");
        
        $(".days").click(function(){
            var day = $(this).html().toLowerCase().trim(); //stores day
            
            $("#office_hour_result").html("<h5>Loading...</h5>"); //shows section is loading
            
            $.getJSON("https://www.mizzouit.com/2830/challenge9/classInfo.php? content=officeHours&format=json&day="+day,function(data){ //gets JSON and parses it, nearly exactly what occured during lecture
                var temp = "";
                $.each(data, function(i, value){ //goes through each value of the data object that has been returned.
                    $.each(value, function(x){
                        temp += "Person: " + value[x].person+"<br>Time: "+value[x].time+"<br>Location: "+value[x].location;
                        temp+="<br>";
                    });     
                });
                temp.trim();
                $("#office_hour_result").html(temp);
            });
        });
    });
    function getAssign(){var xhttp = new XMLHttpRequest();document.getElementById("current_result").innerHTML = "<h5>Loading...</h5>";
        xhttp.onreadystatechange = function(){if(this.readyState == 4 && this.status == 200){changeAssign(this);}
        };xhttp.open("GET", "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=currentAssignment&format=xml", true);
        xhttp.send();function changeAssign(xml){
        var i;var xmlDoc=xml.responseXML;var a  = xmlDoc.getElementsByTagName("currentAssignment");
        for(i = 0; i<a.length; i++){var d = new Date();document.getElementById("current_result").innerHTML = a[i].getElementsByTagName("assignmentName")[0].childNodes[0].nodeValue+" " + d;}
    }};