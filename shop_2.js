let cartItems = [];

function addToCart(itemName) {
    const selectedItem = document.getElementById(itemName.replace(/\s+/g, '-').toLowerCase() + '-customization');
    const customization = selectedItem ? selectedItem.value : '';
    cartItems.push({ item: itemName, customization: customization });
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.item} - ${item.customization} <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsElement.appendChild(itemElement);
    });

    document.getElementById('total-items').textContent = cartItems.length;
}
