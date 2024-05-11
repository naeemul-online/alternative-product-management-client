import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const {createUser} = useContext(AuthContext)

    
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

// register form submit handler
const onSubmit = (data) => {
  const { email, password } = data;

 if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
    setErrorRegister("Password Must have an Uppercase and Lowercase Letter and at least 6 character");
    return;
  }

  createUser(email, password)
    .then((result) => {
      // alert("User created successfully");
      toast.success("Account created successfully");       
      if (result.user) {
        navigate(from);
      }
    })
    .catch((error) => {
      setErrorRegister(error.message);
    });
};


    return (
        <div className="w-full max-w-md p-4 mx-auto my-10 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
        Create your account
        </h2>
        <p className="text-sm text-center text-gray-400">
          Already have account?
          <Link to='/login'
            href="#"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Login here
          </Link>
        </p>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
               Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                {...register("fullName", { required: true })}
              />
               {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              
            </div>
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
            <label htmlFor="password" className="block text-sm">
                Password
              </label>            
              <input
                //  type= {showPassword ? "text" : "password"}
                type= "password"
                name="password"
                id="password"
                placeholder="password"           
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
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="photURL" className="text-sm">
                  Photo URL
                </label>               
              </div>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                {...register("photo", { required: true })}
              />
                {errors.photo && (
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
            Create your account
          </button>
        </form>
      </div>
    );
};

export default Register;