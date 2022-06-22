//Book For A Cause Form Validation
function validate() {//created a function called "validate"
  let elements = document.forms.myForm.elements; //sets all elements in the form to equal the variable "elements"

  let canSubmit = true; //sets canSubmit to equal true

  for (let i = 0; i < elements.length; i++) { //goes through every element in the form
    if (elements[i].value.length == 0) canSubmit = false; //if an element is equal to 0 than the canSubmit will = to false
  }
  submitted.disabled = !canSubmit; //if any element is not equal to submit than the form will be prevented from being submitted
}
submitted.addEventListener('click', function (e) { //created an event listener that will allow a function to take place once a click event occurs on a form submit button
  e.preventDefault(); //prevents the default submission of the form from taking place and loading an unknown location
  alert("Thank-you for booking with Pup Huts and generously donating to a great cause!");// this will allow an alert to appear once the form has been succesfully submitted
  myForm.reset();//this will reset the form once it has been successfully submitted to allow another visitor to input information
  validate();//this will call the "validation" function
}); 

//Cabin with a Pup: These functions will allow visitors to zoom in and out on the table at the bottom of the page
  function zoom() { //created a function called "zoom"
  document.querySelector('table').style.height="100%"; //once called, the function will show the table at 100% height length
  document.querySelector('table').style.width="100%";//once called, the function will show the table at 100% width length
  }
 function original() {//created a function called "original"
 
  document.querySelector('table').style.height="80%";//once called, the function will show the table at 80% width length
  document.querySelector('table').style.width="80%";//once called, the function will show the table at 80% width length
  }

