import React from 'react';
import Header from './Header';
import Home from './Home';
import Products from './Products';

const App = () => {
  let Page = Home;

  const { pathname } = window.location;
  if (pathname === '/products') {
    Page = Products;
  } else {
    Page = Home;
  }

  return (
    <div>
      <Page />
      <Header />
    </div>
  );
};

export default App;
