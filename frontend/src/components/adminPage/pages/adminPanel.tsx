import React, { useState } from "react";
import Article from "./article";
import { useNavigate } from "react-router-dom";
import { ArticleProps } from "../../../App";

export default function AdminPanel() {
	const [posts] = useState([
		{
		  id: "1",
		  title:
			"Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
		  postedBy: "John Doe",
		  postTime: "2 hours ago",
		  content:
			"Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
		  tags: ["art", "screenings"],
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
		  tags: ["news", "reviews"],
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
		  tags: ["festival", "screenings", "reviews"],
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
		  content:
			"Από blockbuster μέχρι ανεξάρτητες παραγωγές, αυτές είναι οι ταινίες που άφησαν το στίγμα τους...",
		  tags: ["reviews", "news"],
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
		  tags: ["news", "festival"],
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
		  content:
			"Η σχέση μεταξύ φωτογραφίας και κινηματογράφου είναι βαθιά και αναπόσπαστη...",
		  tags: ["art", "screenings"],
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
		  content:
			"Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
		  tags: ["art", "screenings", "news"],
		  photos: [
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png"
		  ],
		  state: true
		},
	  ]);
	  

  const navigate = useNavigate();

  const handleNavigateArticle = (id: string) => {
	const article = posts.find((post) => post.id === id);
	if (article) {
	  navigate(`/adminPanel/article/${id}`, { state: { article } }); // Pass the article data as state
	}
  };
  

  const AddArticle = () => {
	let lastIndex;
	if (posts.length !== 0) {
	  const length = posts.length;
	  lastIndex = parseInt(posts[length - 1].id) + 1;
	} else lastIndex = 1;
  
	const emptyArticle: ArticleProps = {
	  id: lastIndex.toString(),
	  title: "",
	  postedBy: "",
	  postTime: "",
	  content: "",
	  photos: [],
	  tags: [],
	  state: false,
	};
  
	// Navigate to the editor without article data
	navigate(`/adminPanel/article/${emptyArticle.id}`, { state: { article: emptyArticle } });
  };
  

  return (
    <section className="relative min-h-screen flex flex-col bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <button className="mt-4 w-full bg-indigo-500 text-white text-xl font-bold py-2 rounded-lg hover:bg-indigo-600 transition" type="button" onClick={AddArticle}>Νέα Ανάρτηση</button>

          <div className="">
            <div className="-my-6">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {posts.map((data) => (
                  <div key={data.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigateArticle(data.id)}
                      className="block w-full text-left bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg hover:bg-gray-50 transition"
                    >
                      <Article
                        id={data.id}
                        title={data.title}
                        postedBy={data.postedBy}
                        postTime={data.postTime}
                        content={data.content}
                        photos={data.photos}
                        tags={data.tags}
                        state={data.state}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
