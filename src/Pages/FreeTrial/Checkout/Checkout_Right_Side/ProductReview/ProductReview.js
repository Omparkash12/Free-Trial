import React from 'react';
import './ProductReview.css'

// Images
import product_large_image from '../../../../Images/product_large_image.svg'

const ProductReview = () => {
  return (
    <section className="product_review_section">
        <div className="product_large_image">
            <img src={product_large_image} alt="" />
        </div>
    </section>

  )
}

export default ProductReview