'use strict';
//Common Function
const getElement = elementName =>{
    return document.querySelector(elementName);
}
const getAllElement = elementName =>{
    return document.querySelectorAll(elementName);
}

//Declarations
const toggleContainer = getElement('.toggle-container');
const themeButton = getElement('#theme-button');
const header = getElement('header');
const projectContainer = getElement('.projcontain');
const body = document.body;

//Function to change the theme of the page
toggleContainer.addEventListener('click', ()=>{
    themeButton.classList.toggle('toggle-translate');
    header.classList.toggle('header-dark-theme');
    projectContainer.classList.toggle('header-dark-theme');
    body.classList.toggle('dark-theme');
});