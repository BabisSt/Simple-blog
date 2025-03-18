import React, { useEffect, useState } from "react";

import TrailerOfWeekEdit from "../TrailerOfWeekEdit";
import SoundtrackOfMonthEdit from "../SoundtrackOfMonthEdit";
import PinnedPostEdit from "../PinnedPostEdit";
import PopularPostsEdit from "../PopularPostsEdit";
import CarouselEdit from "../CarouselEdit";
import MovieSuggestionEdit from "../MovieSuggestionEdit";
import AuthorTeamEdit from "../AuthorTeamEdit";
import { Author } from "../../../interfaces";

export default function Widgets() {
  const [pinnedPost, setPinnedPost] = useState("");
  useEffect(() => {
    const fetchPinnedPost = async () => {
      try {
        const linkResponse = await fetch("http://localhost:8080/pinnedArticle");
        const linkData = await linkResponse.json();
        const link = linkData.link;
        console.log(link);

        setPinnedPost(link);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPinnedPost();
  }, []);

  const [authors, setAuthors] = useState<Author[]>([]);
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch(`http://localhost:8080/authors`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    console.log(authors);
    fetchAuthors();
  }, []);

  const listOfMovies = ["DC (2025)", "Marvel (2025)", "Superman (2025)"];
  return (
    <div>
      <h2 className=" mx-20 text-2xl md:text-3xl mb-4 pb-1 w-auto font-bold text-gray-900 text-center mt-6 border-b-4 border-blue-900 rounded-lg">
        Επεξεργασία Widget
      </h2>
      <div className="sm:m-20 m-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-1">
        {pinnedPost && <PinnedPostEdit link={pinnedPost} />}
        <TrailerOfWeekEdit
          link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
        />
        <SoundtrackOfMonthEdit
          link={"https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"}
        />
        <PopularPostsEdit
          first_link={
            "https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
          }
          second_link={
            "https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
          }
          third_link={
            "https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
          }
        />
        <CarouselEdit
          first_link={
            "https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
          }
          second_link={
            "https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
          }
          third_link={
            "https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
          }
          forth_link={
            "https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
          }
        />

        <MovieSuggestionEdit listOfMovies={listOfMovies} />
        <AuthorTeamEdit listOfAuthors={authors} />
      </div>
    </div>
  );
}
