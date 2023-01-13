import React from 'react';
import styles from './Product.module.css'; // tem que por obrigação colocar o ".module" no nome do arquivo

function Product() {
  console.log(styles);
  return (
    <div>
      <h2 className={styles.title}> Notebook </h2>
      <p className={styles.value}> R$2.000,00 </p>
      <button className={styles.buy}> Buy </button>
    </div>
  );
}

export default Product;
