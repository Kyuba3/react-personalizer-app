import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from "../ProductForm/ProductForm";


const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentSizePrice, setCurrentSizePrice] = useState(props.sizes[0].additionalPrice);

  function getPrice() {
    return props.basePrice + currentSizePrice;
  }

  const addToCart = {
    name: props.title,
    color: currentColor,
    size: currentSize,
    price: getPrice(),
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          colors={props.colors}
          actionColor={setCurrentColor}
          currentColor={currentColor}
          size={props.size}
          actionSize={setCurrentSize}
          currentSize={currentSize}
          addToCart={addToCart}
          onClick={props.onClick}
          price={currentSizePrice}
          actionPrice={setCurrentSizePrice}
          sizes={props.sizes}
          type={props.type}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;