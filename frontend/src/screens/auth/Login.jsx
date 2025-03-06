import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { CustomNavLink } from "../../router";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import authService from '../../services/authService';
import { setLogin } from '../../redux/features/authSlice';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the Terms & Policy');
      return;
    }

    try {
      const data = await authService.login(formData);
      dispatch(setLogin(data));
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <section className="register pt-5 position-relative">
      <div className="bg-success opacity-25 position-absolute top-75 rounded-circle" style={{width: '24rem', height: '24rem', filter: 'blur(24px)'}}></div>
      
      <div className="bg-dark pt-4 position-relative" style={{height: '40vh'}}>
        <Container>
          <h3 className="text-white">Log In</h3>
          <div className="d-flex align-items-center gap-3">
            <h5 className="text-success fw-normal">Home</h5>
            <h5 className="text-white fw-normal">/</h5>
            <h5 className="text-white fw-normal">Log In</h5>
          </div>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow p-4">
              <Card.Body>
                <div className="text-center">
                  <h5>New Member</h5>
                  <p className="mt-2">
                    Do you already have an account? <CustomNavLink href="/register">Signup Here</CustomNavLink>
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 mt-4">
                    <Form.Label>Enter Your Email *</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email" 
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter Your Password" 
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check 
                      type="checkbox" 
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      label="I agree to the Terms & Policy" 
                    />
                  </Form.Group>

                  <Button type="submit" variant="success" className="w-100 mb-3">
                    LOGIN
                  </Button>

                  <Card className="text-center p-3 mt-4">
                    <h5>OR SIGNIN WITH</h5>
                    <div className="d-flex justify-content-center gap-3 mt-3">
                      <Button variant="danger" className="d-flex align-items-center gap-2">
                        <FaGoogle />
                        <span>SIGNIN WITH GOOGLE</span>
                      </Button>
                      <Button variant="primary" className="d-flex align-items-center gap-2">
                        <FaFacebook />
                        <span>SIGNIN WITH FACEBOOK</span>
                      </Button>
                    </div>
                  </Card>

                  <p className="text-center mt-3">
                    By clicking the signup button, you create a Cobiro account, and you agree to Cobiros <span className="text-success text-decoration-underline">Terms & Conditions</span> &
                    <span className="text-success text-decoration-underline"> Privacy Policy</span>.
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};