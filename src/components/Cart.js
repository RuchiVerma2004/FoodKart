import { useSelector, useDispatch} from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    // subscribing a small portion of store only not the entire store
    const cartItems = useSelector((store) => store.cart.items);
   

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
       
        dispatch(clearCart());
    };

    return (
        <div className=" m-4 p-4">
            <h1 className="text-center text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.map((cartItem) => (
                    <MenuCard key={cartItem.id} data={cartItem} />
                ))}
            <button className="p-2 mt-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1 className="mt-4 text-red-950">Your Cart Is empty Add Items to the Cart!</h1>}
            </div>
        </div>
    );
};

export default Cart;


// use keyword reducer and reducers very carefully many programers face trouble in this
