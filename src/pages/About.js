import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
                <img
                  className="img-fluid profile-pic float-left"
                  src={require("../components/assets/images/me.png.jpg")}
                  alt="Me"
                />
                <div className="bio">
                  <p>
                  My Name is Alexander Q Nguyen. I lived in Colorado all of my life but travel to California every summer so I would say I am born in colorado but raised in California, 
                  I'm a second generation Veitnamise and able to speak veit fluently.
                  </p>
                  <h1>About Me</h1>
      <h2>Where I'm From</h2>
      <p>I am from Denver, Colorado</p>
      <h2>What are your favorite hobbies?</h2>
      <p>My two hobbies are photography and Cars. </p>
      <h2>What's your dream job?</h2>
      <p>My Dream job would be a traveling photographer or an F1 Driver or any type of race car driver.
        </p>
      <h2>Where do you live?</h2>
      <p>Currently Im staying in Littleton Colrado but would love to move somewere more warm.</p>
      <h2>Why do you want to be a web developer?</h2>
      <p>I wanted to be a web developer to be able to make money doing something im good and and transition that into something im pasitonate about and being able to allow my family to do what they are passionate about and enjoy life.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;