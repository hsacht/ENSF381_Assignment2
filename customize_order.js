const timerDisplay = document.getElementById("order-timer");
const totalPriceDisplay = document.getElementById("total-price");
const orderForm = document.getElementById("order-form");

let timeRemaining = 600;

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    timerDisplay.textContent = `Order Time remaining: ${formattedMinutes}:${formattedSeconds}`;

    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        window.location.href = "order_summary.html";
        return;
    }

    timeRemaining--;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer;

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedServing = document.querySelector('input[name="serving"]:checked');
    const selectedToppings = document.querySelectorAll('input[name="topping"]:checked');

    if (!selectedServing) {
        alert("Please select a serving.");
        return;
    }

    if (selectedToppings.length === 0) {
        alert("Please select at least one topping.")
        return;
    }

    const totalPrice = 6 + (selectedToppings.length * 1.50);

    totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    window.location.href = "order_summary.html";
})