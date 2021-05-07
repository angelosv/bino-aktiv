import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { getAllUsersActivities } from '../../../../redux/actions';
import DataTeams from '../../../../data/DataTeams';
import MonthNames from '../../../../data/MonthNames';
import Arrows from '../../../../components/Arrows';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import DataActivities from '../../../../data/DataActivities';

const Statistikk = () => {
    const dispatch = useDispatch();

    const currentMonth = (new Date()).getMonth();
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    useEffect(() => {
        dispatch(getAllUsersActivities());
    }, [dispatch])

    const AllUsersActivities = useSelector(state => state.activities);
    const loading = useSelector(state => state.activities.loading);

    const activities = AllUsersActivities.all;

    if (loading) {
        return (
            <Loader
                className="loader"
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
            />
        )
    }

    const handlePrevious = () => {
        setSelectedMonth(selectedMonth-1);
    }
    const handleNext = () => {
        setSelectedMonth(selectedMonth+1);
    }

    let resultTeam1 = 0;
    let resultTeam2 = 0;
    let resultTeam3 = 0;
    let resultTeam4 = 0;

    const activitiesInCurrentMonth = activities && activities.filter((activity) => {
        const activityMonth = (new Date(activity.date)).getMonth();
        return activityMonth === selectedMonth;
    });
    activitiesInCurrentMonth && activitiesInCurrentMonth.map((result) => {
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

    const Results = [ resultTeam1, resultTeam2, resultTeam3, resultTeam4];

    const TotalPointsMonth = resultTeam1 + resultTeam2 + resultTeam3 + resultTeam4;


    const TotalResultsByActivity = Object.fromEntries(DataActivities.map((activity) => [activity, 0] ));

    activitiesInCurrentMonth && activitiesInCurrentMonth.map((activity) => {
        DataActivities.map((dataActivity) => {
            if (dataActivity === activity.type) {
                const currentCount = TotalResultsByActivity[dataActivity];
                TotalResultsByActivity[dataActivity] = currentCount + activity.duration;
            }
        })    
    });

    const TotalResultsByActivitySorted = Object.fromEntries(
        Object.entries(TotalResultsByActivity).sort(([,a],[,b]) => b-a)
    );
    

    const TeamResultsByActivity = [
        Object.fromEntries(DataActivities.map((activity) => [activity, 0] )),
        Object.fromEntries(DataActivities.map((activity) => [activity, 0] )),
        Object.fromEntries(DataActivities.map((activity) => [activity, 0] )),
        Object.fromEntries(DataActivities.map((activity) => [activity, 0] )),
    ];

    const Teams = [4, 2, 1, 3];
    
    Teams.map((team, index) => (
        activitiesInCurrentMonth && activitiesInCurrentMonth.filter(m => m.team === (team)).map((activity) => {
            DataActivities.map((dataActivity) => {
                if (dataActivity === activity.type) {
                    const currentCount = TeamResultsByActivity[index][dataActivity];
                    TeamResultsByActivity[index][dataActivity] = currentCount + activity.duration;
                }
            })    
        })
    ));
    
    return (
        <Styled>
            <Row className="total-points">
                <Col>
                    <h3 className="c-green">{MonthNames[selectedMonth]}</h3>
                    <p>Totale poeng: {TotalPointsMonth}</p>
                    {Object.entries(TotalResultsByActivitySorted).map(([key, val]) => 
                        <Row key={key}>
                            <Col xs="6" sm="4" md="2">
                                <span style={{ fontWeight: 500 }}>{key}</span>
                            </Col>
                            <Col xs="3" sm="4" md="1">
                                {val}
                            </Col>
                            <Col xs="3" sm="4" md="2">
                                {(val/TotalPointsMonth*100).toFixed(1)} %
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
            <Row alignItems="end" className="teams-results">
                {activities && Results && Results.map((result, index) => {
                    const TeamResultsByActivitySorted = Object.fromEntries(
                        Object.entries(TeamResultsByActivity[index]).sort(([,a],[,b]) => b-a)
                    ); 
                    return (
                        <Col key={index} xs="6" sm="6" md="3">
                            <div className={`team ${(index === 0 || index === 1) && 'team-mobile'}`}>
                                <h3 className="c-red">{DataTeams[index].name}</h3>
                            </div>
                            <span className="c-green team-points">{result} poeng</span>
                            <div className="team-activities">
                                {Object.entries(TeamResultsByActivitySorted).map(([key, val]) => 
                                    <div key={key} className="team-activity">
                                        <span style={{ fontWeight: 500 }}>{key}</span>
                                        {' '}
                                        {val}
                                        {' ('}
                                        {(val/result*100).toFixed(0)} %
                                        {')'}
                                    </div>
                                )}
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
        </Styled>
    );
}

export default Statistikk;

const Styled = styled.div`
    .total-points {
        margin-bottom: 50px;
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 20px;
            font-weight: bold;
        }
    }
    .teams-results {
        .team-points {
            font-weight: 600;
        }
        h3 {
            margin-bottom: 10px;
        }
        .team-activities {
            margin-top: 15px;
            margin-bottom: 50px;
            font-size: 14px;
        }
        .team-activity {
            margin-bottom: 5px;
        }
    }
`;