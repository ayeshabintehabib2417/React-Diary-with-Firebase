import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "articles"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setArticles(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Notes</h2>
        {articles.map(({ id, title, imageUrl, timestamp }) => (
          <Link to={`/blogs/${id}`} key={id} className="block mb-4 text-decoration-none">
            <div className="border p-4 rounded shadow hover:bg-gray-50">
              {imageUrl && <img src={imageUrl} alt="Blog Cover" className="mb-2 max-h-35 object-cover" />}
              <h3 className="text-lg font-semibold text-decoration-underline">{title}</h3>
              <p className="text-sm text-gray-500 text-decoration-none"style={{ color: "black" }} >
                {timestamp?.toDate().toLocaleDateString()}
              </p>
            </div>
          </Link>
      ))}
    </div>
  );
};

export default BlogList;