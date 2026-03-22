let text = document.querySelector(".content p");

let hour = new Date().getHours();

if(hour < 12){
text.innerText = "Good Morning! Start your day with coffee ☕";
}
else if(hour < 18){
text.innerText = "Good Afternoon! Enjoy a fresh coffee ☕";
}
else{
text.innerText = "Good Evening! Relax with a warm coffee ☕";
}


let form = document.querySelector("form");

form.addEventListener("submit", function(e){

let username = document.querySelector("input[type='text']").value;
let email = document.querySelector("input[type='email']").value;

if(username === "" || email === ""){
alert("Please fill all fields");
e.preventDefault();
}
else{
alert("Message sent successfully ☕");
}

});
