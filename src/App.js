import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import HFNLogo from './images/logo/logo.png';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
`;

const Header = styled.header`
  width: 100%;
  background: linear-gradient(to right, #98ded9, #6bb1bf);
  color: #fff;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 35px;
  margin-bottom: 30px;
  height: 80px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  position: sticky;
  display: grid;
`;

const Logo = styled.a`
  margin: 10px 0 0 20px;
  position: absolute;
  text-decoration: none;
  font-size: xx-large;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #6bb1bf;
  }
`;

const Main = styled.main`
  flex: 1;
  animation: ${fadeIn} 0.5s ease-in;
`;

const Footer = styled.footer`
  background: linear-gradient(to right, #98ded9, #6bb1bf);
  color: #fff;
  padding: 20px;
  margin-top: 40px;
  text-align: center;
`;

const WaveBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  z-index: -1;
  overflow: hidden;
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: ${(props) => props.color};
  transform-origin: bottom center;
  border-radius: 30% 30% 0 0;
  transform: scaleY(0.7);
  animation: waveAnimation 5s infinite;

  &:nth-child(1) {
    animation: waveAnimation 8s infinite;
    animation-delay: -0.8s;
  }

  &:nth-child(2) {
    animation: waveAnimation 10s infinite;
    animation-delay: -1s;
  }

  &:nth-child(3) {
    animation: waveAnimation 12s infinite;
  }

  @keyframes waveAnimation {
    0% {
      transform: scaleY(0.6);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0.6);
    }
  }
`;


function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Logo href="/"><img style={{width: "50%"}} src={HFNLogo}/></Logo>
          <nav style={{margin: "auto"}}>
            <h1>HFN Nursing Agency</h1>
          </nav>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
          </NavLinks>
        </Header>

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Main>
      </Container>

      <Footer>
        <p>&copy; {new Date().getFullYear()} HFN Nursing Agency. All rights reserved.</p>
      </Footer>

      <WaveBackground>
        {/* <Wave color="#9ad4ee" />
        <Wave color="#aedce9" />
        <Wave color="#b9e6ee" /> */}
        <Wave color="#e2f7ff" />
        <Wave color="#cae9f6" />
        <Wave color="#afdceb" />
      </WaveBackground>
    </Router>
  );
}

export default App;
