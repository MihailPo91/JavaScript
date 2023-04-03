window.addEventListener('load', solve);

function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    const loadBtn = document.getElementById('load-product');
    loadBtn.addEventListener('click', loadAllProducts);

    const productInput = document.getElementById('product');
    const countInput = document.getElementById('count');
    const priceInput = document.getElementById('price');

    const resultTableContainer = document.querySelector('#table .tbl-content > table > tbody');

    let currentUpdatingProductId = '';

    const addBtn = document.getElementById('add-product');
    addBtn.addEventListener('click', AddProduct);

    updateBtnMain = document.getElementById('update-product');

    function loadAllProducts(event) {
        if (event) {
            event.preventDefault();
        }
        resultTableContainer.innerHTML = '';

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                data = Object.values(data);

                for (const { product, count, price, _id } of data) {
                    const tr = document.createElement('tr');
                    tr.id = _id;

                    const tdProduct = document.createElement('td');
                    tdProduct.classList.add('name');
                    tdProduct.textContent = product;

                    const tdCount = document.createElement('td');
                    tdCount.classList.add('count-product');
                    tdCount.textContent = count;

                    const tdPrice = document.createElement('td');
                    tdPrice.classList.add('product-price');
                    tdPrice.textContent = price;

                    const tdButtons = document.createElement('td');
                    tdButtons.classList.add('btn')

                    updateBtn = document.createElement('button');
                    updateBtn.classList.add('update');
                    updateBtn.textContent = 'Update';
                    updateBtn.addEventListener('click', loadUpdateInputDetails);

                    deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', deleteProduct);

                    tdButtons.appendChild(updateBtn);
                    tdButtons.appendChild(deleteBtn);

                    tr.appendChild(tdProduct);
                    tr.appendChild(tdCount);
                    tr.appendChild(tdPrice);
                    tr.appendChild(tdButtons);
                    resultTableContainer.appendChild(tr);
                }
            }).catch()


    }


    function AddProduct(event) {
        if (event) {
            event.preventDefault();
        }
        let product = productInput.value;
        let count = countInput.value;
        let price = priceInput.value;

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ product, count, price })
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadAllProducts();
                productInput.value = '';
                countInput.value = '';
                priceInput.value = '';
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function deleteProduct(event) {
        const id = event.currentTarget.parentNode.parentNode.id;
        let url = BASE_URL + id
        const httpHeaders = {
            method: 'DELETE'
        }
        fetch(url, httpHeaders)
            .then(() => {
                loadAllProducts();
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function loadUpdateInputDetails(event) {
        if (event) {
            event.preventDefault();
        }
        currentUpdatingProductId = event.currentTarget.parentNode.parentNode.id;
        productInput.value = Array.from(event.currentTarget.parentNode.parentNode.children)[0].textContent;
        countInput.value = Array.from(event.currentTarget.parentNode.parentNode.children)[1].textContent;
        priceInput.value = Array.from(event.currentTarget.parentNode.parentNode.children)[2].textContent;

        updateBtnMain.disabled = false;
        updateBtnMain.addEventListener('click', updateProduct);
        addBtn.disabled = true;
    }

    function updateProduct(event) {
        const id = currentUpdatingProductId;
        let product = productInput.value;
        let count = countInput.value;
        let price = priceInput.value;

        let url = BASE_URL + id;

        httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({
                product: product,
                count: count,
                price: price
            })
        }
        fetch(url, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadAllProducts();
                productInput.value = '';
                countInput.value = '';
                priceInput.value = '';
                updateBtnMain.disabled = true;
                addBtn.disabled = false;
            })
            .catch((err) => {
                console.error(err)
            })
    }
}
