import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './components/product_list/product_list';
import ProductDetail from './components/product_detail/product_detail';
import styles from './App.module.css';

function App({ productRepository }) {
  const [products, setProducts] = useState([]);
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    const syncProducts = () => {
      productRepository
        .getProducts()
        .then(products => {
          setProducts(products);
        });
    };

    const syncMenus = () => {
      productRepository
        .getMenus()
        .then(menus => {
          setMenus(menus);
        });
    };

    return () => {
      syncProducts();
      syncMenus();
    };
  }, [productRepository]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProductList products={products} menus={menus} />} />
          <Route path='/product_detail' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
