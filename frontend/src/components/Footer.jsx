import { useState } from "react";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/updates", { email });
      setMessage(res.data.message);
      setEmail("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Left Side - Logo + About + Social */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold text-warning">GrandSuite.</h3>
            <p>We inspire and reach millions of travelers across the world.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.youtube.com/shorts/VM15_b50Ye0" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
              <a href="https://www.youtube.com/shorts/VM15_b50Ye0" className="text-white fs-4"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/*  Middle - Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning">Contact Us</h5>
            <p className="mb-1"><i className="bi bi-telephone me-2"></i> (92) 345 67890</p>
            <p className="mb-1"><i className="bi bi-envelope me-2"></i> grandsuite@gmail.com</p>
            <p><i className="bi bi-geo-alt me-2"></i> 123 Grand Avenue, Karachi, Pakistan</p>
          </div>

          {/*  Right - Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning">Latest Updates</h5>
            <p>Get the latest updates and offers.</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-warning" onClick={handleSubscribe}>
                <i className="bi bi-send"></i>
              </button>
            </div>
            {message && <p className="mt-2 small text-warning">{message}</p>}
          </div>
        </div>

        {/*  Bottom Footer Line */}
        <div className="text-center border-top border-secondary pt-3 mt-3">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} GrandSuite Hotel. All rights reserved.
          </p>
          <small>
            Developed with ❤️ by{" "}
            <span className="text-warning fw-bold">
              Ameet Kumar Dhera, Aashir Abbasi, Wahab Khan Naizi, Ali Muhammad
            </span>
          </small>
        </div>
      </div>
    </footer>
  );
}
