// DOM Elements
var img = document.getElementById("hero-image");
var brand = document.getElementById("brand");
var subBrand = document.getElementById("sub-brand-text");
var heroDownButton = document.getElementById("hero-down-button");

//User profile menu
let profileDropdownList = document.querySelector('.profile-dropdown-list');
let btn = document.querySelector('.profile-dropdown-button');
let arrow = document.querySelector('#arrow');
let toggle = document.querySelector('#Toggle');
let signout = document.querySelector('#Signout');
let lightdark = document.querySelector('#light-dark');
let toggletext = document.querySelector('#toggle-text');
let contactuslink = document.querySelector('.contact-us-link');
let button69 = document.querySelector(".button-69");
let nav = document.querySelector(".navbar");
let atag = document.querySelector('.atag');
let blog4 = document.querySelector("#Blog4");
let signin = document.querySelector('#Signin');

//Product Cards
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];

// let info = JSON.parse(localStorage.getItem('authInfo'));
// console.log(info);
// console.log("RoomCraft");


var dark = {
  backgroundColor: "#121212",
  ctl: "#ffffff",
  fm: "fa-moon",
  fs: "fa-sun",
  tt: "Light",
  bi: "linear-gradient(#ffffff, #ffffff 100%)",
  c: "#000000",
  b: "3px solid white"
}
var light = {
  backgroundColor: "#ffffff",
  ctl: "#000000",
  fm: "fa-sun",
  fs: "fa-moon",
  tt: "Dark",
  bi: "linear-gradient(#000000, #000000 100%)",
  c: "#ffffff"
}
if (JSON.parse(localStorage.getItem("toggle")) == null) {
  localStorage.setItem("toggle", JSON.stringify(light));
}
var tempObj = JSON.parse(localStorage.getItem("toggle"));
body.style.backgroundColor = tempObj.backgroundColor;
if (contactuslink != null) {
  contactuslink.style.color = tempObj.ctl;
}
lightdark.classList.remove(tempObj.fm);
lightdark.classList.add(tempObj.fs);
toggletext.innerHTML = tempObj.tt;
if (button69 != null) {
  button69.style.backgroundImage = tempObj.bi;
  button69.style.color = tempObj.c;
}
if (blog4 != null) {
  blog4.style.border = tempObj.b;
}

toggle.addEventListener('click', () => {
  if (lightdark.classList.contains("fa-moon")) {
    localStorage.setItem("toggle", JSON.stringify(dark));
    var Dark = JSON.parse(localStorage.getItem("toggle"));
    lightdark.classList.remove(Dark.fm);
    lightdark.classList.add(Dark.fs);
    toggletext.innerHTML = Dark.tt;
    document.body.style.backgroundColor = Dark.backgroundColor;
    contactuslink.style.color = Dark.ctl;
    button69.style.backgroundImage = Dark.bi;
    button69.style.color = Dark.c;
    blog4.style.border = Dark.b;
    // nav.style.backgroundColor = 'rgba(31, 31, 31, 0.7)';
  }
  else {
    localStorage.setItem("toggle", JSON.stringify(light));
    var Light = JSON.parse(localStorage.getItem("toggle"));
    lightdark.classList.remove(Light.fm);
    lightdark.classList.add(Light.fs)
    toggletext.innerHTML = Light.tt;
    document.body.style.backgroundColor = Light.backgroundColor;
    contactuslink.style.color = Light.ctl;
    button69.style.backgroundImage = Light.bi;
    button69.style.color = Light.c;
    // nav.style.backgroundColor = 'rgba(162, 162, 162, 0.7)';
  }
})

const Toggle = () => profileDropdownList.classList.toggle("active");
// window.addEventListener('click', (e) => {
//   if (!btn.contains(e.target)) {
//     profileDropdownList.classList.remove('active')
//   }
// })

btn.addEventListener('click', () => {
  if (arrow.classList.contains("fa-angle-down")) {
    arrow.classList.remove('fa-angle-down');
    arrow.classList.add('fa-angle-up');
  }
  else {
    arrow.classList.remove('fa-angle-up');
    arrow.classList.add('fa-angle-down');
  }
})

// Show logo on image load
function image() {
  showSubBrand();
  setTimeout(showBrand, 1000);
  setTimeout(showDownButton, 2000);
};
image();

function showBrand() {
  brand.classList.add("h1-appear");
}

function showSubBrand() {
  subBrand.classList.add("p-appear");
}

