// function sendEmail() {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "codewithsaadi@gmail.com",
// 	Password : "saad0955975",
// 	To : 'maliksaad634634@gmail.com',
// 	From : document.getElementById("email").value,
// 	Subject : "New Contact form enquiry",
// 	Body : "Full Name: " getElementById("name").value
// 	        + "<br> Email: " + getElementById("email").value 
// 	        + "<br> Message: " + getElementById("message").value ,
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }


// console.log('ssssssssssssss')

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

// Function  

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
})

// FOR LINK

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))