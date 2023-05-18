import React from 'react';
import styled from 'styled-components';

const cardsData = [
  {
    title: 'PFA (WORDPRESS - PHP)',
    description: "Création d'une plateforme de gestion des conférences scientifiques",
    year: 2023,
    image: require('../../image/pfa.jpg')
  },
  {
    title: 'PYTHON',
    description: "Création d'une application desktop pour qui permet de détecter le plus cours chemin entre les stations-services à partir d'une position donnée",
    year: 2022,
    image: require('../../image/station.png')
  }
  ,
  {
    title: 'WORDPRESS',
    description: "Création d'un site web pour la société ACE METAL",
    year: 2023,
    image: require('../../image/acemetal.png')
  },
  {
    title: 'LARAVEL',
    description: "Création d'une application web pour la gestion des salles et les machines",
    year: 2023,
    image: require('../../image/laravel.jpg')
  }
  ,
  {
    title: 'REACT JS - MONGODB',
    description: "Création d'une application web de recherche des restaurants",
    year: 2023,
    image: require('../../image/resto.jpg')
  },
  
  {
    title: 'REACT NATIVE',
    description: "Création d'une application mobile qui permet d'afficher l'ensemble des pokemons avec leurs détails",
    year: 2023,
    image: require('../../image/pokemon.jpg')
  }
];

const Card = ({ title, description, year, image }) => (
  <CardContainer>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{year}</span>
  </CardContainer>
);

const CardGrid = () => (
  <CardRow>
    {cardsData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        description={card.description}
        year={card.year}
        image={card.image}
      />
    ))}
  </CardRow>
);

const Projets = () => (
  <Container>
    <h1>Mes Projets</h1>
    <CardGrid />
  </Container>
);

export default Projets;

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

const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  /* Ajoutez d'autres styles personnalisés selon vos besoins */

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
