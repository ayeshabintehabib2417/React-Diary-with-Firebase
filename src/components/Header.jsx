import { Link } from "react-router-dom";
import logo from "D:/blog-app/src/assets/logo.png"; // Adjust path based on your folder structure

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-2 px-3" style={{ backgroundColor: "#283e50" }}>
      <Link to="/" className="d-flex align-items-center text-white m-0 text-decoration-none">
        <img src={logo} alt="Logo" style={{ height: "70px", marginRight: "10px" }} />
        My React Diary
      </Link>
      <Link to="/new" className="btn btn-light btn-sm">New Addition</Link>
    </div>
  );
}

export default Header;
