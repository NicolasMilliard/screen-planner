import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../../Buttons/Button";

import { getGenres, Genre } from "../../../pages/api/getGenres";

export interface Props {
  display: boolean;
}

const SearchFilter: FC<Props> = ({ display }) => {
  const genres: Genre[] = getGenres();

  return (
    <>
      {display && (
        <div className="absolute w-full max-w-5xl top-14 px-6 py-8 rounded-2xl bg-white-100 dark:bg-black-500 text-white-100">
          {/* Genres */}
          <div>
            <h2 className="uppercase text-xl text-black-100 mb-6 tracking-widest">Genres</h2>
            <div className="flex flex-wrap gap-4">
              {genres.map((genre) => (
                <div key={genre.id} className="flex items-center">
                  <input type="checkbox" id={genre.text} />
                  <label htmlFor={genre.text} className="ml-2">
                    {genre.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Date, Note and button */}
          <div className="flex">
            {/* Date */}
            <div></div>
            {/* Note */}
            <div></div>
            {/* Button */}
            <Button
              icon={<SearchIcon className="h-5 w-auto text-white-100 mr-2" />}
              text="Search"
              customFunc={() => {
                console.log("test");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFilter;
