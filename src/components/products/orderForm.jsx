import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Spinner";
import { createOrder } from "../../api/order";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/Cart/cartsSlice";

const OrderForm = ({ products, onClose }) => {
    console.log(products._id)
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch()


    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm({
    });


    async function submitForm(data) {
        setLoading(true);
        console.log(data);
        try {

            await createOrder(data)

            toast(`Order Placed successfully.`, {
                type: "success",
                autoClose: 1500,
            });
            onClose(false);
            dispatch(deleteProduct(products._id));


        } catch (error) {
            toast(error.message || "Error processing order.", {
                type: "error",
                autoClose: 1500,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            className="w-full py-10 px-14 shadow"
            onSubmit={handleSubmit(submitForm)}
        >
            <div className="py-1">
                <label htmlFor="userId">User ID</label>
                <input
                    type="text"
                    id="userId"
                    className="w-full mt-1 py-1 px-2 rounded border"
                    value={user.id}
                    {...register('userId', { required: 'user ID is required.' })}
                    readOnly
                />

            </div>
            <div className="py-1">
                <label htmlFor="productId">Product ID</label>
                <input
                    type="text"
                    id="productId"
                    className="w-full mt-1 py-1 px-2 rounded border"
                    value={products._id}
                    {...register("productId", { required: "Product ID is required." })}
                />
                <p className="text-red-500 text-sm my-1 mt-2">{errors.productId?.message}</p>
            </div>
            <div className="py-1">
                <label htmlFor="paymentStatus">Payment Status</label>
                <select
                    id="paymentStatus"
                    className="w-full mt-1 py-1 px-2 rounded border"
                    {...register("paymentStatus", { required: "Payment status is required." })}
                >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                </select>
                <p className="text-red-500 text-sm my-1 mt-2">{errors.paymentStatus?.message}</p>
            </div>

            <div className="py-1">
                <label htmlFor="items">Items</label>
                <input
                    type="number"
                    id="items"
                    className="w-full mt-1 py-1 px-2 rounded border"
                    {...register("items", {
                        required: "Items count is required.",
                        min: { value: 1, message: "Items must be at least 1." },
                    })}
                />
                <p className="text-red-500 text-sm my-1 mt-2">{errors.items?.message}</p>
            </div>

            <div className="mt-5 text-center">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-teal-700 text-white rounded px-5 py-1 cursor-pointer flex items-center mx-auto disabled:opacity-75 disabled:cursor-not-allowed"
                >
                    Create Order
                    {loading ? <Spinner className="h-[1.2rem] w-[1.2rem] ml-1" /> : null}
                </button>
            </div>
        </form>
    );
};

export default OrderForm;
