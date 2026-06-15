let username= document.getElementById("username");
let password= document.getElementById("password");
let loginbtn= document.getElementById("btn");
let showBtn = document.getElementById("showBtn");
let message= document.getElementById("msg");

loginbtn.addEventListener("click", function(event){

    event.preventDefault();

    let user = username.value;
    let pass = password.value;

    if(user === "" || pass === ""){
       message.innerText = "Please fill all fields";
       return;
    }

     message.innerText = "Login successful";
     username.value = "";
     password.value = "";

});

showBtn.addEventListener("click", function(event){ 
    event.preventDefault(); 

    if(password.type === "password"){  
       password.type = "text";       
       showBtn.innerText = "Hide"; 
 }

 else{        
    password.type = "password";        
    showBtn.innerText = "👁 Show";    
}});