function showDownButton() {
  heroDownButton.classList.add("img-appear");
}

// Smooth scrolling
(function () {
  "use strict";
  // Feature Test
  if (
    "querySelector" in document &&
    "addEventListener" in window &&
    Array.prototype.forEach
  ) {
    // Function to animate the scroll
    var smoothScroll = function (anchor, duration) {
      // Calculate how far and how fast to scroll
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop;
      var distance = endLocation - startLocation;
      var increments = distance / (duration / 16);
      var stopAnimation;

      // Scroll the page by an increment, and check if it's time to stop
      var animateScroll = function () {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      // If scrolling down
      if (increments >= 0) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function () {
          var travelled = window.pageYOffset;
          if (
            travelled >= endLocation - increments ||
            window.innerHeight + travelled >= document.body.offsetHeight
          ) {
            clearInterval(runAnimation);
          }
        };
      } else {
        // If scrolling up
        // Stop animation when you reach the anchor OR the top of the page
        stopAnimation = function () {
          var travelled = window.pageYOffset;
          if (travelled <= (endLocation || 0)) {
            clearInterval(runAnimation);
          }
        };
      }

      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);
    };

    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll(".down-button");

    // For each smooth scroll link
    [].forEach.call(scrollToggle, function (toggle) {
      // When the smooth scroll link is clicked
      toggle.addEventListener(
        "click",
        function (e) {
          // Prevent the default link behavior
          e.preventDefault();

          // Get anchor link and calculate distance from the top
          var dataID = toggle.getAttribute("href");
          var dataTarget = document.querySelector(dataID);
          var dataSpeed = toggle.getAttribute("data-speed");

          // If the anchor exists
          if (dataTarget) {
            // Scroll to the anchor
            smoothScroll(dataTarget, dataSpeed || 500);
          }
        },
        false
      );
    });
  }
})();

let info = JSON.parse(localStorage.getItem('authInfo'));
if (info != null) {
  // document.getElementById("SigninButton").onclick = null;
  signin.innerText = "Go to Profile Page";
  signin.setAttribute("href", "/Profile");
  // console.log("RoomCraft!");
  console.log(info);
  fetch("https://www.googleapis.com/oauth2/v3/userinfo", {//So basically this is the URL which will get access to the profile picture and the email address.Also inside this fetch we need to provide "headers" as well.So here the header which we are going to provide is simply the "authorization header".
    headers: {
      "Authorization": `Bearer ${info['access_token']}`
    }
  })
    //Now here the above part of code is going to return a promise which we can handle using ".then()".And basically this will contain our "data" which we need to convert into "JSON".
    .then((data) => data.json())
    //Also this would be returning the "info i.e: the information".
    .then((info) => { //Now inside this "info" object we will see that we have "full name" and "profile picture"
      console.log(info);
      //Now we are going to target the elements with the id "name" and "image".
      // document.getElementById("name").value = info.family_name;//Here we are basically manipulating the innerHTML. 
      document.getElementById("User").innerHTML = info.name;
      // document.getElementById("user").innerHTML = info.given_name;
      document.getElementById("profile-info-image").setAttribute('src', info.picture);//Here we are basically setting up the "src" attribute for the "image" element as "info.picture".
      document.getElementById("red").style.color = "#82cd47";
      document.getElementById("email").innerHTML = info.email;
      document.getElementsByClassName("profile-img")[0].style.backgroundImage = 'url(' + info.picture + ')';
    })
}

