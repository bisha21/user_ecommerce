import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authActions";
import Spinner from "../Spinner";
import Tittle from "../Tittle";
import { toast } from "react-toastify"; // Import toast for notification

export default function RegisterationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState, watch } = useForm();
  const { loading, error } = useSelector((state) => state.auth); // Select error from the state
  const password = watch("password");

  // Handle form submission
  function submitFunction(data) {
    dispatch(registerUser(data))
  }

  const { errors } = formState;

  return (
    <form
      className=" mx-auto mt-12 shadow-2xl w-2/3 flex flex-col items-center justify-center h-[80vh] px-24"
      onSubmit={handleSubmit(submitFunction)}
    >
      <Tittle label="Registration Form " />

      {/* Name Input */}
      <div className="mb-5 w-full">
        <label
          htmlFor="name"
          className="block mb-2 text-xl font-medium text-gray-900"
        >
          User Name
        </label>
        <input
          type="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("name", { required: "Name is required" })}
        />
        <p className="text-sm p-1 text-red-600">{errors.name?.message}</p>
      </div>

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
          {...register("email", { required: "Email is required" })}
        />
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
          {...register("password", { required: "Password is required" })}
        />
        <p className="text-sm p-1 text-red-600">{errors.password?.message}</p>
      </div>

      {/* Confirm Password Input */}
      <div className="mb-5 w-full">
        <label
          htmlFor="confirmPassword"
          className=" mb-2 text-xl font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        <p className="text-sm p-1 text-red-600">
          {errors.confirmPassword?.message}
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="flex gap-3 items-center text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl sm:w-auto px-4 py-2 text-center"
        >
          Register {loading ? <Spinner className="w-6 h-6" /> : ""}
        </button>
      </div>

      <div>
        <p className="p-2 mt-2">
          Already have an account?
          <span className="text-blue-500">
            <Link to="/login"> Login </Link>
          </span>
        </p>
      </div>
    </form>
  );
}
