let cart = [];

const products = [
    {
        id: 1,
        name: "Joyroom Car Charger USB + Type-C",
        price: 150,
        image: "1.jpg",
        category: "charger"
    },
    {
        id: 2,
        name: "Joyroom Mini Car Charger",
        price: 180,
        image: "2.jpg",
        category: "charger"
    },
    {
        id: 3,
        name: "Oraimo Car Charger",
        price: 220,
        image: "3.jpg",
        category: "charger"
    },
    {
        id: 4,
        name: "Joyroom Car Phone Holder",
        price: 300,
        image: "4.jpg",
        category: "holder"
    },
    {
        id: 5,
        name: "Metal Desktop Phone Stand",
        price: 120,
        image: "5.jpg",
        category: "holder"
    },
    {
        id: 6,
        name: "Flexible Mobile Holder",
        price: 170,
        image: "6.jpg",
        category: "holder"
    },
    {
        id: 7,
        name: "Joyroom Fast Car Charger",
        price: 200,
        image: "7.jpg",
        category: "charger"
    },
    {
        id: 8,
        name: "Power Bank",
        price: 450,
        image: "8.jpg",
        category: "powerbank"
    },
    {
        id: 9,
        name: "Power Bank 10000mAh",
        price: 500,
        image: "9.jpg",
        category: "powerbank"
    },
    {
        id: 10,
        name: "HIKSEMI Flash Drive",
        price: 150,
        image: "10.jpg",
        category: "flash"
    },
    {
        id: 11,
        name: "Kingston Flash 64GB",
        price: 250,
        image: "11.jpg",
        category: "flash"
    },
    {
        id: 12,
        name: "HIKSEMI Flash 8GB",
        price: 130,
        image: "12.jpg",
        category: "flash"
    },
    {
        id: 13,
        name: "HIKSEMI Flash 16GB",
        price: 170,
        image: "13.jpg",
        category: "flash"
    },
    {
        id: 14,
        name: "Power Bank 10000mAh",
        price: 450,
        image: "14.jpg",
        category: "powerbank"
    },
    {
        id: 15,
        name: "Choetech 22.5W Power Bank",
        price: 650,
        image: "15.jpg",
        category: "powerbank"
    },
    {
        id: 16,
        name: "Power Bank 10000mAh Digital",
        price: 550,
        image: "16.jpg",
        category: "powerbank"
    },
    {
        id: 17,
        name: "WIWU Power Bank",
        price: 500,
        image: "17.jpg",
        category: "powerbank"
    },
    {
        id: 18,
        name: "45W Fast Charger",
        price: 300,
        image: "18.jpg",
        category: "charger"
    },
    {
        id: 19,
        name: "Oraimo 20W Charger",
        price: 320,
        image: "19.jpg",
        category: "charger"
    },
    {
        id: 20,
        name: "45W PD Adapter",
        price: 420,
        image: "20.jpg",
        category: "charger"
    },
    {
        id: 21,
        name: "25W Type-C Charger",
        price: 230,
        image: "21.jpg",
        category: "charger"
    },
    {
        id: 22,
        name: "4 in 1 Spring Cable",
        price: 170,
        image: "22.jpg",
        category: "cable"
    },
    {
        id: 23,
        name: "Joyroom 4 in 1 Cable",
        price: 250,
        image: "23.jpg",
        category: "cable"
    },
    {
        id: 24,
        name: "Joyroom Micro USB Cable",
        price: 130,
        image: "24.jpg",
        category: "cable"
    },
    {
        id: 25,
        name: "PD 27W Max Fast Charging Cable",
        price: 180,
        image: "25.jpg",
        category: "cable"
    }
];

function displayProducts(list = products) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `
        <div class="product-card">

            <img src="photos/${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.price} EGP</p>

            <div class="product-buttons">

                <button class="add-btn"
                onclick="addToCart(${product.id})">
                Add To Cart
                </button>

                <button class="order-btn"
                onclick="orderNow(${product.id})">
                Order Now
                </button>

            </div>

        </div>
        `;
    });
}

function filterProducts(category) {

    if (category === "all") {
        displayProducts(products);
        return;
    }

    const filtered = products.filter(
        p => p.category === category
    );

    displayProducts(filtered);
}

function addToCart(id) {

    const item = cart.find(
        p => p.id === id
    );

    if (item) {
        item.quantity++;
    } else {

        const product = products.find(
            p => p.id === id
        );

        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
}

function increaseQuantity(id) {

    const item = cart.find(
        p => p.id === id
    );

    if (item) {
        item.quantity++;
    }

    updateCart();
}

function decreaseQuantity(id) {

    const item = cart.find(
        p => p.id === id
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(
            p => p.id !== id
        );
    }

    updateCart();
}

function updateCart() {

    const cartItems =
    document.getElementById("cart-items");

    const cartCount =
    document.getElementById("cart-count");

    const cartTotal =
    document.getElementById("cart-total");

    let total = 0;
    let count = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
        <div class="cart-item">

            <strong>${item.name}</strong>

            <p>${item.price} EGP</p>

            <div class="qty-controls">

                <button onclick="decreaseQuantity(${item.id})">
                -
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${item.id})">
                +
                </button>

            </div>

        </div>
        `;
    });

    cartCount.innerText = count;
    cartTotal.innerText = total;
}

function openCart() {

    document.getElementById("cartSidebar")
    .classList.add("active");

    document.getElementById("overlay")
    .classList.add("active");
}

function closeCart() {

    document.getElementById("cartSidebar")
    .classList.remove("active");

    document.getElementById("overlay")
    .classList.remove("active");
}

function showOrderForm() {

    document.getElementById("orderModal")
    .style.display = "block";
}

function orderNow(id) {

    cart = [];

    const product = products.find(
        p => p.id === id
    );

    cart.push({
        ...product,
        quantity: 1
    });

    updateCart();

    showOrderForm();
}

function sendOrder() {

    const name =
    document.getElementById("customerName").value;

    const phone =
    document.getElementById("customerPhone").value;

    const address =
    document.getElementById("customerAddress").value;

    if(!name || !phone || !address){

        alert("Please fill all fields");
        return;

    }

    alert(
        "✅ Order confirmed successfully!\n\n📦 Shipping in 3 days."
    );

}
window.onload = function () {

    displayProducts(products);

    updateCart();

};