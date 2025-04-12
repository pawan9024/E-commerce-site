import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="relative flex flex-col h-screen w-full">

      {cart.length > 0 ? (
        <>
          {/* Scrollable Cart Items */}
          <div className="overflow-y-auto flex-1 px-4 py-2 relative">
            <div className="max-w-3xl mx-auto w-full">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
          </div>

          {/* Tip Section */}
          <div className="text-center text-sm text-gray-500 mb-1">
            🎁 Tip: You get free shipping on orders over $50!
          </div>

          {/* Fixed Total Section */}
          <div className="bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-6 border-t sticky bottom-0 w-full z-20">
            <div className="max-w-3xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  Total Items: <span className="font-bold text-black">{cart.length}</span>
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Total Amount: <span className="text-green-600 font-bold">${totalAmount.toFixed(2)}</span>
                </p>
              </div>
              <button className="bg-green-700 px-6 py-3 text-white font-bold rounded-md text-lg hover:bg-green-800 transition">
                Check Out Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
          <h1 className="font-semibold text-xl">Cart empty</h1>
          <Link to={"/"}>
            <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
            border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
