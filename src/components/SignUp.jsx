import Dropdown from './Dropdown';
import Header from './Header';

const SignUp = () => {
     return (
          <div className="relative px-16 py-8">
               {/* Header Section */}
               <div className="flex items-center py-4">
                    <Header />

                    {/* Right Section (Dropdown + Sign In Button) at Screen End */}
                    <div className="absolute right-0 flex items-center gap-4 pr-16">
                         <Dropdown />
                         <button className="px-6 py-1 bg-white text-black rounded-2xl font-medium hover:bg-gray-300">
                              Sign In
                         </button>
                    </div>
               </div>

               {/* Fixed Menu Section */}
               <div className="top-0 z-50">
                    <div className="flex items-center justify-center w-4/12 mx-auto mt-6 gap-6 px-4 py-4 text-white bg-black rounded-full font-medium text-md shadow-lg cursor-pointer">
                         <div>Popular Now</div>
                         <div>Plans</div>
                         <div>Reason to Join</div>
                         <div>FAQ</div>
                    </div>
               </div>

               {/* Image Section with Overlay Text */}
               <div className="relative flex justify-center my-10">
                    <div className="relative w-full max-w-[2000px] px-4">
                         {/* Image */}
                         <img
                              src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/IN-en-20250303-TRIFECTA-perspective_8d2f60cf-007f-4f25-99b0-7c0b77f38bc1_small.jpg"
                              alt="Netflix Promotion"
                              className="w-full max-h-[500px] object-cover rounded-lg shadow-xl"
                         />

                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                              <h1 className="text-4xl font-extrabold drop-shadow-lg">
                                   Unlimited Movies, TV Shows & More
                              </h1>
                              <p className="text-lg mt-4 max-w-3xl drop-shadow-lg">
                                   Watch anywhere. Cancel anytime.
                              </p>
                              <button className="mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700">
                                   Get Started
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;
