import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Arrows = ({
    selectedMonth, currentMonth, handlePrevious, handleNext,
}) => {

    return (
        <Styled>
            <Row>
                <Col xs="6" sm="6" className="arrows-previous" noGutter>
                    <button
                        onClick={handlePrevious}
                        disabled={selectedMonth === 0}
                    >
                        <BsChevronLeft />
                        <span>Forrige måned</span>
                    </button>
                </Col>
                <Col xs="6" sm="6" className="arrows-next" noGutter>
                    <button
                        onClick={handleNext}
                        // disabled={selectedMonth === 11 || currentMonth === selectedMonth}
                    >
                        <span>Neste måned</span>
                        <BsChevronRight />
                    </button>
                </Col>
            </Row>
        </Styled>
    );
};

export default Arrows;

const Styled = styled.div`
    button {
        font-family: 'Gotham', sans-serif;
        background: none;
        border: none;
        color: ${({ theme }) => theme.primaryColor};
        font-weight: 700;
        font-size: 16px;
        &:hover {
            cursor: pointer;
        }
        :disabled {
            cursor: not-allowed;
        }
    }
    svg {
        stroke-width: 1px;
        font-size: 20px;
        position: relative;
        top: 3px;
    }
    .arrows-next {
        text-align: right;
        svg {
            margin-left: 15px;
        }
    }
    .arrows-previous {
        text-align: left;
        svg {
            margin-right: 15px;
        }
    }
    @media only screen and (max-width: 575px) {
        svg {
            top: 5px;
        }
        span {
            font-size: 15px !important;
        }
        .arrows-next {
            svg {
                margin-left: 0px;
            }
        }
        .arrows-previous {
            svg {
                margin-right: 0px;
            }
        }
    }
`