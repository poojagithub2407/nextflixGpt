import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {
     const [isSignForm, setIsSgnForm] = useState(true);

     const toggleSignInForm = () => {
          setIsSgnForm(!isSignForm);
     };
     return (
          <>
               <div className="relative h-screen">
                    <div className="px-44 py-2">
                         <Header />
                    </div>
                    <div className="absolute inset-0 -z-10">
                         <img
                              src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg"
                              alt="logo"
                              className="w-full h-full"
                         />
                    </div>
                    <form className="w-3/12 md:w-3/12 sm:w-8/12 absolute p-12 bg-black bg-opacity-80 my-20 mx-auto right-0 left-0 text-white rounded-lg">
                         <h1 className="font-bold text-3xl">
                              {isSignForm ? "Sign Up" : "Sign In"}
                         </h1>
                         {!isSignForm &&  <input
                              type="text"
                              className="p-4 my-2 w-full mt-6 border border-gray-400 bg-black rounded-md text-white focus:outline focus:outline-2 focus:outline-white"
                              placeholder="Full Name"
                         />}
                        
                         <input
                              type="email"
                              className="p-4 my-2 w-full mt-6 border border-gray-400 bg-black rounded-md text-white focus:outline focus:outline-2 focus:outline-white"
                              placeholder="Email or mobile number"
                         />
                         <input
                              type="password"
                              className="p-4 my-2 border border-gray-400 bg-black w-full rounded-md text-white focus:outline focus:outline-2 focus:outline-white"
                              placeholder="Password"
                         />
                         <button className="p-2 my-2 bg-red-700 w-full rounded-md font-semibold border border-gray-400">
                              Sign In
                         </button>
                         <div>
                              <p className="text-center">OR</p>
                              <div className="flex justify-center my-2">
                                   <button className="p-2 my-2 w-auto px-6 text-white font-medium bg-white bg-opacity-30 rounded-md hover:bg-opacity-50">
                                        Use a sign-in code
                                   </button>
                              </div>
                              <p className="text-center underline cursor-pointer">
                                   Forgot password?
                              </p>
                              <div className="space-y-4">
                                   <label className="text-md font-medium">
                                        <input type="checkbox" />
                                        Remember me
                                   </label>
                                   <div onClick={toggleSignInForm}>
                                        {isSignForm ? (
                                             <p>
                                                  New to Netflix?
                                                  <span>
                                                       <strong className=" hover:underline hover:cursor-pointer">
                                                            Sign up now.
                                                       </strong>
                                                  </span>
                                             </p>
                                        ) : (
                                             <p>Already Registered?  <strong className=" hover:underline hover:cursor-pointer"> Sign Up </strong></p>
                                        )}
                                   </div>

                                   <p className="text-sm">
                                        This page is protected by Google reCAPTCHA to ensure you're not
                                        a bot.
                                   </p>
                              </div>
                         </div>
                    </form>
               </div>
               <Footer />
          </>
     );
};

export default Login;
