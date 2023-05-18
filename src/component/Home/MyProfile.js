import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import me from "../../image/photoo.png"
import { Card } from "primereact/card";
import ayoubrakine from "./ayoubrakine.pdf";
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import './MyProfile.css';


const MyProfile = () => {
  return (
    <Container id="home" className="container">
      <Slide direction="left" >
        <Profile>
          <img
            src={me}
            alt="profile"
          />
        </Profile>
      </Slide>

      <Slide id="contenuee" direction="right">
        <Texts>
          <h1 class="green">

            <span class="greeting-text">Hello 👋 I am </span>
            Ayoub RAKINE
          </h1>
          <h3>Software Engineering Student</h3>
          {/* <p>
            <Card  >
              <p className="text-center font-medium " >
              Je suis un étudiant en génie informatique et technologies émergentes, passionné par la programmation et le développement de solutions innovantes. Actuellement inscrit dans un programme d'ingénierie à l'ENSA d'El Jadida, j'ai acquis des compétences avancées en conception, développement et maintenance de logiciels. J'ai une expérience variée dans la collaboration sur des projets, que ce soit de manière indépendante ou en équipe, ce qui m'a permis d'explorer plusieurs langages de programmation, frameworks et méthodologies de développement. ...
              </p>
            </Card>
          </p> */}
          <a href={ayoubrakine} download>
            <button className="download-button">
              <FaDownload className="download-icon" />
               <span>   </span> CV
            </button>
          </a>
         
          
          <Texts> </Texts>
          <Link to="/about">
  <button className="button-with-arrow">
    ABOUT ME <span className="arrow">➜</span>
  </button>
</Link>
           

         


        </Texts>
      </Slide>

    </Container>
  );
};

export default MyProfile;

const Container = styled.div`
display: flex;
gap: 2rem;
padding-top: 3rem;
margin-top: 2rem; /* Add margin-top */
width: 80%;
max-width: 1280px;
margin: 2rem auto; /* Adjust margin */
z-index: 1;
@media (max-width: 840px) {
  width: 90%;
}

@media (max-width: 640px) {
  flex-direction: column;
}
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    margin-top : 2rem;
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;

    border-bottom: 1px solid #ccc; /* Add a separator */
    padding-bottom: 3rem; /* Adjust the spacing */
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;

    padding-top: 2rem; /* Add spacing above the h3 element */
  }
  p {
    font-weight: 300;
  }

  button {

    margin-top: 3rem; /* Add spacing above the button */



    display: inline-block;
    outline: none;
    cursor: copy;
    font-weight: 600;
    border-color:'black';
    border-radius: 5px;
    padding: 12px 24px;
    border: 0;
    color: #3a4149;
    background: #bdedff;
    line-height: 1.15;
    font-size: 16px;
    :hover {
        transition: all .1s ease;
        box-shadow: 0 0 0 0 #fff, 0 0 0 3px rgb(94, 137, 255);
    }

  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
  }
`;