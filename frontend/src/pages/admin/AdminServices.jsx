import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services")
      .then(res => setServices(res.data))
      .catch(err => console.error("Error fetching services:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛎 Services Management</h2>

      <div className="row">
        {services.map((service) => (
          <div key={service._id} className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <div className="display-6 mb-3">{service.icon}</div>
                <h5>{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {services.length === 0 && <p>No services available yet.</p>}
    </div>
  );
}

export default AdminServices;
