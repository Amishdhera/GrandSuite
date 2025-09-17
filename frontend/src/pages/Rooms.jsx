// import Card from "../components/Card";
// export default function Rooms() {
//   return (
//     <div>
//       {/* Top Banner */}
//       <div
//         className="text-white text-center d-flex align-items-center justify-content-center"
//         style={{
//           backgroundImage: "url('/images/room-1.jpeg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "25vh",
//         }}
//       >



//         {/* Rooms Section */}
//         <section className="container my-5">
//           <h1 className="display-5 fw-bold bg-dark bg-opacity-50 p-1 rounded">
//             Our Rooms
//           </h1>
//           <div className="row g-4">
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//             <Card />

//             {/* Deluxe Room */}
//             {/* <div className="col-md-4">
//               <div className="card h-100 border border-warning shadow-sm">
//                 <img
//                   src="/images/room-1.jpeg"
//                   className="card-img-top"
//                   alt="Deluxe Room"
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title fw-bold">Deluxe Room</h5>
//                   <p className="text-muted">
//                     A cozy and modern room with all essential facilities.
//                   </p>
//                   <h6 className="fw-bold text-warning">$120 / Night</h6>
//                   <a href="/book" className="btn btn-warning mt-2">
//                     Book Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//    */}
//             {/* Suite Room */}
//             {/* <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src="/images/room-3.jpeg"
//                   className="card-img-top"
//                   alt="Suite Room"
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title fw-bold">Suite Room</h5>
//                   <p className="text-muted">
//                     Spacious suite with living area and premium amenities.
//                   </p>
//                   <h6 className="fw-bold text-warning">$200 / Night</h6>
//                   <a href="/book" className="btn btn-warning mt-2">
//                     Book Now
//                   </a>
//                 </div>
//               </div>
//             </div> */}

//             {/* Luxury Room */}
//             {/* <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src="/images/room-4.jpeg"
//                   className="card-img-top"
//                   alt="Luxury Room"
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title fw-bold">Luxury Room</h5>
//                   <p className="text-muted">
//                     Ultimate luxury with king-size bed, balcony & premium services.
//                   </p>
//                   <h6 className="fw-bold text-warning">$300 / Night</h6>
//                   <a href="/book" className="btn btn-warning mt-2">
//                     Book Now
//                   </a>
//                 </div>
//               </div>
//             </div> */}

//             {/* Deluxe Room */}
//             {/* <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src="/images/room-8.jpeg"
//                   className="card-img-top"
//                   alt="Deluxe Room"
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title fw-bold">Deluxe Room</h5>
//                   <p className="text-muted">
//                     A cozy and modern room with all essential facilities.
//                   </p>
//                   <h6 className="fw-bold text-warning">$120 / Night</h6>
//                   <a href="/book" className="btn btn-warning mt-2">
//                     Book Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//    */}
//             {/* Suite Room */}
//             {/* <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src="/images/room-9.jpeg"
//                   className="card-img-top"
//                   alt="Suite Room"
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title fw-bold">Suite Room</h5>
//                   <p className="text-muted">
//                     Spacious suite with living area and premium amenities.
//                   </p>
//                   <h6 className="fw-bold text-warning">$200 / Night</h6>
//                   <a href="/book" className="btn btn-warning mt-2">
//                     Book Now
//                   </a>
//                 </div>
//               </div>
//             </div> */}

//             {/* Luxury Room */}
//             {/* <div className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src="/images/room-10.jpeg"
//                   className="card-img-top"
//                   alt="Luxury Room"
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title fw-bold">Luxury Room</h5>
//                   <p className="text-muted">
//                     Ultimate luxury with king-size bed, balcony & premium services.
//                   </p>
//                   <h6 className="fw-bold text-warning">$300 / Night</h6>
//                   <a href="/book" className="btn btn-warning mt-2">
//                     Book Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//    */}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Replace with your backend API endpoint
    axios.get("http://localhost:5000/api/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {rooms.map((room) => (
          <div className="col-md-4 mb-4" key={room._id}>
            <div className="card h-100 border border-warning shadow-sm">
              <img
                src={room.image} 
                className="card-img-top"
                alt={room.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{room.name}</h5>
                <p className="text-muted">{room.description}</p>
                <h6 className="fw-bold text-warning">${room.price} / Night</h6>
                <a href="/booking" className="btn btn-warning mt-2">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
