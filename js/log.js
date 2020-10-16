
(()=>{
    let signup__active = document.getElementsByClassName('signup__active')[0];
    signup__active.addEventListener('click', function () {
        const signup = document.getElementsByClassName('signup')[0];
        const login = document.getElementsByClassName('login')[0];
        let login__active = document.getElementsByClassName('login__active')[0];
        signup.style.display = "block";
        signup__active.style.borderColor = "#2c3e50";
        login.style.display = "none";
        login__active.style.borderColor = "#949494";
    })
 })();

 (()=>{
    let login__active = document.getElementsByClassName('login__active')[0];
    login__active.addEventListener('click', function () {
        const signup = document.getElementsByClassName('signup')[0];
        const login = document.getElementsByClassName('login')[0];
        let signup__active = document.getElementsByClassName('signup__active')[0];
        login.style.display = "block";
        login__active.style.borderColor = "#2c3e50";
        signup.style.display = "none";
        signup__active.style.borderColor = "#949494";
    })
 })();

(()=>{
    let input = document.querySelectorAll('form input');
    for(let i = 0; i < input.length;i++) {
         input[i].addEventListener('focus', function () {
             let span = this.nextElementSibling;
             span.style.transform = 'translateY(-10px)'; 
             span.style.fontSize = '12px';
         });
         input[i].addEventListener('focusout', function () {
             if(this.value == "") {
                 let span = this.nextElementSibling;
                 span.style.transform = 'translateY(0px)'; 
                 span.style.fontSize = '16px';
             
             }
         });
    }
    
 })();
 

(()=>{
    let login__showpass = document.getElementsByClassName('login__showpass')[0];
    login__showpass.addEventListener('click', function (event) {
        event.preventDefault();
        let icon = login__showpass.childNodes[0];
        let login__password = document.getElementById('login__password');
        if(icon.className == "far fa-eye") {
            icon.className = "far fa-eye-slash";
            login__password.setAttribute("type", "text");
        }
        else {
            icon.className = "far fa-eye";
            login__password.setAttribute("type", "password");
        }
        
    })
 })();

 
 (()=>{
    let signup__showpass = document.getElementsByClassName('signup__showpass')[0];
    signup__showpass.addEventListener('click', function (event) {
        event.preventDefault();
        let icon = signup__showpass.childNodes[0];
        let signup__password = document.getElementById('signup__password');
        if(icon.className == "far fa-eye") {
            icon.className = "far fa-eye-slash";
            signup__password.setAttribute("type", "text");
        }
        else {
            icon.className = "far fa-eye";
            signup__password.setAttribute("type", "password");
        }
        
    })
 })();