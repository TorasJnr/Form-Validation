var input = document.querySelectorAll("input");
    input[0].focus()
    var error = document.querySelectorAll(".error");
    var click = document.querySelectorAll(".click");
    var click1 = document.querySelectorAll(".click1");

    function validate (){
        if( input[0].value.trim() == ""){
            input[0].focus()
            input[0].style.border = "1px solid red";
            error[0].style.display = "block"
            click[0].style.display = "block"
            click1[0].style.display = "none"
            return false;
        }
        else if(input[1].value.trim() == ""){
            input[1].focus()
            input[1].style.border = "1px solid red";
            error[1].style.display = "block"
            click[1].style.display = "block"
            click1[1].style.display = "none"
            return false;
        }
        else if(input[2].value.trim() == ""){
            input[2].focus()
            input[2].style.border = "1px solid red";
            error[2].style.display = "block"
            click[2].style.display = "block"
            click1[2].style.display = "none"
            return false;
        }
        else if(input[2].value.length < 6){
            input[2].focus()
            input[2].style.border = "1px solid red";
            error[2].style.display = "block"
            click[2].style.display = "block"
            click1[2].style.display = "none"
            error[2].innerHTML = "Password must not be less than 6 characters"
            return false;
        }
        else if(input[3].value.trim() == ""){
            input[3].focus()
            input[3].style.border = "1px solid red";
            error[3].style.display = "block"
            click[3].style.display = "block"
            click1[3].style.display = "none"
            error[3].innerHTML = "Please confirm your Password"
            return false;
        }
    }

// git add .
// git commit -m "Js added"
// git push