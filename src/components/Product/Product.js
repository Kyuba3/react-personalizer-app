import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage/ProductImage';
import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  }

  const addToCart = {
    name: props.title, 
    price: getPrice(),
    size: currentSize,
    color: currentColor,
  };


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor}/>
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
          price={currentPrice}
          actionPrice={setCurrentPrice}
          sizes={props.sizes}
          type={props.type}
        ></ProductForm>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;