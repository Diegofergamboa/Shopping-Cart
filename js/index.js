const CAR_PRODUCTOs = "cartProductsId";

document.addEventListener("DOMContentLoaded" , () => {
    loadProducts();
});

function getProductsDb () {
    const url = "../JSON/dbProducts.json";
    fetch(url).then(response => {
        return response.json();
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        
    });
}
function loadProducts() {
    console.log("Función loadProducts ejecutada correctamente");
    getProductsDb();
}