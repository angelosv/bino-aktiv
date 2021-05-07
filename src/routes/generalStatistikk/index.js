import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'styled-bootstrap-grid';
import Layout from '../../layout';
import Users from './components/Users';
import Statistikk from './components/Statistikk';

const GeneralStatistikk = () => {
    const tabs = [
        { id: 0, label: 'Statistikk' },
        { id: 1, label: 'Teams' },
    ];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Layout>
            <Styled>
                <Container>
                    <Row className="tabs-container" alignItems="center" justifyContent="center">
                        {tabs.map((tab) => (
                            <Col
                                xs="6"
                                sm="6"
                                lg="3"
                                key={tab.id}
                                className={`tab-text ${activeTab === tab.id && 'tab-active'}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                            <span>{tab.label}</span>
                            </Col>
                        ))}
                    </Row>
                    {activeTab === 0 && (
                        <Statistikk />
                    )}
                    { activeTab === 1 && (
                        <Users />
                    )}
                </Container>
            </Styled>
        </Layout>
    );
}

export default GeneralStatistikk;

const Styled = styled.div`

    margin-bottom: 25px;
    .tabs-container {
        margin-bottom: 100px;
    }
    .tab-text {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        padding-right: 35px;
        padding-left: 35px;
        color: ${({ theme }) => theme.textColor};
        &:hover {
            cursor: pointer;
        }
    }
    .tab-active {
        color: ${({ theme }) => theme.primaryColor};
        &::after {
            content: "";
            display: block;
            width: 40px;
            height: 5px;
            background-color: ${({ theme }) => theme.primaryColor};
            margin: 0px auto;
            border-radius: 10px;
            position: relative;
            top: 5px;
        }
    }
`;