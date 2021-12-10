const CAR_PRODUCTOs = "cartProductsId";

document.addEventListener("DOMContentLoaded" , () => {
    loadProducts();
});

function getProductsDb () {
    const url = "../JSON/dbProducts.json";

    return fetch(url)
    .then(response => {
        return response.json();
    }).then((result) => {
        return result;
    }).catch((err) => {
        console.log('ERROR CON FETCH FUNCTION');
    });
}
async function loadProducts() {
    const products = await getProductsDb();
    
    let html = '';
    products.forEach(product => {
        html += `
            <div class="col-3 product-container">
                <div class="card product">
                    <img 
                    src="${product.image}"
                    class="card-img-top"
                    alt="${product.name}"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.extraInfo}</p>
                        <p class="card-text">${product.price} $ / Unidad</p>
                        <button type="button" class="btn btn-primary btn-cart">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `
    });
    document.getElementsByClassName("products")[0].innerHTML = html;
}

function openCloseCart() {
    const containerCartProduct = document.getElementsByClassName("cart-products[0]");
    console.log(containerCartProduct);
    
}