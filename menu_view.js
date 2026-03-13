const cart = {};

const addButtons = document.querySelectorAll(".add-cart");
const removeButtons = document.querySelectorAll(".remove-cart");
const cartContainer = document.querySelector(".cart-items");

addButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

removeButtons.forEach(button => {
    button.addEventListener("click", removeFromCart);
});

function addToCart(event) {
    const button = event.target;
    const name = button.dataset.name;
    const price = button.dataset.price;

    if (!name || isNaN(price)) {
        return;
    }

    if (!cart[name]) {
        cart[name] = { price: price, qty: 1};
    } else {
        cart[name].qty++;
    }

    renderCart();
}

function removeFromCart(event) {
    const button = event.target;
    const name = button.dataset.name;

    if (!name || !cart[name]) {
        return;
    }

    cart[name].qty--;

    if (cart[name].qty <= 0) {
        delete cart[name];
    }

    renderCart();
}

function renderCart() {
    cartContainer.innerHTML = "";

    const itemNames = Object.keys(cart).filter(name => cart[name].qty > 0);

    if (itemNames.length === 0) {
        cartContainer.innerHTML = '<p class="left-align" id="empty-cart">No items in cart.</p>';
        return;
    }

    itemNames.forEach(name => {
        const item = cart[name];
        const lineTotal = (item.qty * item.price).toFixed(2);

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-row");

        cartItem.innerHTML = `
            <strong><p class="left-align">${name} (${item.qty})</p></strong>
            <p class="right-align">$${lineTotal}</p>
        `;

        cartContainer.appendChild(cartItem);
    });
}