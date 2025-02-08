import React, { useState } from "react";
import PostSuggested from "../PopularPosts";

export default function About() {
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
      {/* About Us Section */}
      <section className="w-full max-w-screen-xl mx-auto px-3 pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          About Us
        </h2>

        <p className="text-lg text-gray-700 text-justify leading-relaxed">
          Το <strong>Ραπόρτο</strong> είναι ένα συλλογικό site που δημιουργήθηκε
          το Μάρτιο του 2021 από τους <strong>Γιώργο Τσιβάκη</strong> και{" "}
          <strong>Μπάμπη Στεβή</strong>. Σκοπός του{" "}
          <strong>Ραπόρτο team</strong> είναι να μοιραστούμε μαζί σας την αγάπη
          μας για το σινεμά, αλλά και για τον ευρύτερο χώρο της τέχνης, χωρίς
          νόρμες και περιορισμούς.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6">
          Update - Τρία χρόνια Ραπόρτο !
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed">
          22 Μαρτίου 2021, μέσα στην καρδιά του lockdown μετά από έναν μήνα
          προγραμματισμών, το <strong>Ραπόρτο</strong> άνοιξε τις πόρτες του σ΄
          εσάς. Από τότε μέχρι και σήμερα μετρά <strong>1900 άρθρα</strong>, από{" "}
          <strong>25 διαφορετικούς συντάκτες</strong>. Ξεκινώντας από blog,
          αναβαθμίστηκε σε site έχοντας βρει πλέον σε μεγάλο βαθμό την ταυτότητα
          του και στοχεύοντας ξεκάθαρα στο μέλλον.
        </p>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-screen-xl mx-auto px-3 mt-10">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Η Ομάδα Μας
        </h3>

        <div className="text-lg text-gray-700">
          <p>
            <strong>Αρχισυντάκτης:</strong> Τσιβάκης Γιώργος
          </p>

          <p className="mt-4">
            <strong>Συντακτική ομάδα:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Γιαννάκη Άννα Μαρία</li>
            <li>Γεωργιάδου Βίκη</li>
            <li>Κιμπουροπούλου Βιργινία</li>
            <li>Μήρτσιου Αριάδνη</li>
            <li>Παπαμάνου Ελένη</li>
            <li>Σαβουλίδη Δέσποινα</li>
            <li>Σκούμπη Χρυσαυγή</li>
            <li>Στεβής Μπάμπης</li>
            <li>Χατζόπουλος Γιάννης</li>
          </ul>

          <p className="mt-4">
            <strong>Τεχνική υποστήριξη - Συντονισμός:</strong> Στεβής Μπάμπης
          </p>

          <p className="mt-4">
            <strong>Social Media:</strong> Τσιβάκης Γιώργος - Γεωργιάδου Βίκη
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-screen-xl mx-auto px-3 mt-10">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Επικοινωνία
        </h3>
        <p className="text-lg text-gray-700 text-center">
          📧 Email:{" "}
          <a
            href="mailto:raportoproject@gmail.com"
            className="text-red-600 hover:underline"
          >
            raportoproject@gmail.com
          </a>
        </p>

        <p className="text-lg text-gray-700 text-center mt-4">
          📢 Ακολουθήστε μας σε{" "}
          <a
            href="https://www.facebook.com/cineraporto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            Facebook
          </a>{" "}
          &{" "}
          <a
            href="https://www.instagram.com/cineraporto/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            Instagram
          </a>{" "}
          για να μένετε διαρκώς ενημερωμένοι!
        </p>
      </section>

      {/* Popular Posts */}
      <div className="flex flex-col w-full flex-grow mt-10">
        <PostSuggested posts={posts} />
      </div>
    </div>
  );
}
