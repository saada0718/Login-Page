const loginBtn = document.getElementById("login")
const userNameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

/*
    Name: bind_button_to_functions
    Parameters: None
    Output: None
    Purpose: The purpose of this function is to bind the event listener functions to 
             the appropriate function and action
    Author: Saad Ahmed
    Date: 27-12-2022
*/
function bind_button_to_functions(){
    loginBtn.addEventListener( "click" , login );
}

/*
    Name: login
    Parameters: None
    Output: None
    Purpose: This function is called when the user clicks the login button
             This function will display the username and the password that the user typed in
    Author: Saad Ahmed
    Date: 27-12-2022
*/
function login(){
    alert(userNameElement.value);
    alert(passwordElement.value);
}

bind_button_to_functions();