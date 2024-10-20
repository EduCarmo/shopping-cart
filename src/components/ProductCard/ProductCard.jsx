import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";

import './ProductCard.css'

function ProductCard() {
  return (
    <section className='product-card'>
      <img src="https://http2.mlstatic.com/D_932360-MLA46545868431_062021-W.jpg"
        alt="product"
        className='card-imag'
      />
      <div className="card_infos">
        <h2 className='card_price'>R$ 200.20</h2>
        <h2 className='card_title'>Nome do produto</h2>
      </div>
      <button type='button' className='button_add-card'>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;