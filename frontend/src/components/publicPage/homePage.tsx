import React, { useState } from "react";
import Carousel from "./Carousel";
import Post from "./Post";
import PinnedPost from "./PinnedPost";

export default function HomePage() {
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
    {
      id: "4",
      title: "Οι πιο πολυσυζητημένες ταινίες της χρονιάς",
      postedBy: "George Katsaros",
      postTime: "5 days ago",
      content:
        "Από blockbuster μέχρι ανεξάρτητες παραγωγές, αυτές είναι οι ταινίες που άφησαν το στίγμα τους...",
      tags: ["κριτικές", "ταινίες"],
      photo:
        "https://helpdeskgeek.com/wp-content/pictures/2022/05/review-google.jpg",
    },
    {
      id: "5",
      title: "Τα τελευταία νέα από τον κόσμο του κινηματογράφου",
      postedBy: "Nikos Ioannidis",
      postTime: "1 week ago",
      content:
        "Οι πιο φρέσκες ειδήσεις και ανακοινώσεις για τις νέες ταινίες...",
      tags: ["νέα", "ταινίες"],
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8G9EKX3QgwXhapbxv6CA5dpnkEgGJnruDtQ&s",
    },
    {
      id: "6",
      title: "Φωτογραφία και κινηματογράφος: Πώς συνδέονται;",
      postedBy: "Eleni Vasileiou",
      postTime: "2 weeks ago",
      content:
        "Η σχέση μεταξύ φωτογραφίας και κινηματογράφου είναι βαθιά και αναπόσπαστη...",
      tags: ["φωτογραφία", "ταινίες"],
      photo:
        "https://thumbs.dreamstime.com/b/vertical-photo-collage-hand-hold-retro-camera-device-flash-cadre-photo-shoot-vintage-instant-paparazzi-isolated-painted-343589478.jpg",
    },
  ]);

  const [visiblePosts, setVisiblePosts] = useState(5); // Initially showing 5 posts

  const handleShowMore = () => {
    setVisiblePosts((prev) => prev + 5); // Show 5 more posts when clicked
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center pb-4">
        <img
          className="w-auto h-auto "
          src="/raportoLogo.png"
          alt="Raporto Logo"
        />
      </div>

      <Carousel posts={posts} />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
        {/* Posts Section */}
        <div className="flex flex-col gap-6 flex-grow">
          {posts.slice(0, visiblePosts).map((data) => (
            <div key={data.id}>
              <Post
                id={data.id}
                title={data.title}
                name={data.postedBy}
                postTime={data.postTime}
                content={data.content}
                photo={data.photo}
                tags={data.tags}
              />
            </div>
          ))}
        </div>
		<div className="flex flex-col p-4">
		<PinnedPost posts={posts} />
		</div>
      </div>

      {visiblePosts < posts.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="text-gray-900 font-bold hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center mb-4"
          >
            Περισσότερα άρθρα
          </button>
        </div>
      )}
    </div>
  );
}
