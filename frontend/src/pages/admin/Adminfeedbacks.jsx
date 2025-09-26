// import React, { useEffect, useState } from "react";

// function AdminFeedbacks() {
//   const [feedbacks, setFeedbacks] = useState([]);

//   // Fetch feedbacks
//   const fetchFeedbacks = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/feedback");
//       const data = await res.json();
//       setFeedbacks(data.feedbacks || []); // 👈 yaha fix kiya
//     } catch (err) {
//       console.error("Error fetching feedbacks:", err);
//     }
//   };

//   // Delete feedback
//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/feedback/${id}`, {
//         method: "DELETE",
//       });
//       setFeedbacks((prev) => prev.filter((f) => f._id !== id));
//     } catch (err) {
//       console.error("Error deleting feedback:", err);
//     }
//   };

//   useEffect(() => {
//     fetchFeedbacks();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="mb-3">All Feedbacks</h2>
//       {feedbacks.length === 0 ? (
//         <p>No feedbacks yet.</p>
//       ) : (
//         <ul className="list-group">
//           {feedbacks.map((f) => (
//             <li
//               key={f._id}
//               className="list-group-item d-flex justify-content-between align-items-center"
//             >
//               <div>
//                 <strong>{f.feedback}</strong> (⭐ {f.rating})
//                 <br />
//                 <small>{f.requestedServices?.join(", ")}</small>
//               </div>
//               <button
//                 onClick={() => handleDelete(f._id)}
//                 className="btn btn-danger btn-sm"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default AdminFeedbacks;

import React, { useEffect, useState } from "react";

function AdminFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedbacks
  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/feedback"); // ✅ fixed
      
      const data = await res.json();
      setFeedbacks(data.feedbacks || []); 
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  // Delete feedback
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/feedbacks/${id}`, { // ✅ fixed
        method: "DELETE",
      });
      setFeedbacks((prev) => prev.filter((f) => f._id !== id));
    } catch (err) {
      console.error("Error deleting feedback:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-3">All Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
      ) : (
        <ul className="list-group">
          {feedbacks.map((f) => (
            <li
              key={f._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{f.feedback}</strong> (⭐ {f.rating})
                <br />
                <small>{f.requestedServices?.join(", ")}</small>
              </div>
              <button
                onClick={() => handleDelete(f._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminFeedbacks;
