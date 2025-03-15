
const Dropdown = () => {
     return (
          <div className="relative inline-block">
               <select className="appearance-none text-white bg-black bg-opacity-90 border border-gray-500 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    <option>English</option>
                    <option>Hindi</option>
               </select>
               <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-cursor">
                    ▼
               </div>
          </div>)
}

export default Dropdown