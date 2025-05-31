/* Definere mængde i kurven */
const cartText = document.querySelector('.cart-text');

/* Definere sektionen med kurv og dens mængde */
/* const cart = document.querySelector('#cart'); */

/* Definere alle knapper med class 'btn-text' */
let btns = document.querySelectorAll('.btn-text');



let cart = {
    items: 0,
}

document.addEventListener('DOMContentLoaded', () => {
    /* Tjekker om kurven har nogen værdi i localstorage
     - hvis ja videresendes den - hvis nej angives 0 */
    let savedItems = localStorage.getItem('cartItems');
    cart.items = savedItems ? parseInt(savedItems) : 0;
    cartText.innerText = cart.items;
})

document.addEventListener('click', function(x){
    if (x.target.classList.contains('product') || x.target.classList.contains('product-image')){
        console.log('clicked');
        cart.items += 1;
        /* Kurvens værdi gemmes i localstorage med navnet 'cartItems' */
        localStorage.setItem('cartItems', cart.items);
        cartText.innerText = cart.items;
    }
})


btns.forEach(function(btn){
    /* Tjekker om brugeren klikker på knapper i banner og skifter html derefter */
    btn.addEventListener('click',function(){
        if (btn.innerText === 'Sortiment'){
            window.location.href = 'main.html';
        }
        if (btn.innerText === 'Forside'){
            window.location.href = 'FrontPage.html';
        }
        if (btn.innerText === 'Erhverv'){
            window.location.href = 'business.html';
        }
    })
})



function listProducts(){

    let productContainer = document.querySelector('.product-container');
    /* Tjekker om produkterne allerede vises på siden */
    if (productContainer.innerHTML === ''){
        /* Loop igennem "products" for at hente alle billederne */
        for (let i = 0; i < products.length; i++) {

            /* For hvert billede laves der 3 forskellige elementer (div, img x 2)*/
            const createProduct = document.createElement('div');
            const productInfoIcon = document.createElement('img');
            let productImage = document.createElement('img');

            if (products[i]) {
                /* Produktet får class "product", billede til produkt får class "product-image"
                   - der efterfølgende henter source fra products[i] */

                createProduct.className = 'product';
                productImage.className = 'product-image';
                productImage.src = products[i];

                /* Produkt ikonet defineres og bliver tildelt class "product-info-icon"
                   alle disse elementer bliver herefter lagt ind i produktet og videresendt
                   til "productContainer" på hjemmesiden (vist på hjemmesiden) */
                productInfoIcon.src = 'Files/Pictures/Icons/info-icon.png';
                productInfoIcon.className = 'product-info-icon';

                createProduct.appendChild(productImage);
                createProduct.appendChild(productInfoIcon);
                productContainer.appendChild(createProduct);
            }
        }
    }
}





/* Billeder til alle produkterne på hjemmesiden */
let products = [
    'Files/Pictures/Products/ananas-1000ml.png',
    'Files/Pictures/Products/appelsin-200ml.png',
    'Files/Pictures/Products/appelsin-250ml.png',
    'Files/Pictures/Products/appelsin-500ml.png',
    'Files/Pictures/Products/appelsin-1000ml.png',
    'Files/Pictures/Products/hyldeblomst-200ml.png',
    'Files/Pictures/Products/hyldeblomst-500ml.png',
    'Files/Pictures/Products/multi-1000ml.png',
    'Files/Pictures/Products/Rabarber-200ml.png',
    'Files/Pictures/Products/Rabarber-500ml.png',
    'Files/Pictures/Products/shot-lemon.png',
    'Files/Pictures/Products/shot-rhubarb.png',
    'Files/Pictures/Products/vand-500ml.png',
    'Files/Pictures/Products/æble-250ml.png',
    'Files/Pictures/Products/æble-500ml.png',
    'Files/Pictures/Products/æble-1000ml.png',
]




