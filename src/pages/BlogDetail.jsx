import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Image */}
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt="Blog"
          className="mb-6 w-full max-h-96 object-cover rounded-lg shadow-lg"
        />
      )}
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
        {article.title}
      </h1>

      {/* Content */}
      <div className="max-w-3xl text-lg text-gray-700 space-y-4">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
