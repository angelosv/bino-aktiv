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
                                <h2>{team.name}</h2>
                                <img src={team.image} alt={team.name} />
                                <div className="team-info">
                                    <p className="c-green">Teamleder:</p>
                                    <p className="c-red">{team.leader}</p>
                                </div>
                                <div className="team-info">
                                    <p className="c-green">Motto:</p>
                                    <p className="c-red">{team.motto}</p>
                                </div>
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
            p {
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 18px;
            }
        }
    }
`

const Data = [
    {
        name: 'Kompani Lorentzen',
        image: Team1,
        leader: 'Cecilie Lorentzen',
        motto: '«Den som gir seg er en dritt»'
    },
    {
        name: 'Acitivitas & Festivitas',
        image: Team2,
        leader: 'Janni Eggerdink',
        motto: 'Gi litt hver dag\n– for deg selv og for teamet!'
    },
    {
        name: '71 grader BINOs',
        image: Team3,
        leader: 'Elisabeth Wike',
        motto: 'Just do It'
    },
    {
        name: 'BINO Marines',
        image: Team4,
        leader: 'Svein Roseth',
        motto: 'Born Ready'
    },
]