import { FC } from "react";
import SidebarLink from "./SidebarLink";

import { getGenres, Genre } from "../../../pages/api/getGenres";

const GenresList: FC = () => {
  const genres: Genre[] = getGenres();

  return (
    <ul className="pb-8">
      {genres.map((genre) => (
        <li key={genre.id} className="text-lg mb-2">
          <SidebarLink icon={genre.icon} text={genre.text} link={genre.link} />
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
