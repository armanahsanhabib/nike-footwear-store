import { useState } from "react";
import "../src/assets/css/App.css";
import products from "./assets/database/products.json";
import FilterRow from "./components/FilterRow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroMain from "./components/HeroMain";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";

function App() {
  const itemsPerPage = 9;
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("Newest");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);

  // Calculate the indexes of the products to be displayed on the selected page
  const indexOfLastItem = selectedPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const sortedProducts = [...products].sort((a, b) => {
    if (selectedFilter === "Price Low to High") {
      return parseInt(a.price) - parseInt(b.price); // Sort low to high
    } else if (selectedFilter === "Price High to Low") {
      return parseInt(b.price) - parseInt(a.price); // Sort high to low
    } else if (selectedFilter === "Highest Rated") {
      return parseInt(b.rating) - parseInt(a.rating); // Sort high to low
    }
    return 0; // Default sort order
  });

  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header setShowCart={setShowCart} showCart={showCart} />
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          handleBackToProducts={handleBackToProducts}
        />
      ) : (
        <div>
          <HeroMain />
          <main className="max-w-[1200px] w-[96%] mx-auto mt-20">
            <FilterRow
              selectedFilter={selectedFilter}
              handleFilterClick={handleFilterClick}
            />
            <section className="grid grid-cols-[250px_auto] gap-x-8">
              <LeftMenu className="w-3/4" />
              <MainContent
                selectedFilter={selectedFilter}
                productCards={currentItems.map((product, index) => (
                  <ProductCard
                    key={index}
                    src={`./images/${product.image}`}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    rating={product.rating}
                    handleProductClick={() => handleProductClick(product)}
                  />
                ))}
                pagination={
                  <Pagination
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                    totalItems={products.length}
                    itemsPerPage={itemsPerPage}
                  />
                }
              />
            </section>
          </main>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
