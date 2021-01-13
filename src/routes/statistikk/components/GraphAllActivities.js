import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';

import DataTeams from '../../../data/DataTeams';
import Arrows from '../../../components/Arrows';

const GraphAllActivities = ({ activities }) => {

    let resultTeam1 = 0;
    let resultTeam2 = 0;
    let resultTeam3 = 0;
    let resultTeam4 = 0;

    activities && activities.map((result) => {
        if (result.team === 4) {
            resultTeam1 += result.duration;
        } else if (result.team === 2) {
            resultTeam2 += result.duration;
        } else if (result.team === 1) {
            resultTeam3 += result.duration;
        } else if (result.team === 3) {
            resultTeam4 += result.duration;
        }
    })

    const maxHeight = 200;
    const Results = [ resultTeam1, resultTeam2, resultTeam3, resultTeam4];
    const maxResult = Math.max(...Results);

    return (
        <StyledGraph>
            <Row alignItems="end">
                {activities && Results.map((result, index) => (
                    <Col key={result} xs="6" sm="6" md="3">
                        <span className="c-green">{result} poeng</span>
                        <ColumnBar poeng={result * maxHeight / maxResult} />
                        <div className={`team ${(index === 0 || index === 1) && 'team-mobile'}`}>
                            <h3 className="c-red">{DataTeams[index].name}</h3>
                            <img src={DataTeams[index].image} alt={DataTeams[index].name} />
                        </div>
                    </Col>
                ))}
            </Row>
            <Arrows />
        </StyledGraph>
    )
}
export default GraphAllActivities;

const StyledGraph = styled.div`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 25px;
    font-weight: 700;
    .team {
        margin-top: 25px;
        margin-bottom: 25px;
        h3 {
            margin-bottom: 25px;
        }
        text-align: center;
        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            @media only screen and (max-width: 575px) {
                width: 100px;
                height: 100px;
            }
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
    @media only screen and (max-width: 767px) {
        .team-mobile {
            margin-bottom: 65px;
        }
    }
`


const ColumnBar = styled.div`
    background: ${({ theme }) => theme.secondaryColor };
    height: ${props => props.poeng}px;
    width: 70%;
    margin: 0 auto;
    margin-top: 15px;
    
`