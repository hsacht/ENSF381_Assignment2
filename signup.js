document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("signupEmail").value.trim();

    const messageBox = document.getElementById("signupMessage");
    messageBox.innerHTML = "";
    messageBox.className = "message-box";

    // Credential constraint
    const usernamePattern = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=\+\[\]{}|;:'",.<>?/`~])[^\s]{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|io)$/i;

    // Field constraint
    if (!username || !password || !confirmPassword || !email) {
        showMessage(
            "All fields are required.",
            "error"
        );
        return;
    }

    // Username validation
    if (!usernamePattern.test(username)) {
        showMessage(
            "Username must be 3 to 20 characters long, begin with a letter," + 
            "<br>and may only contain alphanumeric characters, '-', and '_'.",
            "error"
        );
        return;
    }

    // Password validation
    if (!passwordPattern.test(password)) {
        showMessage(
            "Password must be at least 8 characters, include an uppercase, a" +
             "<br>lowercase, a number, and a special character, with no spaces.",
             "error"
        );
        return;
    }

    // Password confirmation
    if (confirmPassword !== password) {
        showMessage("Passwords must match.", "error");
        return;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        showMessage(
            "Invalid email (must contain @ and end with" +
            "<br>.com, .net, or .io, with no spaces)", 
            "error"
        );
        return;
    }

    showMessage("Signup successful! Redirecting to login...", "success");

    setTimeout(function() {
        window.location.href = "login.html";
    }, 2000);

    function showMessage(message, type) {
        messageBox.innerHTML = message;
        messageBox.classList.add(type);
    }
});