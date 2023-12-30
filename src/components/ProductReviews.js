import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
      {productReviews.map((item,index)=>(
        <ProductReviewCard image={item.image} review={item.review} name={item.name} price={item.price} index={index} key={item.image}/>
      ))}
    </div>
  )
}

export default ProductReviews
