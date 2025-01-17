import React, {  useState } from "react";
import Post from "./Post";



export default function homePage() {


  // Sample posts array
  const [news] = useState([
    {
      id: '1',
      title: "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
      postedBy: "John Doe",
      postTime: "2 hours ago",
      content: "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν νέο θεματικό άξονα «Πολιτισμικές μορφές της σεξουαλικότητας».Τις τελευταίες δεκαετίες κυριαρχεί στον δημόσιο διάλογο η πολυπολιτισμικότητα και οι διαφορετικές εκφάνσεις της  σεξουαλικότητας. Ψυχολογικές,...",
	  tags: ["τέχνη","nai"],
      photo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
      comments: [
        { id: 1, text: "Nice post!", user: "Jane" },
        { id: 2, text: "I agree!", user: "Bob" },
      ],
    },
    {
      id: '2',
      title: "Post Title 2",
      postedBy: "Alice Smith",
      postTime: "1 day ago",
      content: "Another example of a post's content.",
	  tags: ["τέχνη","no"],
      photo: "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [
        { id: 1, text: "Great insights!", user: "Tom" },
      ],
    },
  ]);

  return (
    <div>

	<span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">Raporto News</span>



      <div className="items-center justify-center col-span-1 md:col-span-6 lg:col-start-5 lg:col-end-10 p-4 sm:m-4">

        {/* Render posts dynamically */}
        {news.map((data) => (
          <div key={data.id} className="mb-4">
            <Post
				id={data.id}
				title={data.title}
				name={data.postedBy}
				postTime={data.postTime}
				content={data.content}
				tags={data.tags}
				photo={data.photo}  comments={[]}  />
          </div>
        ))}
      </div>
    </div>
  );
}
