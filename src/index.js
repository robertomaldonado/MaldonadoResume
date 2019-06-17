import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonalSiteDashboard from './PersonalSiteDashboard';
import * as serviceWorker from './serviceWorker';

let aboutMe = [
    {"name":"Roberto Maldonado", 
    "phone":"+850-791-8304", 
    "email": "rbt.maldonado@gmail.com",
    "linkedin":"https://www.linkedin.com/in/roberto-maldonado-470009116/",
    "github":"https://github.com/robertomaldonado/",
    },
];

ReactDOM.render(
    <PersonalSiteDashboard details={aboutMe}/>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
