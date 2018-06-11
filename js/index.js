// Functions for Index.html //
window.onload = init;  

// Global Variables


function init(){
// Variables Definition
    var openMobileHeaderMenu = document.querySelector('#openMobileHeaderMenu');
    var closeMobileHeaderMenu = document.querySelector('#CloseHeaderMenu');
    var formSendEmail = document.querySelector("#ButtonEmail");

// Check if is mobile
    typeOfAcess()    
// Check Header
    checkHeader();
// Check Background
    checkHeaderBackground();
// Check Main
    checkMain();
// Check Contact
    checkContact();   
// Check Footer
    checkFooter();     

// Event Listener   
    window.addEventListener('resize', resizeWindow); 
    openMobileHeaderMenu.addEventListener('click', openHeaderMenu);
    closeMobileHeaderMenu.addEventListener('click', closeHeaderMenu);
    formSendEmail.addEventListener('click', sendEmail);
}    
    
function resizeWindow(){
// Variables Definition

// Check Header
    checkHeader();
// Check Background
    checkHeaderBackground();
// Check Main
    checkMain();
// Check Contact
    checkContact();
// Check Footer
    checkFooter();         
}    

function checkHeaderBackground(){
// Variables Definition
    var screenWidth = document.documentElement.clientWidth;
    var headerImage = document.querySelector("header");
    var headerH1 = document.querySelector(".HeaderIndex h1");
    var headerH3 = document.querySelector(".HeaderIndex h3");
    
    if (screenWidth < 800 || isMobile){
        headerImage.style.backgroundImage = "url('images/Header-Image-mobile.jpg')";
        headerH1.style.fontSize = "1em";
        headerH3.style.fontSize = "0.77em";
    } else {
        headerImage.style.backgroundImage = "url('images/Header-Image.jpg')";
        headerH1.style.fontSize = "3em";
        headerH3.style.fontSize = "2em";
    }
}

function checkMain(){
// Variables Definition
    var screenWidth = document.documentElement.clientWidth;
    var interestMenu = document.querySelectorAll(".InterestMenu");
    var aboutMeMenu = document.querySelectorAll(".AboutMeMenu");

    if (screenWidth < 800 || isMobile){
        interestMenu.forEach(function(item , index){
            interestMenu[index].style.cssFloat = "none";
            interestMenu[index].style.width = "75%";    
        });
        aboutMeMenu.forEach(function(item , index){
            aboutMeMenu[index].style.cssFloat = "none";
            aboutMeMenu[index].style.width = "75%";    
        });    
    } else {
        interestMenu.forEach(function(item , index){
            interestMenu[index].style.cssFloat = "left";
            interestMenu[index].style.width = "33%";    
        });
        aboutMeMenu.forEach(function(item , index){
            aboutMeMenu[index].style.cssFloat = "left";
            aboutMeMenu[index].style.width = "33%";    
        });
    }
}