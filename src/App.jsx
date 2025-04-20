// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import NewArticle from "./pages/NewArticle";
import Login from "./Login";
import { useAuth } from "./services/authService";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const user = useAuth();

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <Header />
          <div style={{ display: "flex", flex: 1 }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "1rem" }}>
              <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="/new" element={<NewArticle />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
