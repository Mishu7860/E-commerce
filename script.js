document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    const updateCart = () => {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            const ul = document.createElement('ul');
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name + ' - $' + item.price;
                ul.appendChild(li);
            });
            cartItems.appendChild(ul);
        }
    };

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const button = product.querySelector('button');
        button.addEventListener('click', () => {
            const id = product.getAttribute('data-id');
            const name = product.querySelector('h3').textContent;
            const price = product.querySelector('p').textContent.replace('$', '');
            cart.push({ id, name, price });
            updateCart();
        });
    });

    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
    });
});
