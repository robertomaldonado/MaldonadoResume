import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonalSiteDashboard from './PersonalSiteDashboard';
import * as serviceWorker from './serviceWorker';

    let allData = {
        "basics": {
          "name": "Roberto Maldonado",
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
            "region": "FL"
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
        "work": [
          {
            "company": "Florida State University - Department Of Computer Science",
            "position": "IT network support and developer",
            "location": "Tallahassee, FL",
            "website": "https://www.fsu.edu",
            "startDate": "Fall 2018",
            "endDate": "June 2019",
            "summary": "Description...",
            "highlights": [
              "Held weekly hours to provide support for 100+ new college students with homework/concept assistance Laboratory Assistant.",
              "Held hours to keep the computer laboratory monitored.",
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
          },
          {
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
        "education": [
        {
          "institution": "Florida State University",
          "area": "Tallahassee, FL",
          "studyType": "Master's in Computer Science",
          "startDate": "June 2017",
          "endDate": "December 2019",
          "gpa": "3.71",
          "courses": [
            "Networks",
            "Artificial Intelligence",
            "Mobile Computing"
            ]
        },
        {
          "institution": "Universidad San Francisco de Quito",
          "area": "Quito, Ecuador",
          "studyType": "B.Sc in Computer Science",
          "startDate": "August 2010",
          "endDate": "November 2015",
          "gpa": "3.5",
          "courses": [
            ""
          ]
        },
        {
          "institution": "Lindbergh High School",
          "area": "Saint Louis, MO",
          "studyType": "International Exchange Program",
          "startDate": "August 2009",
          "endDate": "May 2010",
          "gpa": "NA",
          "courses": [
            ""
          ]
        },
      ],
        "certificates": [{
          "title": "Award",
          "date": "2014-11-01",
          "awarder": "Company",
          "summary": "There is no spoon."
        }],
        "publications": [{
          "name": "An Approach to Detect Text Authorship in the Spanish Language",
          "location":"Larnaca, Cyprus",
          "publisher": "Company",
          "releaseDate": "November 2016",
          "website": "http://publication.com",
          "summary": "Description...",
          "highlights": [
            "Used C/C++ to build a program, that extracts a unique composition style signature from sample texts of an author and compares it with other author’s feature-set signature, obtaining a percentage of similarity.",
            "Results were delivered by using bash scripting that pre-processes data and extracts statistics before plotting the information related to authors’ feature-set signatures with gnuplot.",
          ]
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
          ]
        }],
        "references": [{
          "name": "",
          "reference": ""
        }]
      };

ReactDOM.render(
    <PersonalSiteDashboard  
      detail_items={allData.basics} 
      education_items={allData.education} 
      work_items={allData.work}
    />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
