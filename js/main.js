//------------------to open nav menu-------------------
let openn = document.getElementById("open");
let nav = document.querySelector("header nav .links");
let closee = document.getElementById("close");
openn.onclick = function () {
    nav.classList.toggle("show");
    closee.classList.toggle("showw");
};
closee.onclick = function () {
    this.classList.remove("showw");
    nav.classList.toggle("show");
};


//-----------------to open the cart-----------------
let cartOpen = document.getElementById("cart");
let productCartMenu = document.getElementById("productCartMenu");
cartOpen.onclick = function () {
    productCartMenu.classList.toggle("show")
}


//-----------------to change img from pagination and btns------------------
sliderImages = Array.from(document.querySelectorAll(".landing .photos .landimg"));
sliderCount = sliderImages.length;
currentSlide = 1;
nextBtn = document.getElementById("next");
prevBtn = document.getElementById("prev");
liBullets = document.querySelectorAll(".landing .pagination .filter");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

paginationBullets = Array.from(liBullets);

for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = this.getAttribute("data-index");
        theChecker();
    }
};

theChecker();

function nextSlide() {
    if (nextBtn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
};

function prevSlide() {
    if (prevBtn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
};

function theChecker() {
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add("active");
    paginationBullets[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prevBtn.classList.add("disabled");
    }else{
        prevBtn.classList.remove("disabled");
    }
    if (currentSlide == sliderCount) {
        nextBtn.classList.add("disabled");
    }else {
        nextBtn.classList.remove("disabled");
    }
};

function removeAllActive() {
    sliderImages.forEach( function (img) {
        img.classList.remove("active");
    });
    paginationBullets.forEach(function (li) {
        li.classList.remove("active");
    })
};


// ---------------------plus and minus btns----------------
let plus = document.querySelector(".landing .box .content .control .number .plus");
let minus = document.querySelector(".landing .box .content .control .number .minus");
let numberOfProducts = document.querySelector(".landing .box .content .control .number span");
currentNumberOfProducts = 0;

plus.onclick = function () {
    currentNumberOfProducts++;
    numberOfProducts.innerHTML = currentNumberOfProducts;
}

minus.onclick = function () {
    if (currentNumberOfProducts <= 0) {
        currentNumberOfProducts;
    }else{
        currentNumberOfProducts--;
        numberOfProducts.innerHTML = currentNumberOfProducts;
    }
}


//------------------------add to cart--------------------------
let addToCartBtn = document.querySelector(".landing .box .content .control .button a");
let cart = document.getElementById("cart");
let numOnCart = document.querySelector("header nav .info .cart");
let productImg = document.querySelector("header nav .info .cart .products-in-cart .cart-product .product-img img");
let productName = document.querySelector("header nav .info .cart .products-in-cart .cart-product .product-info .name");
let productMath = document.querySelector("header nav .info .cart .products-in-cart .cart-product .product-info .price .math");
let productNum = document.querySelector("header nav .info .cart .products-in-cart .cart-product .product-info .price .math span");
let deleteProduct = document.querySelector("header nav .info .cart .products-in-cart .cart-product .delete-product img");
let finalCost = document.querySelector("header nav .info .cart .products-in-cart .cart-product .product-info .price .final-cost");
let checkoutBtn = document.querySelector("header nav .info .cart .products-in-cart .checkout");
let emptyMessage = document.querySelector("header nav .info .cart .products-in-cart .empty");


addToCartBtn.onclick = function () {
    if (currentNumberOfProducts <= 0) {
        emptyMessage.style.display = "block";
        numOnCart.setAttribute('data-after', '')
        productImg.src = "";
        productName.innerHTML = "";
        productMath.innerHTML = "";
        finalCost.innerHTML = ""; 
        deleteProduct.src = "";
        checkoutBtn.classList.remove("apper");
    }else{
        emptyMessage.style.display = "none";
        cart.classList.toggle("visible");
        numOnCart.setAttribute('data-after', currentNumberOfProducts)
        productImg.src = "images/image-product-1-thumbnail.jpg";
        productName.innerHTML = "Fall Limited Edition Sneakers";
        productMath.innerHTML = "$125.00 x ";
        let span = document.createElement("span"); 
        span.appendChild(document.createTextNode(currentNumberOfProducts))
        productMath.appendChild(span);
        let mathCost = 125 * currentNumberOfProducts;
        finalCost.innerHTML = `$${mathCost}.00`;
        deleteProduct.src = "images/icon-delete.svg";
        checkoutBtn.classList.add("apper");
    }
}

deleteProduct.onclick = function () {
    emptyMessage.style.display = "block";
    cart.classList.toggle("visible");
    numOnCart.setAttribute('data-after', '')
    productImg.src = "";
    productName.innerHTML = "";
    productMath.innerHTML = "";
    finalCost.innerHTML = ""; 
    deleteProduct.src = "";
    checkoutBtn.classList.remove("apper");
}


//-----------------to change img from pagination and btns in popup------------------
sliderImagess = Array.from(document.querySelectorAll(".boxx .photos .landimg"));
sliderCountt = sliderImagess.length;
currentSlidee = 1;
nextBtnn = document.getElementById("nexxt");
prevBtnn = document.getElementById("prevv");
liBulletss = document.querySelectorAll(".boxx .pagination .filter");

nextBtnn.onclick = nextSlidee;
prevBtnn.onclick = prevSlidee;

paginationBulletss = Array.from(liBulletss);

for (let i = 0; i < paginationBulletss.length; i++) {
    paginationBulletss[i].onclick = function () {
        currentSlidee = this.getAttribute("data-index");
        theCheckerr();
    }
};

theCheckerr();

function nextSlidee() {
    if (nextBtnn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlidee++;
        theCheckerr();
    }
};

function prevSlidee() {
    if (prevBtnn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlidee--;
        theCheckerr();
    }
};

function theCheckerr() {
    removeAllActivee();
    sliderImagess[currentSlidee - 1].classList.add("active");
    paginationBulletss[currentSlidee - 1].classList.add("active");
    if (currentSlidee == 1) {
        prevBtnn.classList.add("disabled");
    }else{
        prevBtnn.classList.remove("disabled");
    }
    if (currentSlidee == sliderCountt) {
        nextBtnn.classList.add("disabled");
    }else {
        nextBtnn.classList.remove("disabled");
    }
};

function removeAllActivee() {
    sliderImagess.forEach( function (img) {
        img.classList.remove("active");
    });
    paginationBulletss.forEach(function (li) {
        li.classList.remove("active");
    })
};

// ----------------------to open popup and close it---------------
openPopup = document.querySelector(".landing .box .photos");
closePopup = document.getElementById("closee");
overLay = document.querySelector(".overlay");
popUp = document.querySelector(".popup");

openPopup.onclick = function () {
    popUp.classList.add("active");
    overLay.classList.add("active");
}
closePopup.onclick = function () {
    popUp.classList.remove("active");
    overLay.classList.remove("active");
}
