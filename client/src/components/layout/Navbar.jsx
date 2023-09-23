export default function Header() {
  return (
    <header className="bg-white fixed top-0 w-full shadow-md z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            MyWebsite
          </a>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Activites
            </a>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value="de"
                className="sr-only peer"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Garbage full
              </span>
            </label>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none">sdf</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
