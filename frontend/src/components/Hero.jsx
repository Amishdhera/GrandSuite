import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Hero() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        console.log("Services Data:", res.data);
        setServices(res.data);
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);
  return (
    <>
      <header className="position-relative">
        {/*  Bootstrap Carousel */}
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="/images/room-1.jpeg"
                className="d-block w-100"
                style={{ height: "90vh", objectFit: "cover" }}
                alt="Luxury Hotel 1"
              />
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="/images/222.jpg"
                className="d-block w-100"
                style={{ height: "90vh", objectFit: "cover" }}
                alt="Luxury Hotel 2"
              />
            </div>
            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="/images/lawn.jpg"
                className="d-block w-100"
                style={{ height: "90vh", objectFit: "cover" }}
                alt="Luxury Hotel 3"
              />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/*  Overlay Content */}
        <div className="position-absolute top-50 start-50 translate-middle w-100 px-4">
          <div className="row align-items-center">

            {/* Left Side Text */}
            <div className="col-md-6 text-white">
              <h1 className="display-3 fw-bold">GrandSuite Luxury Hotel</h1>
              <p className="lead fs-4">
                Experience comfort, style & world-class services at GrandSuite.
              </p>

            </div>
            <Link to="/about" className="btn btn-warning btn-lg mt-3 w-50">
              Discover Now
            </Link>



          </div>
        </div>
      </header>

      <section className="container my-5">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>
      <div className="row g-4 text-center">
        {services.map((service) => (
          <div className="col-md-3" key={service._id}>
            <div className="card h-100 border-0 shadow-lg" style={{ backgroundColor: '#FFF8E1' }}>
              <div className="card-body">
                {/* Icon */}
                <i className={`${service.icon} display-4 text-warning`}></i>

                {/* Name */}
                <h5 className="mt-3">{service.name}</h5>

                {/* Description */}
                <p>{service.description}</p>

                {/* Price */}
                <p className="fw-bold">Price: Rs. {service.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


      {/* ✅ About Section */}
      <section className="container my-5 py-5">
        <div className="row align-items-center">

          {/* Left Side Content */}
          <div className="col-md-6">
            {/* <h6 className="text-uppercase text-warning fw-bold">About Us</h6> */}
            <h2 className="fw-bold mb-4">
              Intercontinental LA <br /> Westlake Hotel
            </h2>
            <p>
              GrandSuite is a leading online accommodation site. We’re passionate
              about travel. Every day, we inspire and reach millions of travelers
              across the world in multiple languages.
            </p>
            <p>
              So when it comes to booking the perfect hotel, vacation rental,
              resort, apartment, guest house, or tree house, we’ve got you covered.
            </p>
            <a href="/about" className="btn btn-outline-warning mt-3">
              Read More
            </a>
          </div>

          {/* Right Side Images */}
          <div className="col-md-6 d-flex gap-3">
            <img
              src="/images/details-2.jpeg"
              alt="Hotel View 1"
              className="img-fluid rounded shadow-sm"
              style={{ width: "50%" }}
            />
            <img
              src="/images/details-1.jpeg"
              alt="Hotel View 2"
              className="img-fluid rounded shadow-sm"
              style={{ width: "50%" }}
            />
          </div>

        </div>
      </section>

    </>
  );
}
