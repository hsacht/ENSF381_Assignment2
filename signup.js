const signupForm = document.getElementById('signup-form');

const statusBox = document.createElement('div');
statusBox.style.padding = "10px";
statusBox.style.marginTop = "10px";
statusBox.style.borderRadius = "5px";   
statusBox.style.textAlign = "center";
    
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    statusBox.remove();

    // Null validation
    if (!username || !email || !password || !confirmPassword) {
        statusBox.textContent = "All fields are required.";
        statusBox.style.backgroundColor = "#F8D7DA";
        statusBox.style.color = "#721C24";
        signupForm.after(statusBox);
        return;
    }
    // Username validation
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
    if (!usernamePattern.test(username)) {
        statusBox.textContent = "Username must start with a letter and can contain letters, numbers, underscores, or hyphens. Length must be between 3 and 20 characters.";
        statusBox.style.backgroundColor = "#F8D7DA";
        statusBox.style.color = "#721C24";
        signupForm.after(statusBox);
        return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-\_=+\[\]{}|;:'",.<>?\/`~])[^\s]{8,}$/;
    if (!passwordPattern.test(password)) {
        statusBox.textContent = "Invalid password (Min 8 characters, uppercase, lowercase, number, special character, no spaces)";
        statusBox.style.backgroundColor = "#F8D7DA";
        statusBox.style.color = "#721C24";
        signupForm.after(statusBox);
        return;
    }
    // Password confirmation
    if (password !== confirmPassword) {
        statusBox.textContent = "Passwords do not match.";
        statusBox.style.backgroundColor = "#F8D7DA";
        statusBox.style.color = "#721C24";
        signupForm.after(statusBox);
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|io)$/;
    if (!emailPattern.test(email)) {
        statusBox.textContent = "Invalid email: (must contain @ and end with .com, .net, or .io)";
        statusBox.style.backgroundColor = "#F8D7DA";
        statusBox.style.color = "#721C24";
        signupForm.after(statusBox);
        event.preventDefault();
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
