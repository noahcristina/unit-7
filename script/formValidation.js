// COMP 266: Unit 5 js Site Design
// Noah Cristina: 34582526
// source: https://www.w3schools.com/js/js_validation.asp , https://www.youtube.com/watch?v=9X5pbT4GhQw , https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter

//if the name of the feild is empty, the error message will be displayed by alert if faulse continue and repeat the process
function formValadation() {
        if (document.contactForm.name.value == "") {
            alert("Name must be filled out");
            document.contactForm.name.focus();
            return false;//
        
    }else if (document.contactForm.subject.value == "") {
            alert("Subject must be filled out");
            document.contactForm.subject.focus();
            return false;
        
    }else if (document.contactForm.message.value == "") {
            alert("Message must be filled out");
            document.contactForm.message.focus();
            return false;
    }
    else {
            return true;
        }
}


function pressEnter(){  
    var input = document.getElementById("submit");//selects the submit button
    input.addEventListener("keypress", function(event) {//adds an event listener to the submit button
    if (event.key === "Enter") {//if the enter key is pressed prevent screen refresh
        event.preventDefault();
        document.getElementById("submit").click();//triggers the submit button
    }
    });
}
  