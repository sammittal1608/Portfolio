import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ServiceCards(props) {
    return (
        <Card className="project-card-view">
            {/* Placeholder image or use props.imgPath if available */}
            <Card.Img variant="top" src={props.imgPath || "https://via.placeholder.com/300x200?text=Service"} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link} target="_blank">
                    <CgWebsite /> &nbsp;
                    {"Visit Gig"}
                </Button>
            </Card.Body>
        </Card>
    );
}
export default ServiceCards;
