import React from 'react'
import ProductCards from './ProductCards'
import ProductImage1 from "../../../public/images/ProductsImage1.png"
import ProductImage2 from "../../../public/images/ProductImage2.png"
import ProductImage3 from "../../../public/images/ProductImage3.png"
import ProductImage4 from "../../../public/images/ProductImage4.png"

const data = [
    {
      image: ProductImage1,
      name: "The north coat",
      originalPrice: "$360",
      discountedPrice: "$260",
      soldOut: "(65)",
      imageWidth: 140,
      imageHeight: 146
    },{
      image: ProductImage2,
      name: "Gucci duffle bag",
      originalPrice: "$1160",
      discountedPrice: "$960",
      soldOut: "(65)",
      imageWidth: 178,
      imageHeight: 129
    },{
      image: ProductImage3,
      name: "RGB liquid CPU Cooler",
      originalPrice: "$170",
      discountedPrice: "$160",
      soldOut: "(65)",
      imageWidth: 191,
      imageHeight: 95
    },{
      image: ProductImage4,
      name: "Small BookSelf",
      discountedPrice: "$360",
      soldOut: "(65)",
      imageWidth: 140,
      imageHeight: 176
    },
]

function Products() {
  return (
    <div className="mt-20 max-w-[1170px] mx-auto flex flex-col gap-[60px] mb-[140px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <p className="font-poppins text-base leading-5 font-semibold text-[#DB4444]">
              This Month
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[87px]">
              <p className="font-inter text-4xl leading-[48px] font-semibold ">
                Best Selling Products
              </p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <button className='bg-[#DB4444] text-white py-4 px-12 rounded'>View All</button>
            </div>
          </div>
        </div>

        <div className='flex gap-[30px]'>
          {data.map((element) => {
            return(
              <ProductCards 
              name = {element.name}
              image = {element.image}
              originalPrice={element.originalPrice}
              discountedPrice={element.discountedPrice}
              soldOut={element.soldOut}
              imageHeight={element.imageHeight}
              imageWidth={element.imageWidth}
              />
            )
          })}
        </div>
    </div>
    
  )
}

export default Products