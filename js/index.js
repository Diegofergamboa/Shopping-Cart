const CART_PRODUCTOS = "cartProductsId";

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
                        <button type="button" class="btn btn-primary btn-cart" onClick="addProductCart(${product.id})">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `
    });
    document.getElementsByClassName("products")[0].innerHTML = html;
}

function openCloseCart() {
    const containerCart = document.getElementsByClassName("cart-products")[0];
    
    containerCart.classList.forEach(item => {
        if (item ==="hidden") {
            containerCart.classList.remove("hidden");
            containerCart.classList.add("active");
            
            if(item ==="active") {
                containerCart.classList.remove("active");
                containerCart.classList.add("hidden");
            }
        }
    });

}

function addProductCart(idProduct) {
    console.log('Añadiendo el producto con le ID: '+ idProduct);
}
//     let arrayProductsId = []

//     let localStorageItems = localStorage.getItem(CART_PRODUCTOS);

//     if (localStorageItems === null) {
//         arrayProductsId.push(idProduct);
//         localStorage.setItem(CART_PRODUCTOS, arrayProductsId);
//     } else {
//         let productsId = localStorage.getItem(CART_PRODUCTOS);
//         if (productsId.length > 0) {
//             productsId += ',' + idProduct;
//         } else {
//             productsId = productsId;
//         }
//     localStorage.setItem(CART_PRODUCTOS, productsId);
//     }
// }

// async function loadProductCart() {
//     const products = await getProductsDb();
    
//     //* Convertimos el resultado del LocalStorage en un array.

//     const localStorageItems = localStorage.getItem(CART_PRODUCTOS);
//     const idProductsSplit = localStorageItems.split(',');

//     //* Eliminar los id`s duplicados.

//     const idProductsCart = Array.from(new (Set(idProductsSplit)));

//     let html = "";
//     idProductsCart.forEach(id => {
//         products.forEach(product => {

//             if (id == product.id) {
//                 const quantity = countDuplicatesId(id, idProductsSplit);
//                 const totalPrice = product.price * quantity ;
//                 html += `
//                 <div class="cart-product">
//                     <img src="${product.image}" alt="${product.name}"/>
//                     <div "class="cart-product-info">
//                         <span class="quantity">${quantity}</span>
//                         <p>${product.name}</p>
//                         <p>${totalPrice.toFixed(2)}</p>
//                         <p class="change-quantity">
//                             <button>-</button>
//                             <button>+</button>
//                         </p>
//                         <p class="cart-product-delete">
//                             <button>Eliminar</button>
//                         </p>
//                     </div>
//                 </div>
//                 `;
//             }
//         });
//     });

//     document.getElementsByClassName("cart-products")[0].innerHTML = html ;
// }

// function countDuplicatesId(id, arrayIds) {
//     let count = 0 ;
//     arrayIds.forEach(id => {
//         if (value == id) {
//             count++;
//         }
//     });
//     return count;
// } 