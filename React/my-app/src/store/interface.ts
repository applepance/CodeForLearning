export interface movie {
  name: string;
  genres: [];
  title: string;
  id: string;
  alt: string;
  images: [];
  year: string;
  directors: [];
  subtype: string;
  original_title: string;
  collect_count: number;
  casts: star[];
  rating: rating;
}

export interface rating {
  max: number;
  average: string;
  stars: number;
  min: number;
}

export interface star {
  name: string;
  id: string;
  avatars: [];
  alt: string;
}

export interface State {
  movieList: movie[];
}