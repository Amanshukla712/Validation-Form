

let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let firstName, lastName, email, password;
let field;
let showPasswordBtn = document.querySelector(".btn");


let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessages = document.querySelectorAll(".empty-field");

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; 
let passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let fnTarget, lnTarget, emailTarget, pwdTarget;

let fnFlag, lnFlag, emailFlag, pwdFlag;

for (let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let emptyFieldMessage of emptyFieldMessages){
    emptyFieldMessage.classList.add("d-none");
}

formData.addEventListener("keyup",(event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = event.target.value;
            fnTarget= event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emailTarget= event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
    

})
submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if(firstName){
        emptyFieldMessages[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag=false;
            
        }else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            fnFlag=true;
        }
    }else{
        emptyFieldMessages[0].classList.remove("d-none");
        
    }
    if(lastName){
        emptyFieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lnFlag=false;
            
        }else{
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lnFlag=true;
        }
    }else{
        emptyFieldMessages[1].classList.remove("d-none");
        
    }
    if(email){
        emptyFieldMessages[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            emailFlag=false;
            
        }else{
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emailFlag=true;    
        }
    }else{
        emptyFieldMessages[2].classList.remove("d-none");
        
    }
    if(password){
        emptyFieldMessages[3].classList.add("d-none");
        if(!passRegex.test(password)){
            pwdFlag=false;
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none")    
        }else{
            
            pwdTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
            pwdFlag=true;
        }
    }else{
        emptyFieldMessages[3].classList.remove("d-none");
        
    }

    if(fnFlag && lnFlag && emailFlag && pwdFlag){
        fnTarget.value= lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href="/index1.html";
    }
})

showPasswordBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(pwdTarget.getAttribute("type")=== "text"){
        pwdTarget.setAttribute("type","password");
    }else{
        pwdTarget.setAttribute("type","text")
    }
})