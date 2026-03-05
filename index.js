const fetchUrl = `https://kea-alt-del.dk/t7/api/categories`;
const listContainer = document.querySelector(".category-row");

console.log(listContainer);

function getCategories() {
  fetch(fetchUrl).then((res) =>
    res.json().then((categories) => showCategories(categories)),
  );
}

function showCategories(categories) {
  listContainer.innerHTML = "";

  categories.forEach((category) => {
    listContainer.innerHTML += `
    <li class="category-item">
    <a href="productlist.html?category=${encodeURIComponent(category.category)}"" class="category-link">${category.category}</a>
            </li>
            `;
  });
}

getCategories();
