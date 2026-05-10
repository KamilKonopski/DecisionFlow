import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="relative flex items-center">
      <IoMdSearch
        size={18}
        className="
          pointer-events-none
          absolute left-3
          text-text-secondary
        "
      />
      <input
        id="global-search-input"
        type="text"
        placeholder="Search decisions, options, teams..."
        className="
          h-10 w-full
          rounded-xl
          border border-border
          bg-surface
          pl-10 pr-4
          text-sm
          text-text-primary
          shadow-sm
          outline-none
          transition-all duration-200
          placeholder:text-text-secondary
          focus:border-primary
          focus:ring-2
          focus:ring-primary/10
        "
      />
    </div>
  );
};

export default Search;
