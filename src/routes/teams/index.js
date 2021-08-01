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
                                {/* <img src={team.image} alt={team.name} /> */}
                                <div className="team-info">
                                    <p className="c-green">Teamleder:</p>
                                    <p className="c-red">{team.leader}</p>
                                </div>
                                {/*<div className="team-info">
                                    <p className="c-green">Motto:</p>
                                    <p className="c-red">{team.motto}</p>
                                </div>*/}
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
        name: 'Lag 1',
        image: Team1,
        leader: 'Lise Anita Alstad',
        motto: '«Den som gir seg er en dritt»',
        members: ["Elisabeth Arnstad", "Tove Bjerknes", "Phillip Claunch", "Malena Grant-Falch", "Ann Kristin Halvorsen", "Arne Helvig", "Anne Hunstad", "Heidi Kristiansen", "Jorge Lizano", "Ulf Munack", "Tanja Nordang", "Anne Pernille Ofstad",  "Tone Røneid", "Kathrine Nordgård", "Sissel Sandberg", "Alette Skifjeld", "Irene Andersen"],
        // members: ["Knut Robert Andersen", "Tove Bjerknes", "Phillip Claunch", "Anne-Lise Evensen", "Stein Erik Grøneng", "Hanne Hauge", "Ulf Munack", "Ine Jørgensen", "Marit Høiby", "Jorge Lizano", "Øystein Ness", "Merethe Off", "Tone Røneid", "Sissel Sandberg", "Alette Skifjeld", "Per Kristian Troppen", "Carl Samuelsen"],
    },
    {
        name: 'Lag 2',
        image: Team2,
        leader: 'Christian Schinnes',
        motto: '«Gi litt hver dag\n– for deg selv og for teamet!»',
        members: ["Per Kristian Troppen", "Martine Bækkelund", "Margrete Bjurstrøm", "Morten Clausen", "Anne-Lise Evensen",  "Linn Maiken Gresseth", "Ingeborg Hansen-Tangen", "Marit Høiby", "Gry Jørgensen", "Bjørn-Arne Larsen", "Cecilie Lorentzen", "Cathrine Olsen", "Svein Roseth", "Sverre Sølversen", "Beate Valsø", "Carl Samuelsen"],
        // members: ["Lise Anita Alstad", "Elisabeth Arnstad", "Annette Buer", "Anne Pernille Ofstad", "Malena Grant-Falch", "Ann Kristin Halvorsen", "Arne Helvig", "Anne Hunstad", "Heidi Kristiansen", "Georg Lindefjeld", "Frank Robert Lund", "Kathrine Nordgård", "Svein Persen", "Siri Sætersdal", "Leyla Selvig", "Marianne Sollie", "Lea Tran"]
    },
    {
        name: 'Lag 3',
        image: Team3,
        leader: 'Asger Friis',
        motto: '«Just do It»',
        members: ["Knut Robert Andersen", "Annette Buer", "Janni Eggerdink", "Stein Erik Grøneng", "Hanne Hauge", "Heidi Holter", "Ine Jørgensen", "Ann Kristin Lillelien", "Frank Robert Lund", "Øystein Næss", "Tore Ørjansen", "Svein Persen", "Siri Sætersdal", "Ida Schwensen", "Marianne Sollie", "Elisabeth Wike", "Mona Andersen"],
        // members: ["Asger Friis", "Mona Andersen", "Margrete Bjurstrøm", "Morten Clausen", "Torhild Goa", "Camilla Håvik", "Håvard Haugnes", "Arnt-Ove Hovden", "Rok Kosmina", "Ann Kristin Lillelien", "Heidi Holter", "Tanja Nordang", "Niki Line Ramsey", "Silke Berg-Fliss", "Christian Schinnes", "Ingvild F. Meyer", "Ida Schwensen"]
    },
    {
        name: 'Lag 4',
        image: Team4,
        leader: 'Henriette Sagerud',
        motto: '«Born Ready»',
        members: ["Lise Berget", "Anne-Marit Ellingbø", "Torhild Goa", "Camilla Håvik", "Håvard Haugnes", "Arnt-Ove Hovden", "Rok Kosmina", "Jarle Lindheim", "Ingvild Felling Meyer", "Christoffer Nedberg", "Merethe Off", "Niki Line Ramsey", "Thomas Sjåvik", "Tracy Sveinhaug", "Silke Berg-Fliss", "Tone Vik"]
        // members: ["Irene Andersen", "Lise Berget", "Anne-Marit Ellingbø", "Linn Maiken Gresseth", "Ingeborg Hansen-Tangen", "Sverre Sølversen", "Gry Jørgensen", "Bjørn-Arne Larsen", "Jarle Lindheim", "Tore Ørjansen", "Henriette Sagerud", "Thomas Sjåvik", "Tracy Sveinhaug", "Tone Vik", "Beate Valsø", "Cathrine Olsen", "Martine Bækkelund", "Christoffer Nedberg"]
    },
]