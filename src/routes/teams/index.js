import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Layout from '../../layout';

import Team1 from '../../assets/img/team1.jpg';
import Team2 from '../../assets/img/team2.jpg';
import Team3 from '../../assets/img/team3.jpg';
import Team4 from '../../assets/img/team4.jpg';

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
            width: 250px;
            height: 250px;
            border-radius: 50%;
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
        name: 'Kompani Lorentzen',
        image: Team1,
        leader: 'Cecilie Lorentzen',
        motto: '«Den som gir seg er en dritt»',
        members: ["Knut Robert Andersen", "Tove Bjerknes", "Phillip Claunch", "Anne-Lise Evensen", "Stein Erik Grøneng", "Hanne Hauge", "Ulf Munack", "Ine Jørgensen", "Marit Høiby", "Jorge Lizano", "Øystein Ness", "Merethe Off", "Tone Røneid", "Sissel Sandberg", "Alette Skifjeld", "Per Kristian Troppen", "Carl Samuelsen"],
    },
    {
        name: 'Acitivitas & Festivitas',
        image: Team2,
        leader: 'Janni Eggerdink',
        motto: '«Gi litt hver dag\n– for deg selv og for teamet!»',
        members: ["Lise Anita Alstad", "Elisabeth Arnstad", "Annette Buer", "Anne Pernille Ofstad", "Malena Grant-Falch", "Ann Kristin Halvorsen", "Arne Helvig", "Anne Hunstad", "Heidi Kristiansen", "Georg Lindefjeld", "Frank Robert Lund", "Kathrine Nordgård", "Svein Persen", "Siri Sætersdal", "Leyla Selvig", "Marianne Sollie", "Lea Tran"]
    },
    {
        name: '71 grader BINOs',
        image: Team3,
        leader: 'Elisabeth Wike',
        motto: '«Just do It»',
        members: ["Asger Friis", "Mona Andersen", "Margrete Bjurstrøm", "Morten Clausen", "Torhild Goa", "Camilla Håvik", "Håvard Haugnes", "Arnt-Ove Hovden", "Rok Kosmina", "Ann Kristin Lillelien", "Heidi Holter", "Tanja Nordang", "Niki Line Ramsey", "Silke Berg-Fliss", "Christian Schinnes", "Ingvild F. Meyer", "Ida Schwensen"]
    },
    {
        name: 'BINO Marines',
        image: Team4,
        leader: 'Svein Roseth',
        motto: '«Born Ready»',
        members: ["Irene Andersen", "Lise Berget", "Anne Christiansen", "Anne-Marit Ellingbø", "Linn Maiken Gresseth", "Ingeborg Hansen-Tangen", "Sverre Sølversen", "Gry Jørgensen", "Bjørn-Arne Larsen", "Jarle Lindheim", "Tore Ørjansen", "Henriette Sagerud", "Thomas Sjåvik", "Tracy Sveinhaug", "Tone Vik", "Inger-Marie Martinsen", "Beate Valsø", "Cathrine Olsen"]
    },
]