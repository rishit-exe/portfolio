// Copyright (c) 2025 rishit-exe
// Licensed under the MIT License. See LICENSE file for details.

import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

export const Banner = () =>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Frontend Developer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum %  toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portolio</span>
                        <h1>{`Hi I'm Rishit, a `} <span className="wrap">{text}</span></h1>
                        <p>I am currently a 1st Yr student pursuing BTech in Computer Science. I'm not very handy with web development, but I'm not bad at it either.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>

                    <Col x={12} md={6} xl={5}> 
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}