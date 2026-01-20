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
         else if(input[3].value != input[2].value){
            input[3].focus()
            input[3].style.border = "1px solid red";
            click[3].style.display = "block"
            click1[3].style.display = "none"
            error[3].style.display = "block"
            error[3].innerHTML = "Password must be the same"
            return false;
        }
    }

    input[0].addEventListener("keyup", function(){
        if(input[0].value.trim() != ""){
            click[0].style.display = "none"
            click1[0].style.display = "block"
            input[0].style.border = "none"
            error[0].style.display = "none"
        }
    });

     input[1].addEventListener("keyup", function(){
        if(input[1].value.trim() != ""){
            click[1].style.display = "none"
            click1[1].style.display = "block"
            input[1].style.border = "none"
            error[1].style.display = "none"
        }
    });

    input[2].addEventListener("keyup", function(){
        if(input[2].value.trim() != ""){
            click[2].style.display = "none"
            click1[2].style.display = "block"
            input[2].style.border = "none"
            error[2].style.display = "none"
        }
    });

    input[3].addEventListener("keyup", function(){
        if(input[3].value.trim() != ""){
            click[3].style.display = "none"
            click1[3].style.display = "block"
            input[3].style.border = "none"
            error[3].style.display = "none" 
        }
    });
    input[3].addEventListener("keyup", function(){
        if(input[3].value != input[2].value){
            click[3].style.display = "block"
            click1[3].style.display = "none"
            input[3].style.border = "none"
            error[3].style.display = "none"
        }
    }); 

    var show = document.querySelectorAll(".show");
    var hide = document.querySelectorAll(".hide");

    show[0].addEventListener("click", function(){
        if(input[2].type == "password"){
            input[2].type = "text"
            show[0].style.display = "none"
            hide[0].style.display = "block"
        }
    })
    hide[0].addEventListener("click", function(){
        if(input[2].type == "text"){
            input[2].type = "password"
            show[0].style.display = "block"
            hide[0].style.display = "none"
        }
    })
    show[1].addEventListener("click", function(){
        if(input[3].type == "password"){
            input[3].type = "text"
            show[1].style.display = "none"
            hide[1].style.display = "block"
        }
    })
    hide[1].addEventListener("click", function(){
        if(input[3].type == "text"){
            input[3].type = "password"
            show[1].style.display = "block"
            hide[1].style.display = "none"
        }
    }) 
    let counter;
    let counterLine;
    const quiz = new Quiz(questions);

    startBtn.addEventListener('click', () => {
        document.querySelector('.start-section').classList.add('hidden');
        quizSection.classList.remove('hidden');
        showQuestion(quiz.getCurrentQuestion());
        showNumber();
        startTimer();
        showNumber();
        startTimer(10);
        startLine();
    });
nextBtn.addEventListener('click', () => {
    
    


// git add .
// git commit -m "Js added"
// git push