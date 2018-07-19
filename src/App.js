import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title, desc }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{desc}</h2>
    </div>
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/nosotros">Nosotros</Link>
      </li>
      <li>
        <Link to="/servicios">Servicios</Link>
      </li>
      <li>
        <Link to="/portafolio">Portafolio</Link>
      </li>
    </ul>
    <p className="App-intro">{title}</p>
  </div>
);

const Home = (props) => (
  <Page desc="Home" title="Bienvenido humano"/>
);

const Nosotros = (props) => (
  <Page  desc="Nosotros" title="Somos lo que somos"/>
);

const Servicios = (props) => (
  <Page  desc="Servicios" title="Mil Oficios"/>
);

const Portafolio = (props) => (
  <Page  desc="Portafolio" title="Mis Bombitas"/>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/nosotros" component={Nosotros}/>
        <Route path="/servicios" component={Servicios}/>
        <Route path="/portafolio" component={Portafolio}/>
      </Router>
    );
  }
}

export default App;
