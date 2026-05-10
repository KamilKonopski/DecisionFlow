import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="relative w-full flex items-center">
      <IoMdSearch size={18} className="pointer-events-none absolute left-4 text-text-secondary" />
      <input
        id="global-search-input"
        type="text"
        placeholder="Search decisions, options, teams..."
        className="
            h-10
            w-full
            rounded-sm
            border
            border-border
            bg-surface
            px-11
            text-sm
            text-text-primary
            shadow-sm
            outline-none
            transition-all
            duration-200
            placeholder:text-text-secondary
            focus:border-primary
          "
      />
    </div>
  );
};

export default Search;
