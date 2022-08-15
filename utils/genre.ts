export const getGenre = (genre: number) => {
  let genreType: string;
  switch (genre) {
    case 1:
      genreType = "space";
      break;
    case 2:
      genreType = "edm";
      break;
    case 3:
      genreType = "amapiano";
      break;
    default:
      genreType = "none";
  }
  return genreType;
};
