import "./index.css";
const Footer = () => (
  <footer>
    <div class="footer-container">
      <div class="footer-section about">
        <h2>About Us</h2>
        <p>
          We are a leading e-commerce platform dedicated to providing the best
          shopping experience. Our mission is to offer a wide range of products
          at competitive prices, ensuring customer satisfaction.
        </p>
      </div>
      <div class="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h2>Contact Us</h2>
        <ul>
          <li>Email: support@ecommerce.com</li>
          <li>Phone: +1 234 567 890</li>
          <li>Address: 123 E-commerce St, Online City, WEB 4567</li>
        </ul>
      </div>
      <div class="footer-section social">
        <h2>Follow Us</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 E-commerce. All rights reserved.</p>
    </div>
  </footer>
);
export default Footer;
