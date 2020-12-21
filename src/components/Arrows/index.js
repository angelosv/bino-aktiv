import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Arrows = () => (
    <Styled>
        <Row>
            <Col xs="6" sm="6" className="arrows-previous">
                <button disabled>
                    <BsChevronLeft />
                    <span>Forrige måned</span>
                </button>
            </Col>
            <Col xs="6" sm="6" className="arrows-next">
                <button disabled>
                    <span>Neste måned</span>
                    <BsChevronRight />
                </button>
            </Col>
        </Row>
    </Styled>
)

export default Arrows;

const Styled = styled.div`
    button {
        font-family: 'Gotham', sans-serif;
        background: none;
        border: none;
        color: ${({ theme }) => theme.primaryColor};
        cursor: not-allowed;
        font-weight: 700;
        font-size: 16px;
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