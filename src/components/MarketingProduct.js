import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const MarketingProduct = () => {
  return (
    <div className="marketing  ">
      <a href="#">Anasayfa</a>
      <BiChevronRight className="icon" />
      <a href="#">Kadın</a>
      <BiChevronRight className="icon" />
      <a href="#">Giyim</a>
      <BiChevronRight className="icon" />
      <a href="#" className="font-bold">
        Elbise
      </a>
    </div>
  )
}

export default MarketingProduct
