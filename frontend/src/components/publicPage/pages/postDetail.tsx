import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostSuggested from "../PostSuggested";
import MovieStats from "../MovieStats";
import PinnedPost from "../PinnedPost";
import SocialMedia from "../SocialMedia";
import SoundtrackOfMonth from "../SoundtrackOfMonth";
import TrailerOfWeek from "../TrailerOfWeek";
import AuthorTeam from "../AuthorTeam";
import MovieSuggestions from "../MovieSuggestions";

export default function postDetail() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  if (!postId) {
    return <div>Post not found</div>;
  }

  // Sample post data (replace with fetched data)
  const samplePost = {
    id: postId,
    title: "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
    postedBy: "John Doe",
    postTime: "2 hours ago",
    photos:
      ["https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop",
		"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png"
	  ],
    content: `
      Modern cinema has brought a revolution in storytelling, with diverse narratives and groundbreaking visuals.
      In this article, we explore the impact of contemporary filmmakers who push boundaries to create memorable cinematic experiences.
      From the emotional depth of indie films to the grandeur of blockbusters, cinema continues to evolve as a powerful medium.
	  Modern cinema has brought a revolution in storytelling, with diverse narratives and groundbreaking visuals.
      In this article, we explore the impact of contemporary filmmakers who push boundaries to create memorable cinematic experiences.
      From the emotional depth of indie films to the grandeur of blockbusters, cinema continues to evolve as a powerful medium.
    `
  };

  // Split content into sentences
	const sentences = samplePost.content.match(/[^.!?]+[.!?]+/g) || [];

	// Group sentences into paragraphs of 3 sentences each
	const paragraphs = [];
	for (let i = 0; i < sentences.length; i += 3) {
		paragraphs.push(sentences.slice(i, i + 3).join(" "));
	}



	const [posts] = useState([
		{
		  id: "1",
		  title: "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
		  postedBy: "John Doe",
		  postTime: "2 hours ago",
		  content: "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
		  tags: ["τέχνη", "προβολές"],
		  photos: [
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png"
		  ],
		  state: true
		},
		{
		  id: "2",
		  title: "Post Title 2",
		  postedBy: "Alice Smith",
		  postTime: "1 day ago",
		  content: "Another example of a post's content.",
		  tags: ["νέα", "κριτικές"],
		  photos: [
			"https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		  ],
		  state: false
		},
		{
		  id: "3",
		  title: "Φεστιβάλ Κινηματογράφου Θεσσαλονίκης: Όλα όσα πρέπει να ξέρετε",
		  postedBy: "Maria Papadopoulou",
		  postTime: "3 days ago",
		  content: "Το φεστιβάλ επιστρέφει δυναμικά φέτος με πολλές νέες προβολές...",
		  tags: ["φεστιβάλ", "προβολές", "κριτικές"],
		  photos: [
			"https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/36142/article_full%403x.jpg"
		  ],
		  state: true
		},
		{
		  id: "4",
		  title: "Οι πιο πολυσυζητημένες ταινίες της χρονιάς",
		  postedBy: "George Katsaros",
		  postTime: "5 days ago",
		  content: "Από blockbuster μέχρι ανεξάρτητες παραγωγές, αυτές είναι οι ταινίες που άφησαν το στίγμα τους...",
		  tags: ["κριτικές", "νέα"],
		  photos: [
			"https://helpdeskgeek.com/wp-content/pictures/2022/05/review-google.jpg"
		  ],
		  state: true
		},
		{
		  id: "5",
		  title: "Τα τελευταία νέα από τον κόσμο του κινηματογράφου",
		  postedBy: "Nikos Ioannidis",
		  postTime: "1 week ago",
		  content: "Οι πιο φρέσκες ειδήσεις και ανακοινώσεις για τις νέες ταινίες...",
		  tags: ["νέα", "φεστιβάλ"],
		  photos: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8G9EKX3QgwXhapbxv6CA5dpnkEgGJnruDtQ&s"
		  ],
		  state: false
		},
		{
		  id: "6",
		  title: "Φωτογραφία και κινηματογράφος: Πώς συνδέονται;",
		  postedBy: "Eleni Vasileiou",
		  postTime: "2 weeks ago",
		  content: "Η σχέση μεταξύ φωτογραφίας και κινηματογράφου είναι βαθιά και αναπόσπαστη...",
		  tags: ["τέχνη", "προβολές"],
		  photos: [
			"https://thumbs.dreamstime.com/b/vertical-photo-collage-hand-hold-retro-camera-device-flash-cadre-photo-shoot-vintage-instant-paparazzi-isolated-painted-343589478.jpg"
		  ],
		  state: true
		},
		{
		  id: "7",
		  title: "okokoko",
		  postedBy: "John Doe",
		  postTime: "5 hours ago",
		  content: "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
		  tags: ["τέχνη", "προβολές", "νέα"],
		  photos: [
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png"
		  ],
		  state: true
		}
	  ]);
	  

  const movieStats = {
    imdbRating: "8.5/10",
    lbRating: "4.3/5",
    rtRating: "83%",
  };

  const singlePost = {
    id: "1",
    title:
      "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
    postedBy: "John Doe",
    postTime: "2 hours ago",
    content:
      "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
    tags: ["τέχνη", "nai"],
    photos:[
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
	  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png"
	  ],
  };

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/author/${samplePost.postedBy}`);
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Stats Section */}
      <div className="col-span-12 lg:col-span-2  flex flex-col p-4 rounded-lg items-center top-20">
        <MovieStats
          imdbRating={movieStats.imdbRating}
          lbRating={movieStats.lbRating}
          rtRating={movieStats.rtRating}
        />
      </div>

      {/* Main Content Section - Made Larger */}
      <div className="col-span-12 lg:col-span-7  lg:ml-16 mx-auto">
        {/* Article Header */}
        <div className="mb-8">
		<h1 className="sm:text-4xl text-2xl mb-4 border-b-4 border-red-900 break-words w-full sm:max-w-[750px] text-center sm:text-left">
			{samplePost.title}
		</h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleNavigateAuthor}
              className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {samplePost.postedBy}
            </button>
            <p className="text-xs text-gray-500">{samplePost.postTime}</p>
          </div>
        </div>

        {paragraphs.map((paragraph, index) => (
			<div key={index}>
			<p>{paragraph}</p>
			{samplePost.photos[index] && (
				<img className="rounded-lg my-2 w-full" src={samplePost.photos[index]} alt={`Image ${index + 1}`}  />
			)}
        </div>
      ))}

        <PostSuggested posts={posts} />
      </div>

 
      <div className="col-span-12 lg:col-span-3 space-y-6 flex flex-col rounded-lg top-20">
        <PinnedPost posts={[singlePost]} />
        <SocialMedia />
        <SoundtrackOfMonth />
        <TrailerOfWeek />
		<MovieSuggestions />
		<AuthorTeam />
      </div>
    </div>
  );
}
