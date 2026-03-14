document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value;
    const messageBox = document.getElementById("loginMessage");

    messageBox.textContent = "";
    messageBox.className = "message-box";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch user data.");
        }

        const users = await response.json();

        const matchedUser = users.find(user =>
            user.username.toLowerCase() === enteredUsername.toLowerCase()
        );

        if (!matchedUser) {
            showMessage("User not found! Create an account?", "error");
            return;
        }

        if (enteredPassword === matchedUser.email) {
            showMessage("Login successful! Redirecting...", "success");

            setTimeout(() => {
                window.location.href = "menu_view.html"
            }, 2000);
        } else {
            showMessage("Password incorrect! Forgot Password?", "error");
        }
    } catch (error) {
        showMessage("Error: Login unavailable at this time.", "error");
        console.error(error);
    }

    function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.classList.add(type);
    }
});