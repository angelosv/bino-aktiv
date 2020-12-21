import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import Arrows from '../../../components/Arrows';

const weekDays = ['Søndag', 'Mandag', 'Torsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
const monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Desember"
];

const ListOwnActivities = ({ activities }) => {
    const currentMonth = new Date().getMonth();
    const currentMonthName = monthNames[currentMonth];
    const activitiesSorted = activities && activities.sort((a, b) => new Date(a.date) - new Date(b.date));
    return (
        <Styled>
            <Row className="training-per-month">
                <Col>
                    <h3 className="month-title c-green">{currentMonthName}</h3>
                    {activitiesSorted && activitiesSorted.map((activity) => {
                        const date = new Date(activity.date);
                        const dayName = weekDays[(date.getDay())];
                        const dayNumber = date.getDate();
                        const month = monthNames[date.getMonth()].toLowerCase();
                        return (
                            <>
                                {month === currentMonthName.toLowerCase() && (
                                    <Row className="trening-data">
                                        <Col xs="6" sm="6" md="4">
                                            <span>{dayName} {dayNumber}. {month}</span>
                                        </Col>
                                        <Col xs="3" sm="3" md="2">
                                            <span>{activity.duration * 15} min</span>
                                        </Col>
                                        <Col xs="3" sm="3" md="3">
                                            <span>{activity.type}</span>
                                        </Col>
                                    </Row>
                                )}
                            </>
                        )
                    })}
                </Col>
            </Row>
            <Arrows />
        </Styled>
    )
};

export default ListOwnActivities;

const Styled = styled.div`
    margin-bottom: 50px;
    .dine-poeng {
        margin-top: 75px;
        margin-bottom: 25px;
    }
    .dine-trening {
        h3 {
            margin-bottom: 50px;
        }
    }
    .training-per-month {
        margin-top: 50px;
        margin-bottom: 25px;
        span {
            font-weight: 400;
        }
    }
    .month-title {
        background: ${({ theme }) => theme.greyBackground};
        width: 100%;
        padding: 15px;
        margin-bottom: 25px;
        font-weight: 700!important;
    }
    .trening-data {
        margin-bottom: 15px;
        span {
            display: inline-block;
            font-size: 18px;
            font-weight: 700;
            @media only screen and (max-width: 575px) {
                font-size: 12px;
            }
        }
    }
`