import React, { useState, useEffect } from "react";
import PostSuggested from "../PopularPosts";

export default function BecomeAuthor() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Small delay ensures DOM is fully loaded
  }, []);

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
  

  return (
    <div className="flex flex-col">
      <section className="w-full max-w-screen-xl mx-auto px-3  pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          Γίνε Συντάκτης
        </h2>

        <div className="flex flex-col">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/1UADE-4UFuZR6A-eseI3iQ70InVnTfEWaM1GUO4qVtqo/edit",
                "_blank"
              )
            }
            className="text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center"
          >
            📌 Βρείτε τη φόρμα εκδήλωσης ενδιαφέροντος εδώ
          </button>
        </div>
      </section>
      <div className="flex flex-col w-full flex-grow">
        <PostSuggested posts={posts} />
      </div>
    </div>
  );
}
