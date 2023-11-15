import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import shopping from "../../Assets/Projects/shopperstop1.png"
import careeradv from "../../Assets/Projects/careeradv1.png"
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://miro.medium.com/v2/resize:fit:626/0*SaNg8uUaKCMQSS5g.jpg"
              isBlog={false}
              title="Stock Predictor"
              description="Stock predicting app that calls for stock data api, plots graphs at every step to make data visualisation easy, uses SMA as training data, accepts hyper parameters like epochs, LSTM layers, training datasize, etc, validates the result and finally, predicts the future stock price."
              ghLink="https://github.com/sagar1sharma/stock-predictor"
              demoLink="https://stock-predictor-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Satvik Sewa"
              description="Mental Health assistance and diagnosis application that is currently logic based, takes yes or no answers as input to diagnostic questions and suggest underlying mental health problem you might be suffering from."
              ghLink="https://github.com/raushan27/satvik_sewa"
              demoLink="https://satvik-sewa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dd1abac9-220d-4c4d-a8c5-d755e2606800/public"
              isBlog={false}
              title="Agorithm Visualiser"
              description="A website to visualise sorting, searching and graph algorithms, to allow students and researchers to visualise algorithms to take insights, supported algorithms include, Insertion sort, Merge sort, Selection sort and Bubble sort, Linear and Binary search and BFS and DFS"
              ghLink="https://github.com/sagar1sharma/algo-visualizer"
              demoLink="https://algorithm-visualizer-23.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Eotion Detection"
              description="Trained a CNN classifier using 'kaggle dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 65.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/sagar1sharma/face-emotion-recognition"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="ShopperSite"
              description="A full stack E-commerce website with database support, payment integration with RazorPay, reponsive and light and dark mode supported, made with MERN Stack"
              ghLink="https://github.com/sagar1sharma/NeuroNexus"
              demoLink="https://shoppersite21.netlify.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careeradv}
              isBlog={false}
              title="Career Portal for Hiring Managers and Job Seekers"
              description="A full stack job portal website having dynamic support for admin/hr and users. Used MERN"
              ghLink="https://github.com/sagar1sharma/NeuroNexus"
              demoLink="https://career-adventure.vercel.app/"
              
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://miro.medium.com/v2/resize:fit:1200/0*t6Xg3RQyJx5NvX6B.jpg"
              isBlog={false}
              title="CineFile"
              description="A favourite movie site, to store and suggest your favourite movies with others, uses firebase and common database to serve the purpose of suggesting and getting other's suggestions for movies."
              ghLink="https://github.com/sagar1sharma/fav-movies"
              demoLink="https://recommended-movies.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://metro-app.netlify.app/static/media/Background.9495497de418a6e0ae09.jpg"
              isBlog={false}
              title="Metro Route"
              description="An application to get shortest route between source and destination using Djikstra Algorithm, includes support to all routes, lines, interchange, map and stations in Delhi Metro."
              ghLink="https://github.com/sagar1sharma/metro-app"
              demoLink="https://metro-app.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
