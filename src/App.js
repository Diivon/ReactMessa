import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import Dialog from './components/Dialog'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
	<>
  <BrowserRouter>
	  <div className = "col-md-8 content-wrapper p-0">
		  <nav className = "navbar navbar-dark navbar-expand-lg gc-navbar">
      	<div className = "navbar-brand gc-navbar-brand">Glance</div>
      	<ul className = "navbar-nav">
      		<li className = "nav-item">
      			<NavLink className = "nav-link" to = "/" exact>Home</NavLink>
      		</li>
      		<li className = "nav-item">
      			<NavLink className = "nav-link" to = "/About">About</NavLink>
      		</li>
      	</ul>
      </nav>
			<Switch>
				<Route path = {'/About'} component = {About} />
				<Route path = {'/'} exact component = {Home} />
			</Switch>
		</div>
  </BrowserRouter>
  <Dialog />
  </>
  );
}

export default App;
