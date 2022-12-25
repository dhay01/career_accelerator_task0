import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Paragraph from './Paragraph'
import SearchName from './Searchname'
import reportWebVitals from './reportWebVitals';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar/>
    </React.StrictMode>
);


reportWebVitals();



const paragraph = ReactDOM.createRoot(document.getElementById('paragraph'));

paragraph.render(
    <React.StrictMode>
        <Paragraph/>
    </React.StrictMode>
)


const input = ReactDOM.createRoot(document.getElementById('input'));
input.render(
    <React.StrictMode>
        <SearchName/>
    </React.StrictMode>
)


