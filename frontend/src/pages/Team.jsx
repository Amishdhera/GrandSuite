// import React from "react";

// function Team() {
//   return (
//     <div className="bg-light">
//       {/* Banner */}
//       <div
//         className="text-white text-center d-flex align-items-center justify-content-center"
//         style={{
//           backgroundImage: "url('/images/office.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "40vh",
//         }}
//       >
//         <h1 className="display-4 fw-bold bg-dark bg-opacity-50 p-3 rounded">
//           Meet Our Team
//         </h1>
//       </div>

//       {/* Team Members */}
//       <section className="container my-5">
//         <div className="row g-4">
//           <div className="col-md-3 text-center">
//             <img
//               src="/images/ashir.webp"
//               alt="Aashir Khan"
//               className="rounded-circle mb-3 shadow"
//               width="150"
//               height="150"
//             />
//             <h5 className="fw-bold">Aashir Khan</h5>
//             <p className="text-muted">Manager</p>
//           </div>

//           <div className="col-md-3 text-center">
//             <img
//               src="/images/wahab khan.jpg"
//               alt="Wahab Khan"
//               className="rounded-circle mb-3 shadow"
//               width="150"
//               height="150"
//             />
//             <h5 className="fw-bold">Wahab Khan</h5>
//             <p className="text-muted">Receptionist</p>
//           </div>

//           <div className="col-md-3 text-center">
//             <img
//               src="/images/Ali.jpg"
//               alt="Ali Muhammad"
//               className="rounded-circle mb-3 shadow"
//               width="150"
//               height="150"
//             />
//             <h5 className="fw-bold">Ali Muhammad</h5>
//             <p className="text-muted">Admin</p>
//           </div>

//           <div className="col-md-3 text-center">
//             <img
//               src="/images/ameet (1).png"
//               alt="Ameet Kumar"
//               className="rounded-circle mb-3 shadow"
//               width="150"
//               height="150"
//             />
//             <h5 className="fw-bold">Ameet Kumar Dhera</h5>
//             <p className="text-muted">Owner</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Team;
import React from "react";

function Team() {
  return (
    <div className="bg-light">
      {/* Banner with Team Members */}
      <div
        className="text-white text-center d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/office.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          position: "relative",
        }}
      >
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>

        <div className="position-relative container">
          <h1 className="display-4 fw-bold mb-5">Meet Our Team</h1>

          <div className="row g-4 justify-content-center">
            <div className="col-md-3 text-center">
              <img
                src="/images/ashir.webp"
                alt="Aashir Khan"
                className="rounded-circle mb-3 shadow border border-3 border-white"
                width="150"
                height="150"
              />
              <h5 className="fw-bold">Aashir Khan</h5>
              <p className="text-light">Manager</p>
            </div>

            <div className="col-md-3 text-center">
              <img
                src="/images/wahab khan.jpg"
                alt="Wahab Khan"
                className="rounded-circle mb-3 shadow border border-3 border-white"
                width="150"
                height="150"
              />
              <h5 className="fw-bold">Wahab Khan</h5>
              <p className="text-light">Receptionist</p>
            </div>

            <div className="col-md-3 text-center">
              <img
                src="/images/Ali.jpg"
                alt="Ali Muhammad"
                className="rounded-circle mb-3 shadow border border-3 border-white"
                width="150"
                height="150"
              />
              <h5 className="fw-bold">Ali Muhammad</h5>
              <p className="text-light">Admin</p>
            </div>

            <div className="col-md-3 text-center">
              <img
                src="/images/ameet (1).png"
                alt="Ameet Kumar"
                className="rounded-circle mb-3 shadow border border-3 border-white"
                width="150"
                height="150"
              />
              <h5 className="fw-bold">Ameet Kumar Dhera</h5>
              <p className="text-light">Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
