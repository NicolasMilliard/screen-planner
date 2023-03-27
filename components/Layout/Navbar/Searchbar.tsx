import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

const Searchbar: FC = () => {
  return (
    <div className="flex items-center relative">
      <SearchIcon className="absolute h-6 w-auto left-6 text-black-900 dark:text-white-500" />
      <input
        type="text"
        placeholder="Search everything"
        className="py-4 pl-14 border-t border-b border-l border-black-500 rounded-l-2xl outline-0 bg-white-100 dark:bg-black-900"
      />
      <button className="p-4 border-t border-b border-r border-black-500 rounded-r-2xl bg-white-100 dark:bg-black-900">
        <TuneIcon className="h-5 w-auto text-black-900 dark:text-white-500" />
      </button>
    </div>
  );
};

export default Searchbar;
