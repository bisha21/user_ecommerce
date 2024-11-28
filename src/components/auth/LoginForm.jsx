import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { HOME_ROUTE, REGISTER_ROUTE } from "../../constants/routes";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/authActions";
import Spinner from "../Spinner";
import { useEffect } from "react";

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState } = useForm();
    const {loading} =useSelector(state=>state.auth)
    // const{loading}=useSelector(state=>state.loginUser);
    function submitFunction(data) {
        dispatch(loginUser(data))
        // login(data).then((response) => {
        //     dispatch(setUser(response.data))
        //     navigate(HOME_ROUTE);

        // }).catch((errors) => {
        //     console.log(errors.response.data)
        //     toast.error(" Invaild Email or Password ")

        // })
    }
    // useEffect(()=>{
    //    toast(error,{
    //     type:"error",
    //    })
    // },[error])
    const { errors } = formState;
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-screen">
            <div className=" w-2/3 lg:w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  h-[20vh] md:h-[80vh] flex flex-col justify-center shadow-2xl gap-4 items-center rounded-tl-[50px] rounded-tr-[50px] lg:rounded-tr-none lg:rounded-bl-[50px]  lg:rounded-l-[50px] ">
                <h1 className="text-4xl font-bold text-center text-white ">Login</h1>
                <p className="text-white ">Please login to continue </p>
            </div>

            <form className="shadow-2xl w-2/3 lg:w-1/3 flex flex-col justify-center h-[80vh] px-24" onSubmit={handleSubmit(submitFunction)}>

                {/* Email Input */}
                <div className="mb-5 w-full">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-xl font-medium text-gray-900"

                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        {...register("email", {
                            required: "Email is required",

                        }

                        )

                        } />
                    <p className="text-sm p-1 text-red-600">{errors.email?.message}</p>
                </div>

                {/* Password Input */}
                <div className="mb-5 w-full">
                    <label
                        htmlFor="password"
                        className=" mb-2 text-xl font-medium text-gray-900"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        {...register("password", {
                            required: "Password is required",

                        })}
                    />
                    <p className="text-sm p-1 text-red-600">{errors.password?.message}</p>



                </div>



                {/* Submit Button */}
                <div className=" flex items-center justify-center">
                <button
                    type="submit"
                    className= " flex gap-3 items-center text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl  sm:w-auto px-4 py-2 text-center"
                >
                    Login  {loading ? <Spinner className="w-6 h-6"/>:""}
                </button>
                
                </div>
                <div>
                    <p className="p-2 mt-2">
                        Do not have an account? Please
                        <span className="text-blue-500 ">
                            <Link to={REGISTER_ROUTE}> Register </Link>
                        </span>
                    </p>
                </div>
            </form>

        </div>


    );
}

