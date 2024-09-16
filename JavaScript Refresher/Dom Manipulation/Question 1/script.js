let products = [];

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && !isNaN(price) && !isNaN(rating)) {
        products.push({ name, price, rating });
        updateGraphs();
        updateProductList();
        clearInputs();
    } else {
        alert('Please fill in all fields with valid data.');
    }
}

function updateGraphs() {
    const priceBars = document.getElementById('priceBars');
    const ratingBars = document.getElementById('ratingBars');

    priceBars.innerHTML = '';
    ratingBars.innerHTML = '';

    products.forEach(product => {
        // Create price bar
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.width = `${Math.max(50, product.price * 10)}px`; // Minimum width of 50px
        priceBar.textContent = `${product.name} ($${product.price.toFixed(2)})`;
        priceBars.appendChild(priceBar);

        // Create rating bar
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar';
        ratingBar.style.width = `${Math.max(50, product.rating * 20)}px`; // Minimum width of 50px
        ratingBar.textContent = `${product.name} (${product.rating.toFixed(1)})`;
        ratingBars.appendChild(ratingBar);
    });
}

function updateProductList() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '<h2>Product List</h2>';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `<strong>${product.name}</strong><br>Price: $${product.price.toFixed(2)}<br>Rating: ${product.rating.toFixed(1)}`;
        productList.appendChild(productItem);
    });
}

function sortData(type) {
    if (type === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (type === 'rating') {
        products.sort((a, b) => a.rating - b.rating);
    }
    updateGraphs();
    updateProductList();
}

function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productRating').value = '';
}
