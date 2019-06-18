import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonalSiteDashboard from './PersonalSiteDashboard';
import * as serviceWorker from './serviceWorker';

    let allData = {
        "basics": {
          "name": "Rob Maldo",
          "label": "Developer",
          "picture": "",
          "email": "rbt.maldonado[at]gmail.com",
          "phone": "(123)123-1234",
          "website": "http://tobedisplayed.com",
          "summary": "This is a summary ",
          "location": {
            "address": "1234 Highway St",
            "postalCode": "FL 32301",
            "city": "Tallahassee",
            "countryCode": "US",
            "region": "East Coast"
          },
          "profiles": [{
            "network": "Github",
            "username": "Roberto Maldonado",
            "url": "https://github.com/robertomaldonado/"
          }, 
          {
            "network": "LinkedIn",
            "username": "Roberto Maldonado",
            "url": "https://www.linkedin.com/in/roberto-maldonado-470009116/"
          }]
        },
        "work": [{
          "company": "Petroenergy - Pipeline Integrity",
          "position": "Intern",
          "location": "Quito, Ecuador",
          "website": "https://petroenergy.com.ec",
          "startDate": "June 2014",
          "endDate": "August 2014",
          "summary": "Description...",
          "highlights": [
            "Updated and modified the company's website as content needed to be changed, measured by a new functional and responsive website presentation using JavaScript, Css and Html.",
          ]
        },
        {
            "company": "Petroenergy - Pipeline Integrity",
            "position": "IT network support and developer",
            "location": "Quito, Ecuador",
            "website": "https://petroenergy.com.ec",
            "startDate": "December 2015",
            "endDate": "June 2017",
            "summary": "Description...",
            "highlights": [
              "Accomplished to implement specialized software components with VBA for Excel that automated processing and analysis for cathodic protection and oil pipeline inspection data, as measured by instantly performing tasks that used days of data handling, by programming routines into worksheets that merge different file formats and content from the data gathering equipment readings.",
              "Presented a prototype for a GIS application that displayed gathered values at specific locations for a particular user, as measured by a web application that displayed interactive pins over a layer of GoogleMaps, by building the application from scratch with AngularJS framework, and Firebase service.",
            ]
          }],
        "volunteer": [{
          "organization": "Organization",
          "position": "Volunteer",
          "website": "http://organization.com/",
          "startDate": "2012-01-01",
          "endDate": "2013-01-01",
          "summary": "Description...",
          "highlights": [
            "Awarded 'Volunteer of the Month'"
          ]
        }],
        "education": [{
          "institution": "Universidad San Francisco de Quito",
          "area": "Computer Science",
          "studyType": "Bachelor",
          "startDate": "August 2010",
          "endDate": "November 2015",
          "gpa": "3.5",
          "courses": [
            "Basic SQL"
          ]
        },
        {
          "institution": "Florida State University",
          "area": "Computer Science",
          "studyType": "Master's Degree",
          "startDate": "June 2017",
          "endDate": "Expected December 2019",
          "gpa": "3.71",
          "courses": [
            "Networks",
            "Artificial Intelligence",
            "Mobile Computing"
            ]
        }],
        "awards": [{
          "title": "Award",
          "date": "2014-11-01",
          "awarder": "Company",
          "summary": "There is no spoon."
        }],
        "publications": [{
          "name": "Publication",
          "publisher": "Company",
          "releaseDate": "2014-10-01",
          "website": "http://publication.com",
          "summary": "Description..."
        }],
        "skills": [{
          "name": "Web Development",
          "level": "Master",
          "keywords": [
            "HTML",
            "CSS",
            "Javascript"
          ]
        }],
        "languages": [{
          "language": "English",
          "fluency": "Native speaker"
        }],
        "interests": [{
          "name": "Wildlife",
          "keywords": [
            "Ferrets",
            "Unicorns"
          ]
        }],
        "references": [{
          "name": "Jane Doe",
          "reference": "Reference..."
        }]
      };

ReactDOM.render(
    <PersonalSiteDashboard  details={allData.basics} education={allData.education}/>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
