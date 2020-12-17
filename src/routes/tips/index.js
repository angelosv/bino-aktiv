import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Layout from '../../layout';

const Tips = () => (
    <Layout>
        <Styled>
            <Container>
                <Row>
                    <Col>
                        <h1>Tips til aktiviteter</h1>
                        <p>Fysisk aktivitet styrker både fysisk og psykisk helse! Man trenger ikke å trene med blodsmak i munnen for å få effekt, fysisk aktivitet i moderat tempo gir mange positive helseeffekter. Forskning viser at man får størst helsegevinst når man går fra å være passiv til å begynne å bevege seg litt. Enhver form for fysisk aktivitet, selv husarbeid, hagearbeid og annen arbeidsrelatert fysisk aktivitet, kan gi helsegevinster og bedre livskvalitet. Begynn i det små og velg noe som du liker!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {DataTips.map((data, index) => (
                            <div key={index} className="tips-container">
                                {data.title && <h2>{data.title}</h2>}
                                {data.description && <p>{data.description}</p>}
                                {data.links && data.links.map((link, index) => (
                                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" >{link}</a>
                                ))}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>

        </Styled>
    </Layout>
)

export default Tips;

const Styled = styled.div`
    .tips-container {
        margin-top: 25px;
    }
    h2 {
        margin-bottom: 5px;
    }
    a {
        color: ${({theme}) => theme.secondaryColor};
        display: block;
        margin-bottom: 5px;
        word-wrap: break-word;
    }
`

const DataTips = [
    {
        title: 'Her er noen nyttige linker og tips til web basert trening:',
        description: 'Tirsdags Tabata med Cecilie – se egen invitasjon i Outlook!',
    },
    {
        title: 'Effektive tips til og om utetrening/styrke',
        links: [
            'https://www.nrk.no/livsstil/effektiv-trening-i-naturen-1.14539962',
            'http://www.treningute.no/treningstips',
            'https://tara.no/helse/trening/7-effektive-styrkeovelser-til-utetreningen',
        ]
    },
    {
        title: 'Løpetrening',
        links: [
            'https://www.loplabbet.no/nybegynnerprogram',
            'https://www.life.no/inspirasjon/sport-trening/loping-for-nybegynnere',
            'https://www.sats.no/magazine/trening/fa-bedre-kondisjon/tips-til-intervallokter-ute---for-nybegyn- ner-og-viderekomne/',
            'https://www.klikk.no/helse/trening/loping/lope-5-og-10-km-3505292',
        ]
    },
    {
        title: 'Styrketrening hjemme',
        links: [
            'https://www.life.no/inspirasjon/sport-trening/6-ovelser-for-a-trene-hjemme',
            'https://iform.nu/trening/sirkeltrening/effektive-treningsprogrammer-pa-15-minutter',
            'https://www.funkygine.com/2020/03/26/hjemmetrening-pa-20-minutter/',
            'https://www.vektklubb.no/artikkel/trening/24421164/de-beste-styrkeoevelsene-for-nybegynnere',
        ]
    },
    {
        title: 'Tøy og bøy i hverdagen - flere ganger om dagen',
        links: [
            'https://blogg.gronnjobb.no/ovelser-til-hjemmekontoret-fysioterapeuten-viser-deg',
            'https://www.piaseeberg.no/2016/11/29/9-ovelser-faktisk-burde-gjore-pa-jobben/',
            'https://kiropraktorgruppen.no/kontorovelser',
            'https://www.dagbladet.no/tema/ti-ovelser-som-myker-opp-nakke-og-rygg/63521982',
        ]
    },
    {
        title: 'Yoga',
        links: [
            'https://www.trening.no/treningstips/fa-en-sterk-og-smidig-sommerkropp-med-8-enkle-yogaovelser/',
            'https://www.plusstid.no/helse-og-velvaere/helse/fysisk-aktivitet/yoga-for-nybegynnere',
            'https://www.youtube.com/watch?v=qYG6FevMgAE',
            'https://www.youtube.com/watch?v=AyxQy0_XYLw',
        ]
    },
    {
        title: 'Yoga',
        links: [
            'https://www.youtube.com/watch?v=7H0FKzeuVVs',
            'https://www.youtube.com/watch?v=WIltRat63ag',
        ]
    },
]