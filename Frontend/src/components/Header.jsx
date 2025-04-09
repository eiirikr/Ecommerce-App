import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-red-500 text-white px-10 py-3">
        <div className="flex justify-between  text-sm flex-wrap">
          <div className="left-links">
            <a href="#" className="text-white no-underline mr-2">Seller Centre</a>
            <a href="#" className="text-white no-underline mr-2">Start Selling</a>
            <a href="#" className="text-white no-underline mr-2">Download</a>
            <a href="#" className="text-white no-underline mr-2">
              Follow us on 
              <ion-icon name="logo-facebook"></ion-icon>{" "}
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
          <div className="right-links">
            <a href="#" className="text-white no-underline ml-2">
              Notifications <i className="fas fa-bell"></i>
            </a>
            <a href="#" className="text-white no-underline ml-2">
              Help <i className="fas fa-question-circle"></i>
            </a>
            <a href="#" className="text-white no-underline ml-2">
              English <i className="fas fa-globe"></i>
            </a>
            <a href="#" className="text-white no-underline ml-2">
              <Link to={"/register"}>Register</Link>
            </a>
            <a href="#" className="text-white no-underline ml-2">
              <Link to={"/login"}>Login</Link>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 flex-wrap">
          <div className="text-2xl font-bold">LOGO</div>
          <div className="flex flex-1/2 mx-5">
            <input type="text" placeholder="Search" className="flex-1 p-2.5 border-none rounded-l-md no-underline bg-white text-indigo-500"></input>
            <button className="bg-white border-none p-2.5 rounded-r-md cursor-pointer ">
              <BsSearch className="text-gray-600 text-lg" />
            </button>
          </div>
          <div className="cart-icon">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
        <div className="suggestions">
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
