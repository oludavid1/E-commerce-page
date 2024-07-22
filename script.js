// Change images on desktop layout

function changeImages() {
  const mainPhoto = document.getElementById("main-photo");
  const thmb1 = document.getElementById("thumbnail-1");
  const thmb2 = document.getElementById("thumbnail-2");
  const thmb3 = document.getElementById("thumbnail-3");
  const thmb4 = document.getElementById("thumbnail-4");

  thmb1.addEventListener("click", () => {
    mainPhoto.innerHTML =
      '<img src="./images/image-product-1.jpg" alt="Fall limited edition sneakers 1">';
  });

  thmb2.addEventListener("click", () => {
    mainPhoto.innerHTML =
      '<img src="./images/image-product-2.jpg" alt="Fall limited edition sneakers 2">';
  });

  thmb3.addEventListener("click", () => {
    mainPhoto.innerHTML =
      '<img src="./images/image-product-3.jpg" alt="Fall limited edition sneakers 3">';
  });

  thmb4.addEventListener("click", () => {
    mainPhoto.innerHTML =
      '<img src="./images/image-product-4.jpg" alt="Fall limited edition sneakers 4">';
  });
}

changeImages();

// Reset Cart

function deleteCart() {
  const deleteBtn = document.getElementById("delete-button");
  const productRundown = document.getElementById("product-rundown");
  const cartCounter = document.getElementById("cart-counter");

  deleteBtn.addEventListener("click", () => {
    productRundown.innerHTML = `<p>Your cart is empty</p>`;
    cartCounter.style.display = "none";
  });
}

// Change value of counter

function countCart() {
  const plusBtn = document.getElementById("plus-button");
  const minusBtn = document.getElementById("minus-button");
  const counter = document.getElementById("product-counter");
  const cartCounter = document.getElementById("cart-counter");
  const addBtn = document.getElementById("add-button");
  const productRundown = document.getElementById("product-rundown");
  const deleteBtn = document.getElementById("delete-button");

  let count = 0;
  plusBtn.addEventListener("click", () => {
    count += 1;
    counter.innerText = `${count}`;
  });

  minusBtn.addEventListener("click", () => {
    if (count > 0) {
      count -= 1;
    } else {
      count = 0;
    }
    counter.innerText = `${count}`;
  });

  addBtn.addEventListener("click", () => {
    if (count === 0) {
      cartCounter.style.display = "none";
    } else {
      cartCounter.style.display = "flex";
      cartCounter.innerText = `${count}`;
      productRundown.innerHTML = `
            <img src="./images/image-product-1-thumbnail.jpg" alt="Fall limited editio sneakers 1">
          <div class="cart-product">
            <p class="product-name">Fall limited edition sneakers</p>
            <p>$125 x ${count} <b>$${count * 125}</b></p>
          </div>
          <button class="delete-button" id="delete-button" onclick="deleteCart()" aria-label="delete items from cart">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
          </button>
            `;
    }
  });
}

countCart();

// Open/close mobile menu

function toggleMobMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("close-icon");

  hamburger.addEventListener("click", () => {
    mobileMenu.style.display = "flex";
  });

  closeIcon.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
}

toggleMobMenu();

// Photo carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// thumbnail controls

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// show slides

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  var thumbnails = document.getElementsByClassName("carousel-thumbnail");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";

  thumbnails[slideIndex - 1].className += " active";
}

// Show/Hide cart

function toggleCart() {
  const cartBtn = document.getElementById("cart-button");
  const cart = document.getElementById("cart-container");

  cartBtn.addEventListener("click", () => {
    cart.classList.toggle("active");
  });
}

toggleCart();

// open modal

function openModal() {
  document.getElementById("carousel-container").style.display = "block";
}

// close modal

function closeModal() {
  document.getElementById("carousel-container").style.display = "none";
}
