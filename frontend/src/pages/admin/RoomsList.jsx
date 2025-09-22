
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`

function RoomsList() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.error("Error fetching rooms:", err));
  }, []);

  // Function to delete a room
  const handleDelete = (roomId) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      axios
        .delete(`http://localhost:5000/api/rooms/${roomId}`)
        .then((res) => {
          // Remove the deleted room from the state
          setRooms((prevRooms) => prevRooms.filter((room) => room._id !== roomId));
        })
        .catch((err) => console.error("Error deleting room:", err));
    }
  };

  // Function to navigate to room details page
  const handleViewDetails = (roomId) => {
    // Use navigate to go to the room details page (e.g., /room/:id)
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-warning">All Rooms</h2>

      <div className="row">
        {rooms.map((room) => (
          <div key={room._id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-light">
              {room.image && (
                <img
                  src={room.image}
                  className="card-img-top"
                  alt={room.type}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title text-info">
                  {room.type} - #{room.roomNumber}
                </h5>
                <p className="card-text">{room.description}</p>
                <p>
                  <strong>Price:</strong> ${room.price}/night
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Delete Button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(room._id)}
                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsList;
