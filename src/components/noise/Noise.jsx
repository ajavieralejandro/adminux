import React from 'react';
import logo from './../../logo.svg';

const Noise = () =>{
    return(
        <section className="section">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Lista
        <ul>
          <li> Cursos 
          </li>
          <li> Equipos
          </li>
          <li> Webinars
          </li>
          <li> Contacto
          </li>
        </ul>
      </section>
    );
}

export default Noise;