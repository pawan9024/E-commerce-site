import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="w-full border-b border-gray-300 py-6 px-4 h-[200px]">
      <div className="flex items-center gap-6">

        {/* Product Image */}
        <img src={item.image} alt={item.title} className="w-[120px] h-[120px] object-contain" />

        {/* Product Info */}
        <div className="flex flex-col flex-1">
          <h1 className="text-gray-800 font-semibold text-lg">{item.title}</h1>
          <p className="text-gray-500 text-sm">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
          
          {/* Price and Delete */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-green-600 font-semibold text-lg">${item.price}</p>
            <button
              onClick={removeFromCart}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <MdDelete />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
