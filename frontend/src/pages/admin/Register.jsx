import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email.';
    if (!formData.password) newErrors.password = 'Password is required.';
    else if (formData.password.length < 8) newErrors.password = 'At least 8 characters.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password
      });

      if (res.data.success) {
        alert('Registration successful!');
        navigate('/login');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setErrors({ submit: error.response.data.message });
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: 'url("/your-hotel-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        className="p-4 rounded"
        style={{
          maxWidth: '450px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff'
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold text-white">GrandSuite Hotel</h3>
          <p className="text-light mb-1">Guest Registration</p>
          <small className="text-light">Create your account to manage your stay</small>
        </div>

        {errors.submit && (
          <div className="alert alert-danger small">{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                name="firstName"
                className={`form-control bg-transparent text-white border-white ${
                  errors.firstName && 'is-invalid'
                }`}
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="col">
              <input
                type="text"
                name="lastName"
                className={`form-control bg-transparent text-white border-white ${
                  errors.lastName && 'is-invalid'
                }`}
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className={`form-control bg-transparent text-white border-white ${
                errors.email && 'is-invalid'
              }`}
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className={`form-control bg-transparent text-white border-white ${
                errors.password && 'is-invalid'
              }`}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              className={`form-control bg-transparent text-white border-white ${
                errors.confirmPassword && 'is-invalid'
              }`}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 fw-bold"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-light">
            Already have an account?{' '}
            <Link to="/login" className="text-warning text-decoration-none">
              Login here
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;
