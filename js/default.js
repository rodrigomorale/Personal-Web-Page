// Default functions for all pages
var isMobile;


function typeOfAcess(){
// Variables Definition

// Test if is mobile 
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
        document.body.style.fontSize = '3em';
    } else {
        isMobile = false;
        document.body.style.fontSize = '1em';
    }     
}

function checkHeader(){
// Variables Definition
    var screenWidth = document.documentElement.clientWidth;
    var desktopHeader = document.querySelector('#desktopHeader');     
    var mobileHeader = document.querySelector('#mobileHeader');
    var mobileMenu = document.querySelector('#mobileHeaderMenu');
   
    if (screenWidth < '800' || isMobile){
        desktopHeader.style.display = 'none';
        mobileHeader.style.display = 'inline-block';
        mobileMenu.style.display = 'none';
    } else {
        desktopHeader.style.display = 'inline-block';
        mobileHeader.style.display = 'none';
        mobileMenu.style.display = 'none';
    }
}
    
function openHeaderMenu(){
// Variables Definition
    var mobileMenu = document.querySelector('#mobileHeaderMenu');    
    mobileMenu.style.display = 'inline-block';
}

function closeHeaderMenu(){
// Variables Definition
    var mobileMenu = document.querySelector('#mobileHeaderMenu');        
    mobileMenu.style.display = 'none';
}

function checkContact(){
    // Variables Definition
    var screenWidth = document.documentElement.clientWidth;
    var contactMain = document.querySelectorAll(".ContactMain");
    
    if (screenWidth < '800' || isMobile){
        contactMain.forEach(function(item , index){
            contactMain[index].style.cssFloat = "none";
            contactMain[index].style.width = "75%";    
        });
    } else {
        contactMain.forEach(function(item , index){
            contactMain[index].style.cssFloat = "left";
            contactMain[index].style.width = "40%";    
        });
    }
}

function checkFooter(){
// Variables Definition
    var screenWidth = document.documentElement.clientWidth;
    var bottom = document.querySelectorAll(".Bottom");

    if (screenWidth < '800' || isMobile){
        bottom.forEach(function(item , index){
            bottom[index].style.cssFloat = "none";
            bottom[index].style.width = "75%";    
        })
    } else {
        bottom.forEach(function(item , index){
            bottom[index].style.cssFloat = "left";
            bottom[index].style.width = "33%";    
        })
    }
}

function sendEmail(){
// Variables Definition
    var nameEmail    = document.querySelector("#NameEmail");
    var originEmail  = document.querySelector("#OriginEmail");
    var messageEmail = document.querySelector("#MessageEmail");            
    var buttonEmail = document.querySelector("#ButtonEmail");    
    var newEmail = new Email();
    var lastEmail = new Email();

// Variaveis da API
    var service_id = "";
    var template_id = "";

// Recovery data for Emails
    newEmail.getFromForm();
    lastEmail.getFromLocalStorage();

// Input validation     
    if (newEmail.name === ""){
        nameEmail.focus();
    } else {
        if (newEmail.origin === ""){
            originEmail.focus();
        } else {
            if (newEmail.message === ""){
                messageEmail.focus();
            } else {
                // Test if the same message was sended before    
                if (lastEmail.name === newEmail.name &&
                    lastEmail.origin === newEmail.origin &&
                    lastEmail.message === newEmail.message
                ){
                    alert("The same e-mail was sended before.");
                } else {
                // If the e-mail was not send before, send e-mail    
                    buttonEmail.innerHTML = "Sending...";   
                    emailjs.send(service_id, template_id, {
                        NameEmail: newEmail.name,
                        OriginEmail: newEmail.origin,
                        MessageEmail: newEmail.message                                                    
                    }).then(
                        // If e-mail was delivered with sucess
                        function(response) {
                            // Move input values to localStorage
                            newEmail.sendToLocalStorage();
                            
                            // Form initialization 
                            buttonEmail.innerHTML = "Send";
                            nameEmail.value = "";
                            originEmail.value = "";
                            messageEmail.value = "";
                            alert("Your e-mail was delivered with sucess!");
                            console.log("SUCCESS", response);
                        }, 
                        // If error to deliver e-mail
                        function(error) {
                            alert("Your e-mail was not delivered, please, try again.");
                            console.log("FAILED", error);
                        }
                    );  
               }
            }   
        }
    }
}
  
class Email {
// Atributtes    
    constructor(name, origin, message){
        this.name    = name;
        this.origin  = origin;
        this.message = message;
    }
// Methods
    getFromForm(){
        this.name    = document.querySelector("#NameEmail").value;
        this.origin  = document.querySelector("#OriginEmail").value;
        this.message = document.querySelector("#MessageEmail").value;            
    }

    getFromLocalStorage(){
        let sendedEmail = localStorage.rodrigomorale;
        let email = {};
        if (sendedEmail){
            email = JSON.parse(sendedEmail);
        }
        this.name    = email.name;
        this.origin  = email.origin;
        this.message = email.message;
    }

    sendToLocalStorage(){
        let email = {
            name:    this.name,
            origin:  this.origin,
            message: this.message
        };

        localStorage.rodrigomorale = JSON.stringify(email); 
    }
}