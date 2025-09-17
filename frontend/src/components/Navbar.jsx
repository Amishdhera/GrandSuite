
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => setUser(res.data.user))
        .catch(() => setUser(null));
    } else {
      setUser(null);
    }
  }, [location]); 

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-warning" to="/">
          GrandSuite
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase fw-semibold">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/rooms">Rooms</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/booking">Booking</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/feedback">Feedback</Link></li>

         {user && (
  <>
    {/* ✅ User ka name show */}
    <li className="nav-item">
      <span className="nav-link text-warning fw-bold">
        {user.name}
      </span>
    </li>

    {/* ✅ Logout button */}
    <li className="nav-item">
      <button
        className="btn btn-danger ms-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </li>
  </>
)}

          </ul>
        </div>
      </div>
    </nav>
  );
}
