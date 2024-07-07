import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import "./App.css";
import ProductItem from "./Components/ProductItem";
import Footer from "./Components/Footer";

const dealsList = [
  {
    id: 1,
    name: "iPhone 13 Pro blue (256gb)",
    brand: "Apple",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-95593/Apple-iPhone-13-Pro-Max-featured-image-packshot-review.jpg",
    price: 799,
  },
  {
    id: 2,
    name: "Galaxy S21 Pearl-Blue (256gb)",
    brand: "Samsung",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-91498/galaxys21_5g-550x413-1.jpg",
    price: 699,
  },
  {
    id: 3,
    name: "Pixel 6 Black (128gb)",
    brand: "Google",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-96650/Google-Pixel-6-Pro-featured-image-packshot-review.jpg",
    price: 599,
  },
  {
    id: 4,
    name: "OnePlus 9 Charcol (256gb)",
    brand: "OnePlus",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-101249/OnePlus-9-featured-image-packshot-review.jpg",
    price: 729,
  },
];

const allProductsList = [
  {
    id: 2,
    name: "Galaxy S21 Ultra",
    brand: "Samsung",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-112384/Samsung-Galaxy-S22-Ultra-featured-image-packshot-review-Recovered.jpg",
    price: 1199,
  },
  {
    id: 3,
    name: "Pixel 6 Pro",
    brand: "Google",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/drafts/post-116143/Google-Pixel-6-Pro-featured-image-packshot-review-1.jpg",
    price: 899,
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    brand: "OnePlus",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/drafts/post-101750/OnePlus-9-Pro-featured-image-packshot-review-1024x691-1.jpeg",
    price: 969,
  },
  {
    id: 5,
    name: "Xperia 1 III",
    brand: "Sony",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/drafts/post-101686/Sony-Xperia-1-III-featured-image-packshot-review-Recovered-Recovered.jpg",
    price: 1299,
  },
  {
    id: 6,
    name: "Mi 11 Ultra",
    brand: "Xiaomi",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-91717/Xiaomi-Mi-11-Ultra-featured-image-packshot-review.jpg",
    price: 799,
  },
  {
    id: 7,
    name: "Oppo Find X3 Pro",
    brand: "Oppo",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-80698/Oppo-Find-X3-Pro-featured-image.jpg",
    price: 1159,
  },
  {
    id: 8,
    name: "Huawei P50 Pro",
    brand: "Huawei",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-116203/Huawei-P50-Pro-featured-image-packshot-review.jpg",
    price: 1099,
  },
  {
    id: 9,
    name: "Motorola Edge+",
    brand: "Motorola",
    imageUrl:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-144720/Motorola-Edge-40-Pro_featured-image-packshot-review.jpg",
    price: 999,
  },
];

class App extends Component {
  state = { cartCount: 0 };

  onAddClicked = () => {
    this.setState((prevState) => ({ cartCount: prevState.cartCount + 1 }));
  };

  render() {
    const { cartCount } = this.state;
    return (
      <div>
        <div className="header">
          <Navbar count={cartCount} />
          <Banner />
        </div>

        <div className="product-section">
          <h2 className="title">Deals of the Day</h2>
          <ul className="products-row-list">
            {dealsList.map((eachObj) => (
              <ProductItem
                product={eachObj}
                key={eachObj.id}
                onAddClicked={this.onAddClicked}
              />
            ))}
          </ul>
        </div>

        <div className="product-section">
          <h2 className="title">All Products</h2>
          <ul className="products-row-list">
            {allProductsList.map((eachObj) => (
              <ProductItem
                product={eachObj}
                key={eachObj.id}
                onAddClicked={this.onAddClicked}
              />
            ))}
          </ul>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
