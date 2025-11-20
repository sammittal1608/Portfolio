import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "Web Application",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const serviceID = "service_ijt5u29";
        const templateID = "template_sop5l4o";
        const publicKey = "eTuWjALLhhCx_JiTN";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service_type: formData.serviceType,
            message: formData.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Thank you! Your message has been sent successfully.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    serviceType: "Web Application",
                    message: "",
                });
                setIsSending(false);
            })
            .catch((err) => {
                console.log("FAILED...", err);
                alert("Failed to send message. Please try again or email me directly at sammittal1608@gmail.com");
                setIsSending(false);
            });
    };

    return (
        <Container style={{ paddingTop: "50px", paddingBottom: "50px", position: "relative", zIndex: "1" }}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h3 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
                        Or <strong className="purple">Contact Me Directly</strong>
                    </h3>
                    <Form onSubmit={handleSubmit} style={{ color: "white" }}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white", border: "none" }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white", border: "none" }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone Number (Optional)</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white", border: "none" }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formServiceType">
                            <Form.Label>Service Type</Form.Label>
                            <Form.Select
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white", border: "none" }}
                            >
                                <option value="Web Application" style={{ color: "black" }}>Web Application</option>
                                <option value="Mobile App" style={{ color: "black" }}>Mobile App</option>
                                <option value="Other" style={{ color: "black" }}>Other</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Describe your project or requirements"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white", border: "none" }}
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" type="submit" disabled={isSending} style={{ width: "100%", maxWidth: "200px" }}>
                                {isSending ? "Sending..." : "Send Message"}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;
