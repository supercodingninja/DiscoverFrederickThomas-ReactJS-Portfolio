// Ref. https://www.youtube.com/watch?v=41-jn5tdg50&list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G //

import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import './App.scss';
import { Parallax } from 'react-scroll-parallax';

// Page Content. //
import Footer from './components/footer';
import HomePage from './pageContent/home';
import AboutPage from './pageContent/about';
import ContactPage from './pageContent/contactMe';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Frederick Thomas',
      headerLinks: [
        { title: 'Home', path: '/' },

        // I'm not sure if I need to add an additional section, instead; i. e. { title: 'Intro', path: '#home' }, in order for my nave sectio to work: IT'S ALL SUPPOSE TO BE RENDERED TO THE SAME PAGE?!  ReactJS does NOT has to be a single page application (case in point, my project "Joia" https://joia.herokuapp.com/)  ReactJS provides developers with a way to model HTML into classes, with Specific render logic (which is ultra cool!); and it does NOT EXPLICITLY IMPOSE ANY SPECIFIC LOGIC "Single vs. Multi-page."  see Ref. https://stackoverflow.com/questions/32130937/does-react-js-require-app-to-be-a-single-page#:~:text=1%20Answer&text=A%20react%20application%20need%20not,like%20single%20vs%20multi%20page. //
        { title: 'Intro', path: '#home' }, // Place PROVEN and COOL OS-Phrases Theme, here!!! //
        
        { title: 'About', path: '#about' },
        { title: 'Contact', path: '#contact' }
      ],
      home: {
        title: 'Discover Frederick Thomas',
        subTitle: `If you don't, someone else will.`,
        text: 'Discover more, below!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: `Let's Talk`
      }
    }
  }


// Adding Parallax. //
ParallaxImage = () => (
  <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      <Image src="./assets/media/images/believe.jpeg"/>
      <Image src="./assets/media/images/breakfast.jpeg"/>
      <Image src="./assets/media/images/b&w.jpeg"/>
      <Image src="./assets/media/images/daddyDaughterTime.jpeg"/>
      <Image src="./assets/media/images/Sunday.jpeg"/>
      <Image src="./assets/media/images/SundayJoy.jpeg"/>
      <Image src="./assets/media/images/sonPicksOufits.jpeg"/>
      <Image src="./assets/media/images/worship.jpeg"/>
  </Parallax>
);

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            
            <Navbar.Brand>Frederick Thomas</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
           </Navbar.Collapse>
          </Navbar>

          <ParallaxBanner
              className="your-class"
              layers={[
                  {
                      image: 'https://foo.com/foo.jpg',
                      amount: 0.1,
                  },
                  {
                      image: 'https://foo.com/bar.png',
                      amount: 0.2,
                  },
              ]}
              style={{
                  height: '500px',
              }}
          >
              <h1>Discover Frederick Thomas</h1>
          </ParallaxBanner>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
};

export default App;