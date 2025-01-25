import React, { useState } from "react";
import Article from "./article";

export default function AdminPanel() {
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
      state: false,
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
      state: true,
    },
  ]);

  return (
    <section className="relative min-h-screen flex flex-col  bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div className="">
            <div className="-my-6">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {posts.map((data) => (
                  <div key={data.id}>
                    <Article
                      id={data.id}
                      title={data.title}
                      name={data.postedBy}
                      postTime={data.postTime}
                      content={data.content}
                      photo={data.photo}
                      tags={data.tags}
                      state={data.state}
                    />
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
