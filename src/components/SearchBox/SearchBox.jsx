import { FaSearch } from "react-icons/fa";
const SearchBox = () => {
  return (
    <div className="relative">
      <input
        type="search"
        name=""
        id=""
        className="md:w-[390px] rounded-md h-11 bg-[#FFFFFF20] border pl-10"
        placeholder="Search your Destination..."
      />
      <FaSearch className="absolute top-4 left-4"></FaSearch>
    </div>
  );
};

export default SearchBox;
