const loginForm= document.getElementById('loginForm');
const statusBox = document.createElement('div');
statusBox.style.padding = "10px";
statusBox.style.marginTop = "10px";
statusBox.style.borderRadius = "5px";   
statusBox.style.textAlign = "center";

loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        //console.log(data);

        let loginSuccess = false;

        for (const user of data) {
            const isUsernameMatch = user.username.toLowerCase() === username.toLowerCase();
            const isPasswordMatch = user.email === password;
            if (isUsernameMatch && isPasswordMatch) {
                loginSuccess = true;
                break;
            }   
        }
        
        statusBox.remove();

        if (loginSuccess) {
            statusBox.textContent = "Login Successful! Redirecting...";
            statusBox.style.backgroundColor = "#D4EDDA";
            statusBox.style.color = "#155724";
            loginForm.after(statusBox);

            setTimeout(() => {
                window.location.href = 'menu_view.html';
            }, 2000);

        } else {
            statusBox.textContent = "Invalid username or password. Please try again.";
            statusBox.style.backgroundColor = "#F8D7DA";
            statusBox.style.color = "#721C24";
            loginForm.after(statusBox);
        }

    } catch (error) {
        console.error('Error fetching login data:', error);
    }
});
