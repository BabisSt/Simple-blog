export interface AuthorTeamEditProps {
  listOfAuthors: Author[];
}

export interface Author {
  id: string;
  name: string;
}

export interface Movie {
	id: string;
	name: string;
}

export interface MovieSuggestionEditProps {
  listOfMovies: Movie[];
}

export interface PinnedPostEditProps {
  link: string;
}

export interface SoundtrackOfMonthEditProps {
  link: string;
}

export interface TrailerOfWeekEditProps {
  link: string;
}

export interface PinnedPostProps {
  post: PostProps;
}

export interface PopularPostProps {
  posts: PostProps[];
}

export interface PostSuggestedProps {
  posts: PostProps[];
}

export interface PostProps {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photos: string | string[];
  tags: string | string[];
  state: boolean;
  clicks: string;
}

export interface CarouselProps {
  posts: PostProps[];
}

export interface MovieStatsProps {
  imdbRating: string;
  lbRating: string;
  rtRating: string;
}
export interface ArticleProps {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photos: string | string[];
  tags: string | string[];
  state: boolean;
  clicks: string;
}

export interface CarouselEditProps {
  first_link: string;
  second_link: string;
  third_link: string;
  forth_link: string;
}

export interface NavButtonProps {
  path: string;
  label: string;
  icon: string | null;
}

export interface PopularPostsEditProps {
  first_link: string;
  second_link: string;
  third_link: string;
}
