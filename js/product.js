const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
        <h1 class="product-title">${data.productdisplayname}</h1>

            <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${data.productdisplayname}" class="product-image">

            <section class="product-info">
                <p class="product-brand">Brand: ${data.brandname}</p>
                <p class="product-price">Price: ${data.price} DKK</p>
                <p class="product-old-price">Old price: ${data.oldprice} DKK</p>
                <p class="product-status">Lagerstatus: ${data.stock ? "In Stock" : "Out of Stock"}</p>
            </section>

            <button type="button" class="add-to-basket">
                Add to basket
            </button>
  `;
}

getData();
