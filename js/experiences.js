// Functions for Index.html //
window.onload = init;  

// Global Variables


function init(){
// Variables Definition
    var openMobileHeaderMenu = document.querySelector('#openMobileHeaderMenu');
    var closeMobileHeaderMenu = document.querySelector('#CloseHeaderMenu');
    var formSendEmail = document.querySelector('#ButtonEmail');

// Check if is mobile
    typeOfAcess()      
// Check Header
    checkHeader();
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
// Check Contact
    checkContact();
// Check Footer
    checkFooter();             
}    