import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteActivity } from '../../../redux/actions';
import MonthNames from "../../../data/MonthNames";
import Arrows from '../../../components/Arrows';

const weekDays = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];

const ListOwnActivities = ({
    activities, currentMonth, selectedMonth, handlePrevious, handleNext,
}) => {
    const dispatch = useDispatch();
    const currentMonthName = MonthNames[selectedMonth];
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
                        const month = MonthNames[date.getMonth()].toLowerCase();
                        return (
                            <>
                                {month === currentMonthName.toLowerCase() && (
                                    <Row className="trening-data">
                                            <Col xs="4" sm="4" md="4">
                                                <span>{dayName} {dayNumber}. {month}</span>
                                            </Col>
                                            <Col xs="3" sm="2" md="2">
                                                {activity.duration  === 10 ? (
                                                    <span>5K</span>
                                                ) : (
                                                    <span>{activity.duration * 15} min</span>
                                                )}
                                            </Col>
                                            <Col xs="3" sm="3" md="3">
                                                <span>{activity.type}</span>
                                            </Col>
                                        <Col xs="2" sm="3" md="3" onClick={() => dispatch(deleteActivity(activity.id))} style={{ textAlign: "right" }} >
                                            <span className="c-red remove-activity display-desktop">Slett aktivitet</span>
                                            <span className="c-red remove-activity display-mobile">Slett</span>
                                        </Col>
                                    </Row>
                                )}
                            </>
                        )
                    })}
                </Col>
            </Row>
            <Arrows
                selectedMonth={selectedMonth}
                currentMonth={currentMonth}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
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
    .remove-activity {
        font-weight: 700 !important;
        &:hover {
            cursor: pointer;
        }
    }
    .display-desktop {
        @media only screen and (max-width: 767px) {
            display: none !important;
        }
    }
    .display-mobile {
        @media only screen and (min-width: 768px) {
            display: none !important;
        }
    }
`