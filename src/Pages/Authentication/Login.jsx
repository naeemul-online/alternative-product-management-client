import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle, user } = useContext(AuthContext);

  console.log(user);

  const [errorRegister, setErrorRegister] = useState();
  // const [showPassword, setShowPassword] = useState(false);

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //login with google handler

  const handleSocialLogin = () => {
    signInWithGoogle().then((result) => {
      toast.success("You are login successfully");
      if (result.user) {
        navigate(from);
      }
    });
  };

  // login handler
  const onSubmit = (data) => {
    const { email, password } = data;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setErrorRegister(
        "Password Must have an Uppercase and Lowercase Letter and at least 6 character"
      );
      return;
    }

    signIn(email, password)
      .then((result) => {
        // alert("User created successfully");
        toast.success("Login successfully");
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        setErrorRegister(error.message);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 my-10 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>
      <p className="text-sm text-center text-gray-400">
        Dont have account?
        <Link
          to="/register"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Register here
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <button
          onClick={handleSocialLogin}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400" />
        <p className="px-3 text-gray-400">OR</p>
        <hr className="w-full text-gray-400" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              {...register("email", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="space-y-2">
            <input
              //  type= {showPassword ? "text" : "password"}
              type="password"
              placeholder="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border  rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              {...register("password", { required: true })}
            />
            {/* Show password icon */}
            {/* <span className="absolute right-50% mt-14 bg-red-600" onClick={() => setShowPassword(!showPassword)}>{ !showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> }</span> */}
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {errorRegister && (
            <span className="text-red-500">{errorRegister}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
        >
          Login to your account
        </button>
      </form>
    </div>
  );
};

export default Login;
