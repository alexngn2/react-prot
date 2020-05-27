import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="Password Generator"
                imgPath={require("../components/assets/images/Password-generator.png")}
                linkURL="https://alexngn2.github.io/passsword-gen/"
              />
            </Row>
            <Row>
              <Project
                name="rock paper scissor"
                imgPath={require("../components/assets/images/rock.jpg")}
                linkURL="https://alexngn2.github.io/homework-1/rock%20paper%20scissor.html"
              />
              </Row>
               <Row>
              <Project
                name="Quiz"
                imgPath={require("../components/assets/images/weatherapp.jpg")}
                linkURL="https://alexngn2.github.io/coding-quiz/"
              />
            </Row>
            <Row>
              <Project
                name="note-taker"
                imgPath={require("../components/assets/images/note-taker.png")}
                linkURL="https://notetakerss.herokuapp.com/"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;