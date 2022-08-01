const signupbutton = document.querySelector("#signupbutton");

signupbutton.addEventListener('click', () => {

    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const dob = document.querySelector("#dob");
    const password = document.querySelector("#password");
    const confirmpassword = document.querySelector("#confirmpassword");

    let passwordValue = document.querySelector("#password").value;
    let confirmpasswordValue = document.querySelector("#confirmpassword").value;

    if (username.checkValidity() && email.checkValidity() && dob.checkValidity() && password.checkValidity()) {
        
        if (passwordValue === confirmpasswordValue) { // passes password check

            let usernameValue = document.querySelector("#username").value;
            let emailValue = document.querySelector("#email").value;
            let dobValue = document.querySelector("#dob").value;
            let passwordValue = document.querySelector("#password").value;
            let confirmpasswordValue = document.querySelector("#confirmpassword").value;
            let newsletterValue = document.querySelector("#newsletter").checked;

            let userinfo = {
                username,
                email,
                dob,
                password,
                newsletter,
            }

            alert(`Sign up successful! (This is not a real website, your information is only stored in memory.) ${JSON.stringify(userinfo)}`)
            location.reload();

        } else { // doesn't pass password check

            confirmpassword.classList.add('error');

        }
    }
});