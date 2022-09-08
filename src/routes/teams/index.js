import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Layout from '../../layout';

import Team1 from '../../assets/img/team1_2022.jpeg';
import Team2 from '../../assets/img/team2_2022.png';
import Team3 from '../../assets/img/team3_2022.jpeg';
// import Team4 from '../../assets/img/lag4.jpg';

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
        name: 'The winning team',
        image: Team1,
        leader: 'Sissel Sandberg',
        motto: '«In it to win it»',
        members: ["Anita Lise Alstad", "Anne Hunstad", "Asger Friis", "Cecilie Lorentzen", "Gry Jørgensen", "Henriette Sagerud" ,"Ingvild Felling Meyer" ,"Jorge Lizano" ,"Marit Høiby" ,"Mona Andersen" ,"Sissel Sandberg" ,"Thomas Sjåvik", "Tove Bjerknes"],
    },
    {
        name: 'Fit for life',
        image: Team2,
        leader: 'Ann Kristin Halvorsen',
        motto: '«Vi pusher for livet»',
        members: ["Ann Kristin Halvorsen", "Anne-Lise Evensen", "Camilla Haavik", "Elisabeth Arnstad", "Hanne Hauge", "Ida Schwensen", "Janni Eggerdink", "Malena Grant-Falch", "Martine Bækkelund", "Tone Vik", "Stein Erik Grøneng", "Tore Ørjansen", "Helena Mikaelsen"],
    },
    {
        name: 'Darwin’s fittest Rockstars',
        image: Team3,
        leader: 'Rok Kosmina',
        motto: '«It’s a long way to the top if you wanna rock&roll»',
        members: ["Ann Kristin Lillelien", "Arnt-Ove Hovden", "Cathrine Olsen", "Heidi Kristiansen", "Ine Jørgensen", "Jeanette Myhre", "Margrete Bjurstrøm", "Merethe Off", "Rok Kosmina", "Svein Roseth", "Beate Valsøe", "David Bleich", "Kulsoom Javaid"],
    }
]