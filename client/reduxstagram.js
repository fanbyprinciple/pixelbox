import React from 'react';
//import render method from react dom
import { render } from 'react-dom';

//import css done by webpack automatically
import css from './styles/style.styl';

//import components
import Main from './components/Main';
var element = React.createElement(Main);
//render(what to render, where to render) 
render( <Main /> , document.getElementById('root') );

