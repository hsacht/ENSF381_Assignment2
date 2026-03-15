const signupForm = document.getElementById('signupForm');

const statusBox = document.createElement('div');
statusBox.style.padding = "10px";
statusBox.style.marginTop = "10px";
statusBox.style.borderRadius = "5px";   
statusBox.style.textAlign = "center";
statusBox.style.display = "block";
statusBox.style.width = "100%";
statusBox.style.boxSizing = "border-box";

    
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    statusBox.remove();
    const errors = [];

    // Null validation
    if (!username || !email || !password || !confirmPassword) {
        errors.push("All fields are required.");
    }
    // Username validation
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
    if (!usernamePattern.test(username)) {
        errors.push("Username must start with a letter and can contain letters, numbers, underscores, or hyphens. Length must be between 3 and 20 characters.");
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-\_=+\[\]{}|;:'",.<>?\/`~])[^\s]{8,}$/;
    if (!passwordPattern.test(password)) {
        errors.push("Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)");
    }
    // Password confirmation
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|io)$/;
    if (!emailPattern.test(email)) {
        errors.push("Invalid email (must contain @ and end with .com, .net, or .io)");
    }

    // Display errors
    if (errors.length > 0) {
        statusBox.innerHTML = errors.join("<br>");
        statusBox.style.backgroundColor = "#F8D7DA";
        statusBox.style.color = "#721C24";
        signupForm.after(statusBox);
        return;
    }

    // No issues    
    statusBox.textContent = "Signup successful! Redirecting to login page...";
    statusBox.style.backgroundColor = "#D4EDDA";
    statusBox.style.color = "#155724";
    signupForm.after(statusBox);

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});
