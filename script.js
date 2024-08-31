document.addEventListener("DOMContentLoaded", getAllFunc)
let data = []; // Инициализация массива для хранения данных о товарах
const itemsPerPage = 5; // Количество товаров, отображаемых на одной странице
let currentPage = 1; // Переменная для отслеживания текущей страницы

function getAllFunc() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      data = products
      renderPage(currentPage);
      renderPagination();
    })
    .catch(error => console.error('Произошла ошибка при получении товаров:', error));
};

// Функция для рендеринга товаров на указанной странице
function renderPage(page) {
  const productList = document.getElementById("productList"); // Получение элемента для отображения списка товаров
  // const productList = document.getElementById("productList"); // Получение элемента для отображения списка товаров
  productList.innerHTML = ""; // Очистка содержимого элемента перед рендерингом новых товаров

  const startIndex = (page - 1) * itemsPerPage; // Начальный индекс
  const endIndex = Math.min(startIndex + itemsPerPage, data.length); // Конечный индекс (не превышая длину данных)


  // Получение массива товаров для текущей страницы
  const productsToDisplay = data.slice(startIndex, endIndex);

  productsToDisplay.forEach((product) => {
    const listItem = document.createElement("div"); // Создание нового элемента div для товара
    listItem.textContent = product.title; // Установка текста элемента равным названию товара
    productList.appendChild(listItem); // Добавление элемента в список товаров

    const imageItem = document.createElement('img')
    imageItem.src = product.image;
    listItem.appendChild(imageItem)

    const deleteItem = document.createElement('button')
    deleteItem.innerHTML = "&#x2715;"
    deleteItem.className = "btn"
    listItem.appendChild(deleteItem)


    const deleteBtns = document.querySelectorAll(".btn");

    deleteBtns.forEach(btn => {
      btn.addEventListener('click', deleteFunction);
    });


    const titleItem = document.createElement('h2')
    titleItem.innerHTML = product.title
    listItem.appendChild(titleItem)

    const descItem = document.createElement('p')
    descItem.innerHTML = product.description
    listItem.appendChild(descItem)

    const priceItem = document.createElement('h3')
    priceItem.innerHTML = `${product.price} $`
    listItem.appendChild(priceItem)


  })
}

function renderPagination() {
  const paginationContainer = document.getElementById("pagination"); // Получение элемента для отображения кнопок пагинации
  paginationContainer.innerHTML = ""; // Очистка содержимого контейнера перед рендерингом новых кнопок

  const totalPages = Math.ceil(data.length / itemsPerPage); // Вычисление общего количества страниц


  // Создание кнопок для каждой страницы
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button"); // Создание новой кнопки
    pageButton.className = "styleBtnClass"
    pageButton.textContent = i; // Установка текста кнопки равным номеру страницы
    pageButton.onclick = () => { // Обработка события клика на кнопку
      currentPage = i; // Установка текущей страницы на номер кнопки
      renderPage(currentPage); // Вызов функции для рендеринга товаров на новой текущей странице
    };
    paginationContainer.appendChild(pageButton); // Добавление кнопки в контейнер пагинации
  }
}

const sortElectronics = document.querySelector("#sortElectronics")
sortElectronics.className = "sort"
const sortMensclothing = document.querySelector("#sortMensclothing")
sortElectronics.className = "sort"
const sortWomensclothing = document.querySelector("#sortWomensclothing")
sortElectronics.className = "sort"
const sortJewelery = document.querySelector("#sortJewelery")
sortElectronics.className = "sort"
const sortAll = document.querySelector("#sortAll")

sortElectronics.addEventListener("click", sortElectrFunk)
sortMensclothing.addEventListener("click", sortMensFunk)
sortWomensclothing.addEventListener("click", sortWomensFunk)
sortJewelery.addEventListener("click", sortJeweleryFunk)

function sortElectrFunk() {
  fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(products => {
      productList.textContent=""
      products.forEach((product) => {
        const listItem = document.createElement("div"); // Создание нового элемента div для товара
        listItem.textContent = product.title; // Установка текста элемента равным названию товара
        productList.appendChild(listItem); // Добавление элемента в список товаров
    
        const imageItem = document.createElement('img')
        imageItem.src = product.image;
        listItem.appendChild(imageItem)
    
        const deleteItem = document.createElement('button')
        deleteItem.innerHTML = "&#x2715;"
        deleteItem.className = "btn"
        listItem.appendChild(deleteItem)
    
    
        const deleteBtns = document.querySelectorAll(".btn");
    
        deleteBtns.forEach(btn => {
          btn.addEventListener('click', deleteFunction);
        });
    
    
        const titleItem = document.createElement('h2')
        titleItem.innerHTML = product.title
        listItem.appendChild(titleItem)
    
        const descItem = document.createElement('p')
        descItem.innerHTML = product.description
        listItem.appendChild(descItem)
    
        const priceItem = document.createElement('h3')
        priceItem.innerHTML = `${product.price} $`
        listItem.appendChild(priceItem)
    
    
      })
    })
}


