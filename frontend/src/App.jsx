
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Rooms from "./pages/Rooms";
import Team from "./pages/Team";
import About from "./pages/About";
import Login from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Admindashboard";
import AdminBookings from "./pages/admin/BookingsTable.jsx";
import AddRoom from "./pages/admin/AddRoom.jsx";
import RoomsList from "./pages/admin/RoomsList.jsx";
import Booking from "./pages/Booking.jsx";
import Feedback from "./pages/Feedback.jsx";
import AdminFeedbacks from "./pages/admin/Adminfeedbacks.jsx"





function Layout({ children }) {
  const location = useLocation();

  // Agar path "/admin" se start hota hai to Navbar/Footer mat dikhana
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Pages */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/add-room" element={<AddRoom />} />
          <Route path="/admin/rooms" element={<RoomsList />} />
          <Route path="/admin/feedbacks" element={<AdminFeedbacks />} />


          {/* ✅ Reception ke liye */}


        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
