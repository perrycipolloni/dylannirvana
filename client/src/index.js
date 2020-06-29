import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Route, 
  // Link, 
  NavLink,
  Switch,
  BrowserRouter as Router 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// import Container from 'react-bootstrap/Container'
// import './index.css';
import './custom.scss'; // Works! Compiled by WebPack????
import App from './App';
// import logo from './tone150.png';
import Footer from './components/Footer'
import Media from './routes/media';
import Clients from './routes/clients';
import About from './routes/About';
// import Clients from './routes/clients';
import Contact from './routes/contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';
// import NavbarBrand from 'react-bootstrap/NavbarBrand';
import gsap from 'gsap'

// NOTE: Scrolling https://www.npmjs.com/package/react-router-scroll ?
// TODO: nav.navitem.onclick(close nav dropdown) 

// const ani = () => gsap.from(this,{duration: 1, x: 140, stagger: 0.25})
// const log = () => console.log(this)



const routing = (
  <Router>
    <div>  
      <div className="navbar-container">
        <Navbar collapseOnSelect className="navbar-dark" expand="none" bg="dark">

          {/* <NavbarBrand>
            <Nav.Item>
              <NavLink className="nav-link" exact activeClassName="active" to="/">
              Versatile Tone Group       
              </NavLink>         
            </Nav.Item>
          </NavbarBrand> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >   
              <Nav.Item onClick={() => gsap.from(".circle1", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle1">
                <NavLink className="nav-link" exact activeClassName="active" to="/">
                  Tone
                </NavLink>         
              </Nav.Item>
             
              <Nav.Item onClick={() => gsap.from(".circle2", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle2">
                <NavLink className="nav-link" activeClassName="active" to="/clients">
                  Clients
                </NavLink>         
              </Nav.Item>

              <Nav.Item onClick={() => gsap.from(".circle3", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle3">
                <NavLink className="nav-link" activeClassName="active" to="/media">
                  Media
                </NavLink>         
              </Nav.Item>

              <Nav.Item onClick={() => gsap.from(".circle4", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle4">
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  About
                </NavLink>         
              </Nav.Item>

              <Nav.Item onClick={() => gsap.from(".circle5", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle5">
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  Contact
                </NavLink>         
              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div> 
    

      {/* <Navbar bg="dark" expand="md">
        <Navbar.Toggle aria-controls="theNavbar" />
        <Navbar.Collapse className="justify-content-center"  id="theNavbar">

          <Nav.Item>
            <NavLink className="nav-link" exact activeClassName="active" to="/">
            Talent Agency for Music       
            </NavLink>         
          </Nav.Item>

          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/artists">
              Clients
            </NavLink>         
          </Nav.Item>

          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/media">
              Media
            </NavLink>         
          </Nav.Item>

          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/about">
              About
            </NavLink>         
          </Nav.Item>

          <Nav.Item>
            <NavLink className="nav-link" exact activeClassName="active" to="/contact">
              Contact
            </NavLink>         
          </Nav.Item>

        </Navbar.Collapse>
      </Navbar> */}

      {/* <Container> */}
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/artists/:id" component={Artists} />
        <Route path="/artists" component={Artists} /> */}
        <Route path="/clients/:id" component={Clients} />
        <Route path="/clients" component={Clients} />
        <Route path="/media" component={Media} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> 
      {/* </Container> */}

      {/* BOOTSTRAP */}
      {/* FOOTER */}
      {/* <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    
    {/* FOOTER NAV */}

      <Footer />

      {/* <Nav className="justify-content-center footer" >
        <Nav.Item >
          <p className="tinytype">Copyright 2020</p>
        </Nav.Item> */}

        {/* <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/artists">
            Artists
          </NavLink>         
        </Nav.Item> */}
      {/* </Nav> */}

    </div>
  </Router>
// gsap.from(".circle", {duration: 1, delay: 1.5, opacity: 0, y: 150, stagger: 0.25});
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






