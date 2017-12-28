import React from 'react';
//import render method from react dom
import { render } from 'react-dom';

//import css done by webpack automatically
import css from './styles/style.styl';

var element = <p>hi</p>; 
//render(what to render, where to render) 
render( element , document.getElementById('root') );

