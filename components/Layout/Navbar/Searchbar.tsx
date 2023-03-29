import { FC, useState } from "react";
import Button from "../../Buttons/Button";

import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import SearchFilter from "./SearchFilter";

const Searchbar: FC = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="flex items-center relative">
      {/* Search input */}
      <SearchIcon className="absolute h-6 w-auto left-6 text-black-900 dark:text-white-500" />
      <input
        type="text"
        placeholder="Search everything"
        className="py-4 pl-14 border-t border-b border-l border-black-500 rounded-l-2xl outline-0 bg-white-100 dark:bg-black-900 text-black-900 dark:text-white-100 focus:dark:bg-black-500"
      />
      {/* Toggle search filters */}
      <button
        className="p-4 border-t border-b border-r border-black-500 rounded-r-2xl bg-white-100 dark:bg-black-900"
        onClick={() => setDisplay(!display)}
      >
        <TuneIcon className="h-5 w-auto text-black-900 dark:text-white-500" />
      </button>
      {/* Search button */}
      <Button
        icon={<SearchIcon className="h-5 w-auto text-white-100 mr-2" />}
        text="Search"
        customFunc={() => {
          console.log("test");
        }}
      />
      <SearchFilter display={display} />
    </div>
  );
};

export default Searchbar;
