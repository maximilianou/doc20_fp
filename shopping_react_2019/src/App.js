import React from 'react';
import Products from './Products';
import Cart from './Cart';
import ProductFrom from './ProductFrom';

const App = () => {
  return (
    <div className="App">
      <header><h1>Shopping Cart React 2019 ( like redux )</h1></header>
      <div class='container'>
        <Products />
        <ProductFrom />
        <Cart />
      </div>

    </div>
  );
}

export default App;
