const togglePassword3 = document.querySelector("#togglePassword3");
const password3 = document.querySelector("#new_password");

togglePassword3.addEventListener("click", function () {
    // toggle the type attribute
    const type = password3.getAttribute("type") === "password" ? "text" : "password";
    password3.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("fa-eye");
});
  
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#confirm_password");

togglePassword2.addEventListener("click", function () {
    // toggle the type attribute
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("fa-eye");
});

const togglePassword4 = document.querySelector("#togglePassword4");
const password4 = document.querySelector("#old_password");

togglePassword4.addEventListener("click", function () {
    // toggle the type attribute
    const type = password4.getAttribute("type") === "password" ? "text" : "password";
    password4.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("fa-eye");
});