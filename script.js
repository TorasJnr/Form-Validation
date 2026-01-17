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

// git add .
// git commit -m "Js added"
// git push