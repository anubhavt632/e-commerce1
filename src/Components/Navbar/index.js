import "./index.css";
const Navbar = () => (
  <nav>
    <img className="web-logo" src="enpixels.png" alt="Logo" />
    <ul className="nav-menu">
      <li>Home</li>
      <li>Services</li>
      <li className="cart-menu-con">Cart</li>
    </ul>
    <button class="hamburger" id="hamburger">
      ☰
    </button>
  </nav>
);
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("show");
});

export default Navbar;
