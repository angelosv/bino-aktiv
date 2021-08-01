import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';

import DataTeams from '../../../data/DataTeams';
import DataTeamsNew from '../../../data/DataTeamsNew';
import MonthNames from '../../../data/MonthNames';
import Arrows from '../../../components/Arrows';
import Star from "../../../assets/img/Ikon_stjerne.svg";
import Medal1 from "../../../assets/img/medal_1.svg";
import Medal2 from "../../../assets/img/medal_2.svg";
import Medal3 from "../../../assets/img/medal_3.svg";
import Medal4 from "../../../assets/img/medal_4.svg";

const GraphAllActivities = ({
    activities, currentMonth, selectedMonth, handlePrevious, handleNext,
}) => {

    let resultTeam1 = 0;
    let resultTeam2 = 0;
    let resultTeam3 = 0;
    let resultTeam4 = 0;

    const activitiesInCurrentMonth = activities && activities.filter((activity) => {
        const activityMonth = (new Date(activity.date)).getMonth();
        return activityMonth === selectedMonth;
    });
    activities && activitiesInCurrentMonth && activitiesInCurrentMonth.map((result) => {
        if (result.team === 1) {
            resultTeam1 += result.duration;
        } else if (result.team === 2) {
            resultTeam2 += result.duration;
        } else if (result.team === 3) {
            resultTeam3 += result.duration;
        } else if (result.team === 4) {
            resultTeam4 += result.duration;
        }
    })
    const Results = [ resultTeam1, resultTeam2, resultTeam3, resultTeam4];
    const maxHeight = 200;
    const maxResult = Results && Math.max(...Results);
    const ResultsPositions = [
        {
            team: 1,
            result: resultTeam1,
        },
        {
            team: 2,
            result: resultTeam2,
        },
        {
            team: 3,
            result: resultTeam3,
        },
        {
            team: 4,
            result: resultTeam4,
        }
    ];
    ResultsPositions.sort(function(a, b) {
        return b.result - a.result;
    });

    const isCurrentSelected = currentMonth === selectedMonth;
    const dateChangeTeams = new Date(2021, 7, 15).getMonth();
    const TheTeams = dateChangeTeams <= selectedMonth ? DataTeamsNew : DataTeams;

    return (
        <StyledGraph>
            <Row className="month-info">
                <Col>
                    {isCurrentSelected
                        ? <h3 className="c-green">{MonthNames[selectedMonth]}</h3>
                        : (
                            <div style={{ position: "relative" }}>
                                <img src={Star} alt="stars" className="star-1" />
                                <img src={Star} alt="stars" className="star-2" />
                                <img src={Star} alt="stars" className="star-3" />
                                <h3>
                                    <span className="c-green">
                                        Vinner {MonthNames[selectedMonth]}: 
                                    </span>
                                    <span> </span>
                                    <span className="c-red">
                                        {TheTeams[ResultsPositions[0].team-1].name}
                                    </span>
                                </h3>
                                <h4 className="c-red" style={{ fontSize: 24 }}>
                                    GRATULERER!
                                </h4>
                            </div>
                        )
                    }
                </Col>
            </Row>
            <Row alignItems="end">
                {activities && Results && Results.map((result, index) => {
                    const pos = ResultsPositions.map(function(e) { return e.team; }).indexOf(index+1);
                    return (
                        <Col key={index} xs="6" sm="6" md="3">
                            <span className="c-green">{result} poeng</span>
                            <ColumnBar poeng={result * maxHeight / maxResult} />
                            {!isCurrentSelected && (
                                <div className="medal-container">
                                    <img
                                        src={pos+1 === 1 ? Medal1 : pos+1 === 2 ? Medal2 : pos+1 === 3 ? Medal3 : Medal4}
                                        alt="medal"
                                        className="medal-class"
                                    />
                                </div>
                            )}
                            <div className={`team ${(index === 0 || index === 1) && 'team-mobile'}`}>
                                <h3 className="c-red">{TheTeams[index].name}</h3>
                                {TheTeams[index].image !== '' && <img src={TheTeams[index].image} alt={TheTeams[index].name} />}
                            </div>
                        </Col>
                    )
                })}
            </Row>
            <Arrows
                selectedMonth={selectedMonth}
                currentMonth={currentMonth}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
        </StyledGraph>
    )
}

export default GraphAllActivities;

const StyledGraph = styled.div`
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: 700;
    .month-info {
        text-align: left;
        margin-bottom: 50px;
    }
    .star-1 {
        position: absolute;
        top: -70px;
        left: 32%;
    }
    .star-2 {
        position: absolute;
        top: 0px;
        left: 40%;
        width: 50px;
    }
    .star-3 {
        position: absolute;
        top: 50px;
        left: 30%;
        width: 40px;
    }
    .medal-container {
        padding-bottom: 50px;
        position: relative;
    }
    .medal-class {
        position: absolute;
        width: 100px;
        right: -20px;
        top: -50px;
    }
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
    @media only screen and (max-width: 991px) {
        .star-1 {
            left: 50%;
        }
        .star-2 {
            left: 60%;
        }
        .star-2 {
            left: 55%;
        }
    }
    @media only screen and (max-width: 767px) {
        .team-mobile {
            margin-bottom: 65px;
        }
        .star-1 {
            left: 60%;
        }
        .star-2 {
            left: 70%;
        }
        .star-3 {
            left: 50%;
        }
    }
    @media only screen and (max-width: 767px) {
        .star-2 {
            top: 25px;
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