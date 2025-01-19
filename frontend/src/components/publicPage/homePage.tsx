import React, { useState } from "react";
import Carousel from "./Carousel";
import Post from "./Post";
import InstagramEmbed from "./InstagramEmbed";
import FacebookEmbed from "./FacebookEmbed";

export default function HomePage() {
  const [posts] = useState([
    {
      id: "1",
      title:
        "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
      postedBy: "John Doe",
      postTime: "2 hours ago",
      content:
        "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν νέο θεματικό άξονα «Πολιτισμικές μορφές της σεξουαλικότητας».Τις τελευταίες δεκαετίες κυριαρχεί στον δημόσιο διάλογο η πολυπολιτισμικότητα και οι διαφορετικές εκφάνσεις της  σεξουαλικότητας. Ψυχολογικές,...",
      tags: ["τέχνη", "nai"],
      photo:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
      comments: [
        { id: 1, text: "Nice post!", user: "Jane" },
        { id: 2, text: "I agree!", user: "Bob" },
      ],
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
      comments: [{ id: 1, text: "Great insights!", user: "Tom" }],
    },
  ]);

  return (
    <div>
      <h1 className="flex flex-row justify-center pt-5 mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-cyan-700">
          Raporto
        </span>
      </h1>
      <p className="flex flex-row justify-center text-lg font-normal lg:text-xl text-gray-500">
        cineraporto.gr
      </p>
      <Carousel />
      <div className="flex flex-wrap items-start justify-center lg:justify-between gap-4 p-4">
        <div className="flex flex-col gap-4">
          {/* Render posts dynamically */}
          {posts.map((data) => (
            <div key={data.id}>
              <Post
                id={data.id}
                title={data.title}
                name={data.postedBy}
                postTime={data.postTime}
                content={data.content}
                photo={data.photo}
                comments={[]}
                tags={data.tags}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          {/* Instagram Embed */}
          <div className="w-full max-w-md">
            <InstagramEmbed permalink="https://www.instagram.com/p/DDO9TXPMIbD/?utm_source=ig_embed&amp;utm_campaign=loading" />
          </div>

          {/* Facebook Embed */}
          <div className="w-full max-w-md">
            <FacebookEmbed
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcineraporto%2Fposts%2Fpfbid0izLVehqJ4yzsNu9wV77KQLRMaZY9tTf311bB3foMHfjgauJcaxWM2obd8EAkPFrwl&show_text=true&width=500"
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
