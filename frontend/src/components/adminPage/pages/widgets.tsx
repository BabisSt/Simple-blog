import React, { useEffect, useState } from "react";
import PinnedPostEdit from "../PinnedPostEdit";
import CarouselEdit from "../CarouselEdit";
import MovieSuggestionEdit from "../MovieSuggestionEdit";
import AuthorTeamEdit from "../AuthorTeamEdit";
import { Author, Movie } from "../../../interfaces";

export default function Widgets() {
  const [pinnedPost, setPinnedPost] = useState("");
  useEffect(() => {
    const fetchPinnedPost = async () => {
      try {
        const linkResponse = await fetch("http://localhost:8080/pinnedArticle");
        const linkData = await linkResponse.json();
        const link = linkData.link;

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
    fetchAuthors();
  }, []);

  const [carousel, setCarousel] = useState("");
  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const linkResponse = await fetch("http://localhost:8080/carousel");
        const linkData = await linkResponse.json();
        const link = linkData.links;

        setCarousel(link);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarousel();
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:8080/movies`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2 className=" mx-20 text-2xl md:text-3xl mb-4 pb-1 w-auto font-bold text-gray-900 text-center mt-6 border-b-4 border-blue-900 rounded-lg">
        Επεξεργασία Widget
      </h2>
      <div className="sm:m-20 m-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-1">
        {pinnedPost && <PinnedPostEdit link={pinnedPost} />}
        <CarouselEdit links={carousel} />
        <MovieSuggestionEdit listOfMovies={movies} />
        <AuthorTeamEdit listOfAuthors={authors} />
      </div>
    </div>
  );
}
