import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Layout from '../../layout';

import Team1 from '../../assets/img/lag1.jpeg';
import Team2 from '../../assets/img/lag2.jpg';
import Team3 from '../../assets/img/lag3.jpg';
import Team4 from '../../assets/img/lag4.jpg';

const Teams = () => (
    <Layout>
        <Styled>
            <Container>
                <Row>
                    <Col>
                        <h1>Teams</h1>
                    </Col>
                </Row>
                <Row>
                    {Data.map((team) => (
                        <Col md="6">
                            <div className="team">
                                <h2 className="c-red">{team.name}</h2>
                                <img src={team.image} alt={team.name} />
                                <div className="team-info">
                                    <p className="c-green">Teamleder:</p>
                                    <p className="c-red">{team.leader}</p>
                                </div>
                                <div className="team-info">
                                    <p className="c-green">Motto:</p>
                                    <p className="c-red">{team.motto}</p>
                                </div>
                                {team.members && team.members.map((member) => <span className="team-member">{member}</span>)}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </Styled>
    </Layout>
)

export default Teams;

const Styled = styled.div`
    font-weight: 700;
    h1 {
        margin-bottom: 50px;
    }
    .team {
        h2 {
            margin-bottom: 25px;
            font-size: 22px;
        }
        @media only screen and (min-width: 768px) {
            max-width: 75%;
        }
        text-align: center;
        margin-bottom: 50px;
        img {
            max-width: 100%;
            height: 150px;
            border-radius: 5px;
            object-fit: cover;
        }
        &-info {
            margin-top: 20px;
            margin-bottom: 20px;
            p {
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 18px;
            }
        }
        &-member {
            font-weight: 400;
            font-size: 18px;
            display: block;
            padding-top: 10px;
        }
    }
`;

const Data = [
    {
        name: 'Bootcamp BINO',
        image: Team1,
        leader: 'Lise Anita Alstad',
        motto: '«Start hardt, øk underveis»',
        members: ["Elisabeth Arnstad", "Tove Bjerknes", "Phillip Claunch", "Malena Grant-Falch", "Ann Kristin Halvorsen", "Arne Helvig", "Anne Hunstad", "Heidi Kristiansen", "Jorge Lizano", "Ulf Munack", "Tanja Nordang", "Anne Pernille Ofstad",  "Tone Røneid", "Kathrine Nordgård", "Sissel Sandberg", "Alette Skifjeld", "Irene Andersen"],
    },
    {
        name: 'Team Power',
        image: Team2,
        leader: 'Christian Schinnes',
        motto: '«Ikke stopp når du er sliten, stopp når du er ferdig»',
        members: ["Per Kristian Troppen", "Martine Bækkelund", "Margrete Bjurstrøm", "Morten Clausen", "Anne-Lise Evensen",  "Linn Maiken Gresseth", "Ingeborg Hansen-Tangen", "Marit Høiby", "Gry Jørgensen", "Bjørn-Arne Larsen", "Cecilie Lorentzen", "Cathrine Olsen", "Svein Roseth", "Sverre Sølversen", "Beate Valsø", "Carl Samuelsen"],
    },
    {
        name: 'Hubertus- die mannshcaft',
        image: Team3,
        leader: 'Asger Friis',
        motto: '«First hard work. Then champagne!»',
        members: ["Knut Robert Andersen", "Annette Buer", "Janni Eggerdink", "Stein Erik Grøneng", "Hanne Hauge", "Heidi Holter", "Ine Jørgensen", "Ann Kristin Lillelien", "Frank Robert Lund", "Øystein Næss", "Tore Ørjansen", "Svein Persen", "Siri Sætersdal", "Ida Schwensen", "Marianne Sollie", "Elisabeth Wike", "Mona Andersen"],
    },
    {
        name: 'De utvalgte',
        image: Team4,
        leader: 'Henriette Sagerud',
        motto: '«Tar en for laget!»',
        members: ["Lise Berget", "Anne-Marit Ellingbø", "Torhild Goa", "Camilla Håvik", "Håvard Haugnes", "Arnt-Ove Hovden", "Rok Kosmina", "Jarle Lindheim", "Ingvild Felling Meyer", "Christoffer Nedberg", "Merethe Off", "Niki Line Ramsey", "Thomas Sjåvik", "Tracy Sveinhaug", "Silke Berg-Fliss", "Tone Vik"]
    },
]