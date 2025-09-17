import React from 'react'

function Card() {
  return (
    <>
      <div className="col-md-4">
        <div className="card h-100 border border-warning shadow-sm">
          <img
            src="/images/room-1.jpeg"
            className="card-img-top"
            alt="Deluxe Room"
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">Deluxe Room</h5>
            <p className="text-muted">
              A cozy and modern room with all essential facilities.
            </p>
            <h6 className="fw-bold text-warning">$120 / Night</h6>
            <a href="/booking" className="btn btn-warning mt-2">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card