import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRoom() {
  const [room, setRoom] = useState({
    roomNumber: "",
    type: "Deluxe", // default
    price: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  // ✅ Image ko Base64 me convert karna
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRoom({ ...room, image: reader.result }); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/rooms", room);
      alert("Room added successfully ✅");
      navigate("/admin/rooms");
    } catch (err) {
      console.error("Error adding room:", err);
      alert("Failed to add room ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Room</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Room Number</label>
          <input
            type="text"
            className="form-control"
            name="roomNumber"
            value={room.roomNumber}
            onChange={handleChange}
            placeholder="Enter room number"
            required
          />
        </div>

        {/* ✅ Room Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Room Type</label>
          <select
            className="form-control"
            name="type"
            value={room.type}
            onChange={handleChange}
            required
          >
            <option value="Deluxe">Deluxe</option>
            <option value="Economics">Economics</option>
            <option value="Standard">Standard</option>
            <option value="suite">suite</option>
            <option value="luxury">luxury</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Price (per night)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={room.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={room.description}
            onChange={handleChange}
            placeholder="Enter room details"
            rows="3"
          ></textarea>
        </div>

        {/*  Image Upload */}
        <div className="mb-3">
          <label className="form-label">Room Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          {room.image && (
            <img
              src={room.image}
              alt="preview"
              className="mt-3"
              style={{ width: "150px", borderRadius: "8px" }}
            />
          )}
        </div>

        <button type="submit" className="btn btn-warning">
          Add Room
        </button>
      </form>
    </div>
  );
}

export default AddRoom;
