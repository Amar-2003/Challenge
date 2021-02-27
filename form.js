document.addEventListener('DOMContentLoaded',function (){
let button = document.querySelector('#Submit_button');
let returnbutton = document.querySelector('#return_homepage');
returnbutton.style.visibility = "hidden"
button.addEventListener('click',function (){

   let name = document.querySelector('#nameinput').value;
   let email = document.querySelector('#emailinput').value;
   let state = document.querySelector('#state').value
    if(name == ""){
        alert("Enter Your name")
        return 0;
    }
    if(email == ""){
        alert("Enter Your email")
        return 0;
    }
    if(state == ""){
        alert("Enter Your state")
        return 0;
    }
    document.querySelector('#feedback1').innerHTML = "Your details have been saved"
    returnbutton.style.visibility = "visible"

})
})