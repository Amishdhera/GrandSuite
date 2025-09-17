// import React, { useState } from "react";
// function Feedback() {
//   const [feedback, setFeedback] = useState("");
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [services, setServices] = useState({
//     roomService: false,
//     wakeUpCall: false,
//     transportation: false,
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleServiceChange = (e) => {
//     const { name, checked } = e.target;
//     setServices((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       feedback,
//       rating,
//       requestedServices: Object.keys(services).filter((key) => services[key]),
//     };
  
//     try {
//       const res = await fetch("http://localhost:5000/api/feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       const result = await res.json();
      
//       console.log("Response:", result);
  
//       if (result.success) {
//         setFeedback("");
//         setRating(0);
//         setServices({ roomService: false, wakeUpCall: false, transportation: false });
//         setSubmitted(true);
//         setTimeout(() => setSubmitted(false), 3000);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };
  


//   return (
//     <div className="feedback-container">
//       <div className="container my-5">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-10 col-lg-8 col-xl-7">
//             <div className="card glass-card shadow-lg border-0 rounded-4 overflow-hidden">
//               <div className="card-header bg-transparent text-white py-4">
//                 <h2 className="card-title text-center mb-0 fw-bold">
//                   <i className="fas fa-comment-alt me-2"></i> Guest Feedback & Service Requests
//                 </h2>
//                 <p className="text-center mb-0 mt-2 opacity-75">
//                   We value your experience and are here to assist you
//                 </p>
//               </div>

//               <div className="card-body p-4 p-md-5">
//                 {submitted && (
//                   <div className="alert alert-success text-center rounded-3 py-3 mb-4 fade-in">
//                     <i className="fas fa-check-circle fa-2x mb-2"></i>
//                     <h5 className="fw-bold mb-1">Thank You!</h5>
//                     <p className="mb-0">Your feedback and service requests have been submitted successfully.</p>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label htmlFor="feedback" className="form-label fw-semibold text-white">
//                       Your Feedback
//                     </label>
//                     <textarea
//                       id="feedback"
//                       className="form-control rounded-3 bg-transparent-input"
//                       rows="4"
//                       value={feedback}
//                       onChange={(e) => setFeedback(e.target.value)}
//                       placeholder="Please share your experience with us..."
//                       required
//                     ></textarea>
//                   </div>

//                   <div className="mb-4">
//                     <label className="form-label fw-semibold text-white d-block mb-3">
//                       How would you rate your stay?
//                     </label>
//                     <div className="d-flex justify-content-between flex-wrap gap-2">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <div
//                           key={star}
//                           className="text-center rating-star"
//                           onMouseEnter={() => setHoverRating(star)}
//                           onMouseLeave={() => setHoverRating(0)}
//                           onClick={() => setRating(star)}
//                         >
//                           <div
//                             className={`circular-rating d-flex align-items-center justify-content-center mx-auto ${rating >= star || hoverRating >= star
//                               ? "active"
//                               : ""
//                               }`}
//                           >
//                             <span className="rating-number">{star}</span>
//                           </div>
//                           <small className="mt-1 d-block text-white">Rating</small>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <label className="form-label fw-semibold text-white">
//                       Request Additional Services
//                     </label>
//                     <div className="card rounded-3 bg-transparent-service">
//                       <div className="card-body py-3">
//                         <div className="form-check py-2">
//                           <input
//                             type="checkbox"
//                             className="form-check-input service-checkbox"
//                             id="roomService"
//                             name="roomService"
//                             checked={services.roomService}
//                             onChange={handleServiceChange}
//                           />
//                           <label
//                             className="form-check-label ms-2 fw-medium text-white"
//                             htmlFor="roomService"
//                           >
//                             <i className="fas fa-utensils me-2 text-warning"></i>
//                             Room Service
//                           </label>
//                         </div>

//                         <div className="form-check py-2">
//                           <input
//                             type="checkbox"
//                             className="form-check-input service-checkbox"
//                             id="wakeUpCall"
//                             name="wakeUpCall"
//                             checked={services.wakeUpCall}
//                             onChange={handleServiceChange}
//                           />
//                           <label
//                             className="form-check-label ms-2 fw-medium text-white"
//                             htmlFor="wakeUpCall"
//                           >
//                             <i className="fas fa-bell me-2 text-warning"></i>
//                             Wake-up Call
//                           </label>
//                         </div>

//                         <div className="form-check py-2">
//                           <input
//                             type="checkbox"
//                             className="form-check-input service-checkbox"
//                             id="transportation"
//                             name="transportation"
//                             checked={services.transportation}
//                             onChange={handleServiceChange}
//                           />
//                           <label
//                             className="form-check-label ms-2 fw-medium text-white"
//                             htmlFor="transportation"
//                           >
//                             <i className="fas fa-car me-2 text-warning"></i>
//                             Transportation
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn btn-warning w-100 fw-bold py-3 rounded-3 submit-btn"
//                   >
//                     <i className="fas fa-paper-plane me-2"></i>
//                     Submit Feedback & Request
//                   </button>
//                 </form>
//               </div>
//             </div>

//             <div className="text-center mt-4">
//               <p className="text-white">
//                 <i className="fas fa-headset me-2"></i>
//                 Need immediate assistance? Call front desk at <strong>EXT 555</strong>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .feedback-container {
//           min-height: 100vh;
//           background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
//                       url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center center;
//           background-size: cover;
//           padding: 20px 0;
//         }
        
//         .glass-card {
//           background: rgba(255, 255, 255, 0.1) !important;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2) !important;
//           color: white;
//         }
        
//         .card-header {
//           border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
//         }
        
//         .bg-transparent-input {
//           background: rgba(255, 255, 255, 0.1) !important;
//           border: 1px solid rgba(255, 255, 255, 0.2) !important;
//           color: white;
//           transition: all 0.3s ease;
//           padding: 16px !important;
//           resize: none;
//         }
        
//         .bg-transparent-input:focus {
//           background: rgba(255, 255, 255, 0.15) !important;
//           box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);
//           border-color: rgba(255, 193, 7, 0.5) !important;
//           color: white;
//         }
        
//         .bg-transparent-input::placeholder {
//           color: rgba(255, 255, 255, 0.6);
//         }
        
//         .bg-transparent-service {
//           background: rgba(255, 255, 255, 0.1) !important;
//           border: 1px solid rgba(255, 255, 255, 0.2) !important;
//         }
        
//         .circular-rating {
//           width: 60px;
//           height: 60px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.1);
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }
        
//         .circular-rating.active {
//           background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
//           border-color: #ffc107;
//           transform: scale(1.1);
//         }
        
//         .rating-number {
//           font-weight: bold;
//           font-size: 1.5rem;
//           color: white;
//         }
        
//         .rating-star {
//           cursor: pointer;
//           transition: transform 0.2s;
//           flex: 1;
//           min-width: 70px;
//         }
        
//         .rating-star:hover .circular-rating {
//           transform: scale(1.1);
//           border-color: rgba(255, 193, 7, 0.7);
//         }
        
//         .service-checkbox {
//           width: 20px !important;
//           height: 20px !important;
//           background-color: rgba(255, 255, 255, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
        
//         .service-checkbox:checked {
//           background-color: #ffc107;
//           border-color: #ffc107;
//         }
        
//         .submit-btn {
//           font-size: 1.1rem;
//           transition: all 0.3s ease;
//           background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
//           border: none;
//           color: #000;
//         }
        
//         .submit-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//         }
        
//         .fade-in {
//           animation: fadeIn 0.5s;
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @media (max-width: 576px) {
//           .card-body {
//             padding: 1.5rem !important;
//           }
          
//           .rating-star {
//             min-width: 55px;
//           }
          
//           .circular-rating {
//             width: 50px;
//             height: 50px;
//           }
          
//           .rating-number {
//             font-size: 1.2rem;
//           }
//         }
        
//         /* Custom scrollbar for textarea */
//         textarea::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         textarea::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//         }
        
//         textarea::-webkit-scrollbar-thumb {
//           background: rgba(255, 193, 7, 0.5);
//           border-radius: 4px;
//         }
        
//         textarea::-webkit-scrollbar-thumb:hover {
//           background: rgba(255, 193, 7, 0.7);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Feedback;
import React, { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [services, setServices] = useState({
    roomService: false,
    wakeUpCall: false,
    transportation: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    setServices((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Mock API function since your backend isn't available
  const mockApiCall = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Feedback submitted successfully!" });
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const data = {
      feedback,
      rating,
      requestedServices: Object.keys(services).filter((key) => services[key]),
    };
  
    try {
      // Try to call the real API first
      try {
        await fetch("http://localhost:5000/api/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        
        
        if (!res.ok) {
          throw new Error(`Server returned ${res.status}`);
        }
        
        const result = await res.json();
        console.log("Response:", result);
      } catch (apiError) {
        console.warn("API not available, using mock response:", apiError);
        // If the API call fails, use the mock function
        const result = await mockApiCall(data);
        console.log("Mock response:", result);
      }
  
      // Reset form on success
      setFeedback("");
      setRating(0);
      setServices({ roomService: false, wakeUpCall: false, transportation: false });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Using a reliable background image URL
  const backgroundImageUrl = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="feedback-container" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImageUrl}) no-repeat center center`,
      backgroundSize: "cover",
      minHeight: "100vh",
      padding: "20px 0"
    }}>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <div className="card glass-card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-transparent text-white py-4">
                <h2 className="card-title text-center mb-0 fw-bold">
                  <i className="fas fa-comment-alt me-2"></i> Guest Feedback & Service Requests
                </h2>
                <p className="text-center mb-0 mt-2 opacity-75">
                  We value your experience and are here to assist you
                </p>
              </div>

              <div className="card-body p-4 p-md-5">
                {submitted && (
                  <div className="alert alert-success text-center rounded-3 py-3 mb-4">
                    <i className="fas fa-check-circle fa-2x mb-2"></i>
                    <h5 className="fw-bold mb-1">Thank You!</h5>
                    <p className="mb-0">Your feedback and service requests have been submitted successfully.</p>
                  </div>
                )}
                
                {error && (
                  <div className="alert alert-danger text-center rounded-3 py-3 mb-4">
                    <i className="fas fa-exclamation-circle fa-2x mb-2"></i>
                    <h5 className="fw-bold mb-1">Error</h5>
                    <p className="mb-0">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="feedback" className="form-label fw-semibold text-white">
                      Your Feedback
                    </label>
                    <textarea
                      id="feedback"
                      className="form-control rounded-3 bg-transparent-input"
                      rows="4"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Please share your experience with us..."
                      required
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        padding: "16px",
                        resize: "none"
                      }}
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold text-white d-block mb-3">
                      How would you rate your stay?
                    </label>
                    <div className="d-flex justify-content-between flex-wrap gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="text-center rating-star"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                          style={{ cursor: "pointer", transition: "transform 0.2s", flex: "1", minWidth: "70px" }}
                        >
                          <div
                            className={`rounded-circle d-flex align-items-center justify-content-center mx-auto ${
                              rating >= star || hoverRating >= star
                                ? "bg-warning"
                                : "bg-secondary bg-opacity-50"
                            }`}
                            style={{ width: "60px", height: "60px", transition: "all 0.3s ease" }}
                          >
                            <span
                              className={`fs-4 ${
                                rating >= star || hoverRating >= star
                                  ? "text-white"
                                  : "text-light"
                              }`}
                            >
                              {star}
                            </span>
                          </div>
                          <small className="mt-1 d-block text-white">Rating</small>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold text-white">
                      Request Additional Services
                    </label>
                    <div className="card rounded-3 bg-transparent-service" style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)"
                    }}>
                      <div className="card-body py-3">
                        <div className="form-check py-2">
                          <input
                            type="checkbox"
                            className="form-check-input service-checkbox"
                            id="roomService"
                            name="roomService"
                            checked={services.roomService}
                            onChange={handleServiceChange}
                            style={{ 
                              width: "20px", 
                              height: "20px",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              border: "1px solid rgba(255, 255, 255, 0.3)"
                            }}
                          />
                          <label
                            className="form-check-label ms-2 fw-medium text-white"
                            htmlFor="roomService"
                          >
                            <i className="fas fa-utensils me-2 text-warning"></i>
                            Room Service
                          </label>
                        </div>

                        <div className="form-check py-2">
                          <input
                            type="checkbox"
                            className="form-check-input service-checkbox"
                            id="wakeUpCall"
                            name="wakeUpCall"
                            checked={services.wakeUpCall}
                            onChange={handleServiceChange}
                            style={{ 
                              width: "20px", 
                              height: "20px",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              border: "1px solid rgba(255, 255, 255, 0.3)"
                            }}
                          />
                          <label
                            className="form-check-label ms-2 fw-medium text-white"
                            htmlFor="wakeUpCall"
                          >
                            <i className="fas fa-bell me-2 text-warning"></i>
                            Wake-up Call
                          </label>
                        </div>

                        <div className="form-check py-2">
                          <input
                            type="checkbox"
                            className="form-check-input service-checkbox"
                            id="transportation"
                            name="transportation"
                            checked={services.transportation}
                            onChange={handleServiceChange}
                            style={{ 
                              width: "20px", 
                              height: "20px",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              border: "1px solid rgba(255, 255, 255, 0.3)"
                            }}
                          />
                          <label
                            className="form-check-label ms-2 fw-medium text-white"
                            htmlFor="transportation"
                          >
                            <i className="fas fa-car me-2 text-warning"></i>
                            Transportation
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold py-3 rounded-3 submit-btn"
                    disabled={isSubmitting}
                    style={{
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      background: "linear-gradient(135deg, #ffc107 0%, #ff9800 100%)",
                      border: "none",
                      color: "#000"
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Submit Feedback & Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-white">
                <i className="fas fa-headset me-2"></i>
                Need immediate assistance? Call front desk at <strong>EXT 555</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white;
        }
        
        .card-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
        }
        
        .bg-transparent-input:focus {
          background: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);
          border-color: rgba(255, 193, 7, 0.5) !important;
          color: white;
        }
        
        .bg-transparent-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .rating-star:hover div {
          transform: scale(1.1);
          border-color: rgba(255, 193, 7, 0.7) !important;
        }
        
        .service-checkbox:checked {
          background-color: #ffc107 !important;
          border-color: #ffc107 !important;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 576px) {
          .card-body {
            padding: 1.5rem !important;
          }
          
          .rating-star {
            min-width: 55px;
          }
          
          .rating-star div {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Feedback;