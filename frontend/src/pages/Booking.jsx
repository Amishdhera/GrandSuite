
import React, { useState } from "react";
import axios from "axios";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("Booking Confirmed!");
      setFormData({
        fullName: "",
        email: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        guests: "",
        specialRequests: "",
      });
    } catch (error) {
      alert("Error saving booking!");
    }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/images/room-1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="card border-0 shadow-lg text-white"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
            >
              <div className="card-body p-4">
                <h2 className="fw-bold text-center mb-4 text-warning">Booking Form</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Check-in Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      className="form-control"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      className="form-control"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Room Type</label>
                    <select
                      className="form-select"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="Deluxe">Deluxe</option>
                      <option value="Suite">Suite</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Guests</label>
                    <input
                      type="number"
                      name="guests"
                      className="form-control"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      className="form-control"
                      rows="3"
                      value={formData.specialRequests}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-warning btn-lg ">
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
