import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig"; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Firebase Firestore functions


const NewArticle = () => {
  const navigate = useNavigate(); 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Both title and content are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get a reference to the 'articles' collection in Firestore
      const articlesRef = collection(db, "articles");

      // Add the new article to Firestore
      await addDoc(articlesRef, {
        title,
        content,
        timestamp: new Date(),
      });

      // Reset the form after submission
      setTitle("");
      setContent("");

      // You can optionally redirect the user after submission, like:
      // navigate("/");

      alert("Article added successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error adding article:", err);
      setError("Error adding article, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <h2>Create New Article</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content:</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter article content"
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit Article"}
          </button>
        </div>
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default NewArticle;
