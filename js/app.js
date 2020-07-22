
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

//Language section typeit effect
new TypeIt("#hero", {
  speed: 80,
  loop:true,
  startDelay: 900
})
//English
  .type('When I am not coding,')
  .pause(500)
  .break()
  .break({delay: 500})
  .type('I like reading Novels.')
  .pause(500)
  .delete()

//German
  .type('Ich lerne gerade Deutsch.')
  .pause(500)
  .break()
  .break({delay: 500})
  .type('<em>I am currently learning German.</em>')
  .pause(500)
  .delete()

//Hindi
  .type('मुझे शतरंज खेलना बहुत पसंद है।')
  .pause(500)
  .break()
  .break({delay: 500})
  .type('<em>I love playing chess.</em>')
  .pause(500)
  .delete()

//Bengali
  .type('আমার জন্ম কলকাতায়। ')
  .pause(500)
  .break()
  .break({delay: 700})
  .type('<em>I was born in Kolkata.</em>')
  .pause(700)
  .delete()
  .go();
  new TypeIt("#input", {
    speed: 200,
    loop:true,
    startDelay: 900,
    strings:["a Coder","a Reader","a Gamer","Lokin"],
    breakLines: false,	
    startDelete: true,
    nextStringDelay: [3000,3000,3000,3000],
    loopDelay: 60000
  })
    .go();
  function closeSidebar() {
    sidebar.classList.remove("show-sidebar");
  }

  //Contact Form Validation
  function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "<p class=\"warning\">Please Enter valid Name</p>" ;
      error_message.innerHTML = text;
      return false;
    }
    
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "<p class=\"warning\">Please Enter valid Email</p>";
      error_message.innerHTML = text;
      return false;
    }

    if(message.length <= 10){
      text = "<p class=\"warning\">Please Enter Atleast 10 characters</p>";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

  