//Product Cards
console.log("Hello,User!");
iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
})
const addDataToHTML = () => {
  // remove datas default from HTML

  // add new datas
  if (products.length > 0) // if has data
  {
    products.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.dataset.id = product.id;
      newProduct.classList.add('item');
      newProduct.innerHTML =
        `<img src="${product.image}" alt="">
              <h2>${product.name}</h2>
              <div class="price">$${product.price}</div>
              <button class="addCart">Add To Cart</button>`;
      listProductHTML.appendChild(newProduct);
    });
  }
}
listProductHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('addCart')) {
    let id_product = positionClick.parentElement.dataset.id;
    addToCart(id_product);
  }
})
const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
  if (cart.length <= 0) {
    cart = [{
      product_id: product_id,
      quantity: 1
    }];
  } else if (positionThisProductInCart < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1
    });
  } else {
    cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
}
const addCartToMemory = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if (cart.length > 0) {
    cart.forEach(item => {
      totalQuantity = totalQuantity + item.quantity;
      let newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.dataset.id = item.product_id;

      let positionProduct = products.findIndex((value) => value.id == item.product_id);
      let info = products[positionProduct];
      listCartHTML.appendChild(newItem);
      newItem.innerHTML = `
          <div class="image">
                  <img src="${info.image}">
              </div>
              <div class="name">
              ${info.name}
              </div>
              <div class="totalPrice">$${info.price * item.quantity}</div>
              <div class="quantity">
                  <span class="minus"><</span>
                  <span>${item.quantity}</span>
                  <span class="plus">></span>
              </div>
          `;
    })
  }
  iconCartSpan.innerText = totalQuantity;
}
listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = 'minus';
    if (positionClick.classList.contains('plus')) {
      type = 'plus';
    }
    changeQuantityCart(product_id, type);
  }
})
const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
  if (positionItemInCart >= 0) {
    let info = cart[positionItemInCart];
    switch (type) {
      case 'plus':
        cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
        break;

      default:
        let changeQuantity = cart[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          cart[positionItemInCart].quantity = changeQuantity;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
  addCartToMemory();
}
const initApp = () => {
  // get data product
  fetch('Products')
    .then(response => response.json())
    .then(data => {
      products = data;
      addDataToHTML();

      // get data cart from memory
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
      }
    })
}
initApp();

function logout() {
  if (info != null) {
    //Here again we need to make a fetch request but this time it will be a "POST" request.
    fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'], {//Here we are basically concatenating the access token with the URL.So we just need to remove this "access_token" from our account.
      method: "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    })
      //Now here the above part of code is going to return a promise which we are going to handle using ".then()".
      .then((data) => {//And basically this will contain our "data".So we can basically redirect the user to the "home page".
        location.href = "http://127.0.0.1:3000/"
      })
    localStorage.removeItem('authInfo');
  }
  // document.getElementById("Signout").onclick = null;
}


// Start buggyfill for viewport units in old browsers
// window.viewportUnitsBuggyfill.init();
// Get the navigation bar
var navbar = document.getElementById("navbar");

// Get the offset position of the navigation bar
var sticky = navbar.offsetTop;

// Add the sticky class to the navigation bar when you reach its scroll position
// Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Attach the function to the scroll event
window.onscroll = function () {
  stickyNavbar();
};

//OAuth2 Google Login/Authentication
function signIn() {
  //Here we need to get the information from the Google Developer Console.So whenever we are building this application, first of all we will be writing the endpoint on which we would be invoking the user to.
  let outh2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";//So here we just need to make a simple fetch API GET request and we need to pass the client_id ,redirect_uri,scopes,etc.So this is basically the actual OAuth2 endpoint.
  //Now for this we have to create an automatic element which is "form" which means we are creating the form at runtime i.e: dynamically creating the form.We will submit this form automatically.
  let form = document.createElement('form');
  form.setAttribute('method', 'GET');//Here we are going to make a GET request.
  form.setAttribute('action', outh2Endpoint);//Here we are going to submit the form at the "oauth2Endpoint" that we have configured.
  //Now we will add paramters to pass to the "oauth2Endpoint".For that we will create the object "params".

  let params = {
    "client_id": "426450588436-4fckctkmuftpa44m07emc2jtkggepaoh.apps.googleusercontent.com",
    //Here we have to put the "client_id" that we will get from the Google Developer Console.
    "redirect_uri": "http://127.0.0.1:3000/Profile",
    //Whenever the signin process is completed,we have granted all the scopes so which "redirect_uri" Google must point to.
    "response_type": "token",
    //This can be any of the 3 values,either we can access the authorization code,or just send the request for access token.So this value can be either "code"/"token",but here we want access token.
    "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/userinfo.email",//From which scopes we want to get the information are mentioned here.We have different scopes for different Google APIs.We will have a scope for user profile/user information.
    "include_granted_scopes": 'true',//Here we are providing this property.Its value would be "true" i.e:the boolean parameter.We will provide the value true in ''(single quotes).
    "state": 'pass-through-value'
  }

  for (var p in params) {
    let input = document.createElement('input');//for every parameter in this object we would be creating a input element.
    input.setAttribute('type', 'hidden');//it would not be visilbe in the DOM.
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();//inorder to programatically submit the form.
  document.getElementById("SigninButton").setAttribute('disabled', true);
}