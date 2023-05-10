import { useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative hidden lg:block outline-none">
      <input
        type="text"
        className={`border-none rounded-md py-2 px-3 bg-transparent outline-none text-white placeholder:text-sm ${
          expanded ? "w-64" : "w-0"
        } transition-all duration-200 ease-in-out borderb-b-1 border-white/50`}
        placeholder="Search any product.. "
      />
      <button
        className="absolute right-0 top-0 h-full w-12 text-white hover:text-primary 
        transition-all duration-200  outline-none"
        onClick={handleExpand}
      >
        {expanded ? (
          <BiX size={24} className="outline-none" />
        ) : (
          <BiSearch size={24} className="outline-none" />
        )}
      </button>
    </div>
  );
};

export default SearchBar;
