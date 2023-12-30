import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({image,review,name,price,index}) => {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`Review ${index} image`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
