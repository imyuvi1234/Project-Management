import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBox;
