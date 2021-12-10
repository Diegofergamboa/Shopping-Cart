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
    console.log("Función loadProducts ejecutada correctamente");
    const products = await getProductsDb();
    console.log(products);
}