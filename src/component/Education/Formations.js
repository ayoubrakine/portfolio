import React from 'react';
import styled from "styled-components";
import Card from "../Card/FormCard.jsx";
import { Slide } from "react-awesome-reveal";
import ensaj from "../../image/ensaj.png";
import ennour from "../../image/ennour.png";

export default function Formations() {
  return (
    <Container>
      <h1>Formations</h1>
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
          title={"Cycle préparatoire"}
          subtitle={`ENSA`}
          disc={`10/2020 – 06/2022`}
        />
      </Slide>
      <Slide>
        <Card
          Icon={ennour}
          title={"Baccalauréat"}
          subtitle={`Ennour`}
          disc={`09/2019 – 06/2020`}
        />
      </Slide>
    </Container>
  )
}

const Container = styled.div`
  width: 80%;
  max-width: 880px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
