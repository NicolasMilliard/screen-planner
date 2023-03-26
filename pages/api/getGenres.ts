export interface Genre {
  id: number;
  icon: string;
  text: string;
  link: string;
}

export const getGenres = (): Genre[] => {
  const genres: Genre[] = [
    {
      id: 0,
      icon: "",
      text: "Action",
      link: "#",
    },
    {
      id: 1,
      icon: "",
      text: "Adventure",
      link: "#",
    },
    {
      id: 2,
      icon: "",
      text: "Animation",
      link: "#",
    },
    {
      id: 3,
      icon: "",
      text: "Comedy",
      link: "#",
    },
    {
      id: 4,
      icon: "",
      text: "Crime",
      link: "#",
    },
    {
      id: 5,
      icon: "",
      text: "Drama",
      link: "#",
    },
    {
      id: 6,
      icon: "",
      text: "Family",
      link: "#",
    },
    {
      id: 7,
      icon: "",
      text: "Fantasy",
      link: "#",
    },
    {
      id: 8,
      icon: "",
      text: "History",
      link: "#",
    },
    {
      id: 9,
      icon: "",
      text: "Horror",
      link: "#",
    },
    {
      id: 10,
      icon: "",
      text: "Musical",
      link: "#",
    },
    {
      id: 11,
      icon: "",
      text: "Mystery",
      link: "#",
    },
    {
      id: 12,
      icon: "",
      text: "Reality-TV",
      link: "#",
    },
    {
      id: 13,
      icon: "",
      text: "Romance",
      link: "#",
    },
    {
      id: 14,
      icon: "",
      text: "Sci-Fi",
      link: "#",
    },
    {
      id: 15,
      icon: "",
      text: "Sport",
      link: "#",
    },
    {
      id: 16,
      icon: "",
      text: "Thriller",
      link: "#",
    },
    {
      id: 17,
      icon: "",
      text: "War",
      link: "#",
    },
    {
      id: 18,
      icon: "",
      text: "Western",
      link: "#",
    },
  ];

  return genres;
};
