const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#product");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log(data);
  productcontainer.innerHTML = `
            <article class="product-card">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" class="product-image">
            <h1 class="product-title"></h1>
            <div id="productContainer">
                <section class="product-info">
                    <p class="product-brand">Brand: ${data.brandname}</p>
                    <p class="product-price">Price: ${data.price} DKK</p>
                    <p class="product-old-price">Old price: 299 DKK</p>
                    <p class="product-status">Lagerstatus: ${data.stock ? "Out of stock" : "In stock"}</p>
                </section>
            </div>

            <button type="button" class="add-to-basket">
                Add to basket
            </button>
        </article>
  `;
}

getData();
