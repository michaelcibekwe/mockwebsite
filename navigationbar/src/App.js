import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/about' component={About} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
