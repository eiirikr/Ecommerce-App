import React from "react";

const Header = () => {
  return (
    <>
      <header class="navbar">
        <div class="top-bar">
          <div class="left-links">
            <a href="#">Seller Centre</a>
            <a href="#">Start Selling</a>
            <a href="#">Download</a>
            <a href="#">
              Follow us on <ion-icon name="logo-facebook"></ion-icon>{" "}
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
          <div class="right-links">
            <a href="#">
              Notifications <i class="fas fa-bell"></i>
            </a>
            <a href="#">
              Help <i class="fas fa-question-circle"></i>
            </a>
            <a href="#">
              English <i class="fas fa-globe"></i>
            </a>
            <a href="#" class="sign-up">
              Sign Up
            </a>
            <a href="#" class="login">
              Login
            </a>
          </div>
        </div>
        <div class="main-nav">
          <div class="logo">LOGO</div>
          <div class="search-bar">
            <input type="text" placeholder="your first order"></input>
            <button>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <div class="cart-icon">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
        <div class="suggestions">
          <a href="#">Shoes & Clothing</a>
          <a href="#">Pet Supplies</a>
          <a href="#">Toys & Hobbies</a>
          <a href="#">Health & Wellness</a>
          <a href="#">Home & Living</a>
          <a href="#">Sex Toy</a>
          <a href="#">Beauty & Personal Care</a>
          <a href="#">Books & Stationery</a>
          <a href="#">Industrial & Professional Equipment</a>
        </div>
      </header>
    </>
  );
};

export default Header;
