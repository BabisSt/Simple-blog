import React, { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setError(""); 
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    setError("");
  };

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setError("Παρακαλώ συμπληρώστε όλα τα πεδία πριν την αποστολή.");
      return;
    }


    console.log("Message sent:", { name, email, message });
    setError(""); 
  };

  return (
    <div className="relative">
      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
      <div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
        <h3 className="text-lg font-bold mb-2">📢 Επικοινωνία</h3>
        <form onSubmit={handleSendMessage}>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 mb-1">
                Όνομα
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleNameChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
              Μήνυμα
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          
          {error && (
            <div className="mb-4 text-red-600 text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="mt-4 text-white bg-gradient-to-r from-gray-900 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 transition-transform transform active:scale-95"
          >
            Αποστολή
          </button>
        </form>
      </div>
    </div>
  );
}
