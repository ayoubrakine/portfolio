import React from "react";
import styled from "styled-components";
import Card from "../Card/MyCard.jsx";
import { Slide } from "react-awesome-reveal";
import ensaj from "../../image/ensaj.png";
import Minnovation from "../../image/m-innovation.jpeg";
import innova from "../../image/innova.jpeg";

const Experience = () => {
    return (
        <Container id="service">
            <Slide direction="down">
                <h4>
                    Experiences
                </h4>

            </Slide>
            <Cards>

                <Slide>
                    <Card
                        Icon={ensaj}
                        title={"PROJET FIN D'ANNEE"}
                        subtitle={`05/2023 `}
                        disc={`Réalisation d'une plateforme de gestion des conférences scientifiques pour l'ENSAJ`}
                    />
                </Slide>

                <Slide>
        <Card
          Icon={ensaj}
          title={"Etudiant en première année du cycle d'ingénieur - Genie infomatique - à l'École Nationale des Sciences Appliquées d'El Jadida"}
          subtitle={`ENSA`}
          disc={`09/2022 – présent`}
        />
      </Slide>
      <Slide>
        <Card
          Icon={ensaj}
          title={"Etudiant en première année du cycle d'ingénieur - Genie infomatique - à l'École Nationale des Sciences Appliquées d'El Jadida"}
          subtitle={`ENSA`}
          disc={`09/2022 – présent`}
        />
      </Slide>
               
            </Cards>
        </Container>
    );
};

export default Experience;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
