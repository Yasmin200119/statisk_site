const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

const listURL = category
  ? `https://kea-alt-del.dk/t7/api/products?category=${category}`
  : "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product-list");
const sortByPriceBtn = document.querySelector(".sort-btn");
const filterUnisexBtn = document.querySelector(".filter-btn");

//=============================================SORT KNAP=======================================================//
function sortByPriceAsc() {
  const sortedProducts = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sortedProducts);
}

sortByPriceBtn.addEventListener("click", sortByPriceAsc);

let allProducts = [];

function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((products) => {
      allProducts = products;

      showProducts(allProducts);
    });
}

//=============================================FILTRER KNAP=======================================================//

function filterByGender(targetGender) {
  const filtered = allProducts.filter(
    (product) =>
      (product.gender || "").toLowerCase() === targetGender.toLowerCase(),
  );
  showProducts(filtered);
  console.log(filtered);
}
filterUnisexBtn.addEventListener("click", () => filterByGender("Unisex"));

//============================================= DYNAMISK PRODUKTSIDE=======================================================//

function showProducts(products) {
  //start med en tom container//
  listContainer.innerHTML = "";

  // products er et array af objekter, så vi skal bruge forEach til at loope igennem det//
  products.forEach((product) => {
    listContainer.innerHTML += `

  <article class="product">
            <a href="product.html?id=${product.id}">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" class="Billede">
                <h2>${product.productdisplayname}</h2>
            </a>
            <p>Brand:${product.brandname}</p>
            <p>Price: ${product.price} DKK</p>
        </article>`;
  });
}

getProducts();
