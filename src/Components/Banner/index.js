import "./index.css";
const Banner = () => (
  <div className="banner-container">
    <div className="text-container">
      <h1>
        The Christmas Sale
        <br />
        is now back !
      </h1>
      <p>
        Get your favourite device at an unbelievable price and win many
        surprises
        <br />
        Chirstmas Discount available on all gadgets from just Rs.299
      </p>
      <button className="btn">Explore Now</button>
    </div>
    <img className="banner-image" src="banner-image.png" alt="banner-image" />
  </div>
);
export default Banner;
