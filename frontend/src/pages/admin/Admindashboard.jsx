import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookingsTable from "./BookingsTable.jsx.jsx";
import AddRoom from "./AddRoom.jsx";
import RoomsList from "./RoomsList.jsx";
import UsersList from "./UsersList.jsx";
import AdminFeedbacks from "./Adminfeedbacks.jsx";

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("dashboard"); // ⬅️ active page track karega

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setUser(res.data.user || res.data);
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!user) {
    return <div className="container mt-5 text-center">Loading...</div>;
  }

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h3 className="text-warning">Admin Panel</h3>
        <ul className="nav flex-column mt-4">
          <li className="nav-item mb-2">
            <button
              onClick={() => setActivePage("Users")}
              className="btn btn-link nav-link text-white"
            >
              Check Services
            </button>
          </li>
       <li className="nav-item mb-2">
  <button
    onClick={() => setActivePage("users")}
    className="btn btn-link nav-link text-white"
  >
    Users
  </button>
</li>
          <li className="nav-item mb-2">
            <button
              onClick={() => setActivePage("bookings")}
              className="btn btn-link nav-link text-white"
            >
              Bookings
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              onClick={() => setActivePage("rooms")}
              className="btn btn-link nav-link text-white"
            >
              Room List
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              onClick={() => setActivePage("addRoom")}
              className="btn btn-link nav-link text-white"
            >
              Add Room
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              onClick={() => setActivePage("feedbacks")}
              className="btn btn-link nav-link text-white"
            >
              Feedbacks
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {activePage === "dashboard" && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>Dashboard</h2>
              <div>
                <span className="me-3 fw-bold text-primary">
                  {user.name} ({user.email})
                </span>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
            <p>Welcome back, {user.name} 👋</p>
          </>
        )}

        {activePage === "bookings" && <BookingsTable />}
        {activePage === "users" && <UsersList />}
        {activePage === "calendar" && <BookingsCalendar />}
        {activePage === "rooms" && <RoomsList />}
        {activePage === "addRoom" && <AddRoom />}
        {activePage === "feedbacks" && <AdminFeedbacks />}
      </div>
    </div>
  );
}

export default AdminDashboard;
