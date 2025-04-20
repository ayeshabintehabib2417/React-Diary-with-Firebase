import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
    <div className="p-4 border-l bg-gray-800 shadow-inner min-h-screen"style={{ backgroundColor: "#9ad0c3", minHeight: "100vh" }}>
      <h3 className="font-semibold mb-3 text-gray-700 border-b pb-2">Recent Notes</h3>
        <ul className="space-y-2">
          {articles.slice(0, 5).map(({ id, title }) => (
            <li key={id}>
              <Link to={`/blogs/${id}`} className="text-blue-900 hover:underline text-decoration-none" style={{ color: "black", minHeight: "100vh"}}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
    </div>

  );
};

export default Sidebar;
