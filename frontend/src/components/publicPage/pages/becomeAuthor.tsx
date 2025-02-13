import React, { useState } from "react";
import PostSuggested from "../PopularPosts";

export default function BecomeAuthor() {
  const [posts] = useState([
    {
      id: "1",
      title:
        "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
      postedBy: "John Doe",
      postTime: "2 hours ago",
      content:
        "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
      tags: ["τέχνη", "nai"],
      photo:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
    },
    {
      id: "2",
      title: "Post Title 2",
      postedBy: "Alice Smith",
      postTime: "1 day ago",
      content: "Another example of a post's content.",
      tags: ["νέα", "oxi"],
      photo:
        "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      title: "Φεστιβάλ Κινηματογράφου Θεσσαλονίκης: Όλα όσα πρέπει να ξέρετε",
      postedBy: "Maria Papadopoulou",
      postTime: "3 days ago",
      content:
        "Το φεστιβάλ επιστρέφει δυναμικά φέτος με πολλές νέες προβολές...",
      tags: ["φεστιβάλ", "ταινίες"],
      photo:
        "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/36142/article_full%403x.jpg",
    },
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
