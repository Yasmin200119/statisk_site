const listURL = "https://kea-alt-del.dk/t7/api/products?season=Summer";
const listContainer = document.querySelector(".product-list");

function getProducts() {
  fetch(listURL).then((res) =>
    res.json().then((products) => showProducts(products)),
  );
}

function showProducts(products) {
  //start med en tom container//
  listContainer.innerHTML = "";

  // products er et array af objekter, så vi skal bruge forEach til at loope igennem det//
  products.forEach((product) => {
    listContainer.innerHTML += `

  <article class="product">
            <a href="product.html">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" class="Billede">
                <h2>${product.productdisplayname}</h2>
            </a>
            <p>Brand: ${product.brand}</p>
            <p>Price: ${product.price} DKK</p>
        </article>`;
  });
}

getProducts();
