import React from "react";
import PinnedPost from "./PinnedPost";
import SoundtrackOfMonth from "./SoundtrackOfMonth";
import TrailerOfWeek from "./TrailerOfWeek";
import MovieSuggestions from "./MovieSuggestions";
import AuthorTeam from "./AuthorTeam";
import SocialMedia from "./SocialMedia";
import { PostProps } from "../../interfaces";

interface SidebarProps {
  pinnedPost: PostProps;
}

export default function Sidebar({ pinnedPost }: SidebarProps) {
  return (
    <div className="flex flex-col p-4 space-y-6 w-full lg:w-[350px]">
      {pinnedPost && <PinnedPost post={pinnedPost} />}
      <SocialMedia />
      <SoundtrackOfMonth />
      <TrailerOfWeek />
      <MovieSuggestions listOfMovies={[]} />
      <AuthorTeam listOfAuthors={[]} />
    </div>
  );
}
