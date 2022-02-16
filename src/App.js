import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ListCard from "./Components/ListCard";
import Product from "./Components/Product";
import Clear from "./Components/Clear";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<ListCard />} />
          <Route path="product" element={<Product />} />
          <Route path="list/product" element={<Product />} />

          <Route path="clear" element={<Clear />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
