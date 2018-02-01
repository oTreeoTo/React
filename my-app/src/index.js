import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
import Login from './Login';
import Dog from './dog';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/header" component={Header}/>
			<Route path="/content" component={Content}/>
			<Route path="/footer" component={Footer}/>
			<Route path="/login" component={Login}/>
			<Route path="/dog" component={Dog}/>
		</Switch>
	</BrowserRouter>,document.getElementById('root')            
	);
