import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonalSiteDashboard from './PersonalSiteDashboard';
import * as serviceWorker from './serviceWorker';
import resumeData from './data/personal_data.js';
    
ReactDOM.render(
    <PersonalSiteDashboard  
      detail_items = {resumeData.basics} 
      education_items = {resumeData.education} 
      work_items = {resumeData.work}
      research = {resumeData.publications}
      certificates = {resumeData.certificates}
      volunteer = {resumeData.volunteer}
      languages = {resumeData.languages}
      skills = {resumeData.skills}
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
