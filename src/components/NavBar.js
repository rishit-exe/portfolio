// Copyright (c) 2025 rishit-exe
// Licensed under the MIT License. See LICENSE file for details.

import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '../assets/img/R.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" classname={scrolled ? "scrolled" : ""}>
          <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <Tooltip placement="bottom" overlay="LinkedIn">
                        <a href="https://www.linkedin.com/in/the-rishit-srivastava" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon1} alt="LinkedIn" />
                        </a>
                    </Tooltip>

                    <Tooltip placement="bottom" overlay="GitHub">
                        <a href="https://www.github.com/rishit-exe" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon2} alt="Github" />
                        </a>
                    </Tooltip>

                    <Tooltip placement="bottom" overlay="Instagram">
                        <a href="https://www.instagram.com/rishit._.srivastava" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon3} alt="Instagram" />
                        </a>
                    </Tooltip>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's Connect</span>
                </button>

              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}