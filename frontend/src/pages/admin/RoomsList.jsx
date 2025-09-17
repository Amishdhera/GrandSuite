import React, { useEffect, useState } from "react";
import axios from "axios";

function RoomsList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/rooms")
      .then(res => setRooms(res.data))
      .catch(err => console.error("Error fetching rooms:", err));
  }, []);

  
  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Rooms</h2>
      
      <div className="row">
        {rooms.map(room => (
          <div key={room._id} className="col-md-4 mb-4">
            <div className="card shadow">
              {room.image && (
                <img src={room.image} className="card-img-top" alt={room.type} />
              )}
              <div className="card-body">
                <h5 className="card-title">{room.type} - #{room.roomNumber}</h5>
                <p className="card-text">{room.description}</p>
                <p><strong>Price:</strong> ${room.price}/night</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsList;