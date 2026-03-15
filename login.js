const loginForm= document.getElementById('loginForm');

loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        let loginSuccess = false;

        for (const user of data) {
            const isUsernameMatch = user.username.toLowerCase() === username.toLowerCase();
            const isPasswordMatch = user.password === password;
            if (isUsernameMatch && isPasswordMatch) {
                loginSuccess = true;
                break;
            }
        }

        if (loginSuccess) {
            statusBox.textContent = "Login Successful! Redirecting...";
            statusBox.style.backgroundColor = "#d4edda";
            statusBox.style.color = "#155724";
            statusBox.style.border = "1px solid #c3e6cb";
            loginForm.after(statusBox);

            setTimeout(() => {
                window.location.href = 'menu_view.html';
            }, 2000);

        } else {
            statusBox.textContent = "Invalid username or password. Please try again.";
            statusBox.style.backgroundColor = "#f8d7da";
            statusBox.style.color = "#721c24";
            statusBox.style.border = "1px solid #f5c6cb";
            loginForm.after(statusBox);
        }

    } catch (error) {
        console.error('Error fetching login data:', error);
    }
});
