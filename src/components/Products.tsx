import React from "react";
import {ProductsCard} from "./ProductsCard";

export const Products = ({ products } : any) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-[#D6EADF] text-black py-2 w-80 text-center">
          Shop with Lowding Shop 
        </h1>
        <span className="w-20 h-[3px] bg-[#D6EADF]"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        Lowdingshop is an online store that sells fashion and electronics products. Our fashion collection includes a variety of clothing, shoes, and accessories for both men and women, while our electronics category features the latest gadgets, smartphones, laptops, and cameras. We offer high-quality products from trusted brands and designers, ensuring customer satisfaction. Shop with us and experience convenient online shopping with fast and secure delivery.
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item:any) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

