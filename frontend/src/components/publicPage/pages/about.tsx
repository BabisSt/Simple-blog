import React, { useEffect, useState } from "react";
import PostSuggested from "../PopularPosts";
import { useNavigate } from "react-router-dom";
import { Author, PostProps } from "../../../interfaces";

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Small delay ensures DOM is fully loaded
  }, []);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();

        const formattedData: PostProps[] = data.map((post: PostProps) => ({
          id: post.id,
          title: post.title,
          postedBy: post.postedBy,
          postTime: post.postTime,
          content: post.content,
          photos: Array.isArray(post.photos) ? post.photos : [post.photos],
          tags:
            typeof post.tags === "string" ? post.tags.split(", ") : post.tags,
        }));
        setPosts(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

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
  const navigate = useNavigate();

  const handleNavigateAuthor = (authorName: string) => {
    navigate(`/author/${authorName}`);
  };

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
          <ul className="max-w-md space-y-1 list-none text-black">
            {authors.map((author) => (
              <li key={author.id}>
                <button
                  onClick={() => handleNavigateAuthor(author.name)}
                  className="w-full text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2"
                >
                  {author.name}
                </button>
              </li>
            ))}
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
