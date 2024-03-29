import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import {CartItem} from "../components/CartItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/bazarSlice";



export function Cart  () {
  const productData = useSelector((state :any) => state.bazar.productData);
  const userInfo = useSelector((state :any) => state.bazar.userInfo);
  const dispatch = useDispatch();
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState("");
  const [qty ,setQty ] = useState(1);
  const [products, setProducts] = useState([]);
    useEffect(() => {
    let price = 0;
    productData.map((item:any) => {
      price += item.price * item.quantity;
      return price;
    });
    // setProducts(data.data);
    setTotalAmt(price.toFixed(2));
  }, [productData]);
 const navigate = useNavigate();
  const handleCheckout = async  () => {
    await Promise.all (productData.map((item:any) => {
      const products = axios.get
    ("http://localhost:9999/lowdingshop/checkout?qty="+item.quantity+"&_id="+item._id);
    console.log(products);
  }));
    navigate('/sucessful');
    dispatch(resetCart()) 
  }
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <CartItem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">Cart Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  ${totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                 {userInfo.user_address }
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${totalAmt}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-[#D6EADF] text-black w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Proceed to Checkout
            </button>

          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-black bg-[#D6EADF] font-titleFont font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

