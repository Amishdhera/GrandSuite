// src/pages/About.js
export default function About() {
  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-warning fw-bold">About Us</h6>
        <h1 className="fw-bold">Welcome to GrandSuite Luxury Hotel</h1>
        <p className="text-muted">
          Experience comfort, style & world-class hospitality in the heart of the city.
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="fw-bold">Our Story</h2>
          <p>
            GrandSuite is a leading luxury hotel dedicated to offering top-class
            hospitality. Since our establishment, we’ve welcomed thousands of
            guests and provided them with an unforgettable stay.
          </p>
          <p>
            From elegant rooms and fine dining to personalized services, we
            ensure every guest feels special. Whether you’re here for business,
            leisure, or family vacations, GrandSuite is your perfect destination.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/images\about1.jpeg"
            alt="Hotel"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