function sortJeweleryFunk() {
  fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(response => response.json())
    .then(products => {
      productList.textContent=""
      products.forEach((product) => {
        const listItem = document.createElement("div"); // Создание нового элемента div для товара
        listItem.textContent = product.title; // Установка текста элемента равным названию товара
        productList.appendChild(listItem); // Добавление элемента в список товаров
    
        const imageItem = document.createElement('img')
        imageItem.src = product.image;
        listItem.appendChild(imageItem)
    
        const deleteItem = document.createElement('button')
        deleteItem.innerHTML = "&#x2715;"
        deleteItem.className = "btn"
        listItem.appendChild(deleteItem)
    
    
        const deleteBtns = document.querySelectorAll(".btn");
    
        deleteBtns.forEach(btn => {
          btn.addEventListener('click', deleteFunction);
        });
    
    
        const titleItem = document.createElement('h2')
        titleItem.innerHTML = product.title
        listItem.appendChild(titleItem)
    
        const descItem = document.createElement('p')
        descItem.innerHTML = product.description
        listItem.appendChild(descItem)
    
        const priceItem = document.createElement('h3')
        priceItem.innerHTML = `${product.price} $`
        listItem.appendChild(priceItem)
    
    
      })
    })
}

function sortMensFunk() {
  fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then(response => response.json())
    .then(products => {
      productList.textContent=""
      products.forEach((product) => {
        const listItem = document.createElement("div"); // Создание нового элемента div для товара
        listItem.textContent = product.title; // Установка текста элемента равным названию товара
        productList.appendChild(listItem); // Добавление элемента в список товаров
    
        const imageItem = document.createElement('img')
        imageItem.src = product.image;
        listItem.appendChild(imageItem)
    
        const deleteItem = document.createElement('button')
        deleteItem.innerHTML = "&#x2715;"
        deleteItem.className = "btn"
        listItem.appendChild(deleteItem)
    
    
        const deleteBtns = document.querySelectorAll(".btn");
    
        deleteBtns.forEach(btn => {
          btn.addEventListener('click', deleteFunction);
        });
    
    
        const titleItem = document.createElement('h2')
        titleItem.innerHTML = product.title
        listItem.appendChild(titleItem)
    
        const descItem = document.createElement('p')
        descItem.innerHTML = product.description
        listItem.appendChild(descItem)
    
        const priceItem = document.createElement('h3')
        priceItem.innerHTML = `${product.price} $`
        listItem.appendChild(priceItem)
    
    
      })
    })
}

function sortWomensFunk() {
  fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(response => response.json())
    .then(products => {
      productList.textContent=""
      products.forEach((product) => {
        const listItem = document.createElement("div"); // Создание нового элемента div для товара
        listItem.textContent = product.title; // Установка текста элемента равным названию товара
        productList.appendChild(listItem); // Добавление элемента в список товаров
    
        const imageItem = document.createElement('img')
        imageItem.src = product.image;
        listItem.appendChild(imageItem)
    
        const deleteItem = document.createElement('button')
        deleteItem.innerHTML = "&#x2715;"
        deleteItem.className = "btn"
        listItem.appendChild(deleteItem)
    
    
        const deleteBtns = document.querySelectorAll(".btn");
    
        deleteBtns.forEach(btn => {
          btn.addEventListener('click', deleteFunction);
        });
    
    
        const titleItem = document.createElement('h2')
        titleItem.innerHTML = product.title
        listItem.appendChild(titleItem)
    
        const descItem = document.createElement('p')
        descItem.innerHTML = product.description
        listItem.appendChild(descItem)
    
        const priceItem = document.createElement('h3')
        priceItem.innerHTML = `${product.price} $`
        listItem.appendChild(priceItem)
    
    
      })
    })
  }
sortAll.addEventListener("click", getAllFunc)

function deleteFunction() {
  fetch('https://fakestoreapi.com/products/6', {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(json => console.log(json))
}

const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', addBtnFunc)

function addBtnFunc() {
  fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify(
      {
        title: document.querySelector('#title').value,
        price: parseFloat(document.querySelector('#price').value),
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value
      }
    )
  })
    .then(res => res.json())
    .then(json => console.log(json))
}

getAllFunc();


const ok = document.querySelector("#ok")
ok.addEventListener('click', oki)
function oki() {
  alert("Супер!Можем приступать.")
}
